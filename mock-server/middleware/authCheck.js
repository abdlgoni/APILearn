const VALID_TOKEN = process.env.AUTH_TOKEN || "my-secret-token";

export const authCheck = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized",
      message: "Authorization header tidak ditemukan. Tambahkan header: Authorization: Bearer <token>",
    });
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer") {
    return res.status(401).json({
      success: false,
      error: "Unauthorized",
      message: "Format salah. Gunakan: Authorization: Bearer <token>",
    });
  }

  if (token !== VALID_TOKEN) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized",
      message: "Token tidak valid.",
    });
  }

  next();
};
