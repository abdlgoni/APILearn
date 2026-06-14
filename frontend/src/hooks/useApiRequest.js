import { useState } from "react";
import { getStatusInfo } from "../data/statusCodes";

export default function useApiRequest() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [activeReqTab, setActiveReqTab] = useState("headers");
  const [headers, setHeaders] = useState([
    { id: "1", key: "Content-Type", value: "application/json" },
  ]);
  const [reqBody, setReqBody] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [response, setResponse] = useState(null);

  // --- Header helpers ---
  const addHeader = () => {
    setHeaders((prev) => [
      ...prev,
      { id: Date.now().toString(), key: "", value: "" },
    ]);
  };

  const updateHeader = (id, field, value) => {
    setHeaders((prev) =>
      prev.map((h) => (h.id === id ? { ...h, [field]: value } : h)),
    );
  };

  const deleteHeader = (id) => {
    setHeaders((prev) => prev.filter((h) => h.id !== id));
  };

  // --- Request sender ---
  const sendRequest = async () => {
    if (!url || url.trim() === "") return;

    setIsSending(true);
    setResponse(null);

    const startTime = performance.now();

    try {
      // Build headers object — merge manual headers + auth token if filled
      const headerObj = headers
        .filter((h) => h.key.trim() !== "")
        .reduce((acc, h) => {
          acc[h.key.trim()] = h.value.trim();
          return acc;
        }, {});

      if (authToken.trim() !== "") {
        headerObj["Authorization"] = `Bearer ${authToken.trim()}`;
      }

      const options = {
        method,
        headers: headerObj,
      };

      const methodsWithBody = ["POST", "PUT", "PATCH"];
      if (methodsWithBody.includes(method) && reqBody.trim() !== "") {
        options.body = reqBody;
      }

      const res = await fetch(url, options);
      const duration = Math.round(performance.now() - startTime);

      // Parse response body
      const contentType = res.headers.get("content-type") || "";
      let bodyJson = null;
      let bodyText = "";

      if (contentType.includes("application/json")) {
        bodyJson = await res.json();
      } else {
        bodyText = await res.text();
        // Try to parse as JSON anyway — some APIs don't set content-type correctly
        try {
          bodyJson = JSON.parse(bodyText);
        } catch {
          bodyJson = null;
        }
      }

      // Parse response headers
      const responseHeaders = [];
      res.headers.forEach((value, key) => {
        responseHeaders.push({ key, value });
      });

      // Parse cookies from Set-Cookie header
      const rawCookies = res.headers.get("set-cookie");
      const cookies = rawCookies
        ? rawCookies.split(",").map((c) => {
            const [pair] = c.trim().split(";");
            const [key, ...rest] = pair.split("=");
            return { key: key.trim(), value: rest.join("=").trim() };
          })
        : [];

      // Calculate response size
      const bodyString = bodyJson ? JSON.stringify(bodyJson) : bodyText;
      const sizeBytes = new Blob([bodyString]).size;
      const size =
        sizeBytes < 1024
          ? `${sizeBytes} B`
          : `${(sizeBytes / 1024).toFixed(1)} KB`;

      // Get plain-language status info
      const statusInfo = getStatusInfo(res.status);

      setResponse({
        // StatusBadge
        status: statusInfo.label,
        isSuccess: res.status >= 200 && res.status < 300,

        // StatusExplanation
        explanationTitle: statusInfo.title,
        explanationBody: statusInfo.explanation,

        // Meta
        time: `${duration}ms`,
        size,

        // Viewers
        bodyJson: bodyJson ?? bodyText,
        headers: responseHeaders,
        cookies,

        // Raw status code — useful for future features
        statusCode: res.status,
        statusType: statusInfo.type,
      });
    } catch (err) {
      const duration = Math.round(performance.now() - startTime);

      const isNetworkError =
        err instanceof TypeError && err.message.toLowerCase().includes("fetch");

      setResponse({
        status: "Network Error",
        isSuccess: false,
        explanationTitle: isNetworkError
          ? "Tidak Bisa Terhubung ke Server"
          : "Terjadi Kesalahan",
        explanationBody: isNetworkError
          ? "Request gagal dikirim. Kemungkinan penyebab: URL tidak bisa diakses, server sedang mati, atau ada masalah koneksi internet kamu."
          : `Error: ${err.message}`,
        time: `${duration}ms`,
        size: "0 B",
        bodyJson: null,
        headers: [],
        cookies: [],
        statusCode: null,
        statusType: "client-error",
      });
    } finally {
      setIsSending(false);
    }
  };

  return {
    method,
    setMethod,
    url,
    setUrl,
    activeReqTab,
    setActiveReqTab,
    headers,
    reqBody,
    setReqBody,
    authToken,
    setAuthToken,
    isSending,
    response,
    addHeader,
    updateHeader,
    deleteHeader,
    sendRequest,
  };
}
