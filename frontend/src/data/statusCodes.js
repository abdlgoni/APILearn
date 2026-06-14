export const statusCodes = {
  // 2xx — Success
  200: {
    label: "200 OK",
    title: "Request Berhasil!",
    explanation:
      "Server menerima dan memproses request kamu dengan sukses. Data yang kamu minta dikembalikan di bawah ini.",
    type: "success",
  },
  201: {
    label: "201 Created",
    title: "Data Berhasil Dibuat!",
    explanation:
      "Server berhasil membuat data baru sesuai yang kamu kirim. Biasanya muncul setelah request POST yang sukses.",
    type: "success",
  },
  204: {
    label: "204 No Content",
    title: "Berhasil, Tanpa Isi",
    explanation:
      "Request berhasil diproses, tapi server tidak mengembalikan data apapun. Ini normal untuk operasi DELETE.",
    type: "success",
  },

  // 3xx — Redirect
  301: {
    label: "301 Moved Permanently",
    title: "Alamat Endpoint Pindah",
    explanation:
      "Endpoint yang kamu akses sudah dipindahkan secara permanen ke URL baru. Perbarui URL yang kamu gunakan.",
    type: "redirect",
  },
  304: {
    label: "304 Not Modified",
    title: "Data Tidak Berubah",
    explanation:
      "Server memberi tahu bahwa data yang kamu minta sama dengan yang sudah kamu punya sebelumnya. Tidak ada data baru yang dikembalikan.",
    type: "redirect",
  },

  // 4xx — Client Error
  400: {
    label: "400 Bad Request",
    title: "Request Tidak Valid",
    explanation:
      "Server tidak mengerti request kamu. Biasanya karena format body salah atau parameter yang dikirim tidak sesuai.",
    type: "client-error",
  },
  401: {
    label: "401 Unauthorized",
    title: "Butuh Autentikasi",
    explanation:
      "Server menolak request karena kamu belum membuktikan identitasmu. Coba tambahkan Authorization header dengan token yang valid.",
    type: "client-error",
  },
  403: {
    label: "403 Forbidden",
    title: "Akses Ditolak",
    explanation:
      "Server mengenali kamu, tapi kamu tidak punya izin untuk mengakses resource ini. Berbeda dari 401 — di sini server tahu siapa kamu, tapi tetap menolak.",
    type: "client-error",
  },
  404: {
    label: "404 Not Found",
    title: "Endpoint Tidak Ditemukan",
    explanation:
      "URL yang kamu masukkan tidak ditemukan di server. Periksa kembali apakah URL sudah benar dan tidak ada typo.",
    type: "client-error",
  },
  405: {
    label: "405 Method Not Allowed",
    title: "Method Tidak Diizinkan",
    explanation:
      "Endpoint ini ada, tapi tidak menerima method yang kamu gunakan. Misalnya, endpoint hanya menerima POST tapi kamu mengirim GET.",
    type: "client-error",
  },
  422: {
    label: "422 Unprocessable Entity",
    title: "Data Tidak Bisa Diproses",
    explanation:
      "Format request sudah benar, tapi isi datanya tidak valid. Misalnya, field yang wajib diisi tidak ada, atau tipe datanya salah.",
    type: "client-error",
  },
  429: {
    label: "429 Too Many Requests",
    title: "Terlalu Banyak Request",
    explanation:
      "Kamu mengirim terlalu banyak request dalam waktu singkat. Tunggu beberapa saat sebelum mencoba lagi.",
    type: "client-error",
  },

  // 5xx — Server Error
  500: {
    label: "500 Internal Server Error",
    title: "Error di Sisi Server",
    explanation:
      "Ada yang salah di dalam server, bukan dari sisi kamu. Ini bug di server yang perlu diperbaiki oleh developernya.",
    type: "server-error",
  },
  502: {
    label: "502 Bad Gateway",
    title: "Gateway Bermasalah",
    explanation:
      "Server yang meneruskan request kamu mendapat respons yang tidak valid dari server lain. Biasanya masalah sementara.",
    type: "server-error",
  },
  503: {
    label: "503 Service Unavailable",
    title: "Server Tidak Tersedia",
    explanation:
      "Server sedang tidak bisa menerima request — mungkin sedang maintenance atau kelebihan beban. Coba lagi nanti.",
    type: "server-error",
  },
};

/**
 * Fallback untuk status code yang tidak ada di mapping.
 */
export function getStatusInfo(statusCode) {
  if (statusCodes[statusCode]) {
    return statusCodes[statusCode];
  }

  // Generic fallback berdasarkan range
  if (statusCode >= 200 && statusCode < 300) {
    return {
      label: `${statusCode} Success`,
      title: "Request Berhasil",
      explanation: `Server mengembalikan status ${statusCode}. Request kamu diproses dengan sukses.`,
      type: "success",
    };
  }
  if (statusCode >= 300 && statusCode < 400) {
    return {
      label: `${statusCode} Redirect`,
      title: "Dialihkan",
      explanation: `Server mengarahkan kamu ke lokasi lain (status ${statusCode}).`,
      type: "redirect",
    };
  }
  if (statusCode >= 400 && statusCode < 500) {
    return {
      label: `${statusCode} Client Error`,
      title: "Ada Masalah dengan Request",
      explanation: `Server menolak request kamu dengan status ${statusCode}. Periksa kembali URL, method, dan data yang kamu kirim.`,
      type: "client-error",
    };
  }
  if (statusCode >= 500) {
    return {
      label: `${statusCode} Server Error`,
      title: "Error di Sisi Server",
      explanation: `Server mengalami masalah internal (status ${statusCode}). Ini bukan kesalahan dari sisimu.`,
      type: "server-error",
    };
  }

  return {
    label: `${statusCode}`,
    title: "Status Tidak Dikenali",
    explanation: `Status code ${statusCode} tidak dikenali. Cek dokumentasi API yang kamu gunakan.`,
    type: "unknown",
  };
}
