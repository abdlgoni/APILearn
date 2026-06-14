export const tooltipsData = {
  method: {
    title: "HTTP Method / Verbs",
    description:
      "Metode HTTP menentukan aksi apa yang ingin ditarik terhadap server. GET untuk membaca, POST membuat data, PUT memperbarui, dan DELETE untuk melenyapkan data.",
  },
  url: {
    title: "Request Endpoint URL",
    description:
      "Alamat unik di web tempat layanan API server Anda berada. Terdiri dari protokol, domain host, versi API, dan resource target.",
  },
  headers: {
    title: "Request Headers",
    description:
      "Headers berisi metadata pelengkap request. Ini biasa membawa informasi tentang format konten (Content-Type) atau token keamanan identitas Anda.",
  },
  body: {
    title: "Request Body (Payload)",
    description:
      "Data mentah (biasanya dalam bentuk format JSON) yang secara eksplisit dikirim menuju server. Biasanya digunakan bersama metode POST, PUT, atau PATCH.",
  },
  auth: {
    title: "Bearer Token Authentication",
    description:
      "Metode otentikasi standar di mana klien melempar token acak aman di dalam header 'Authorization: Bearer <token>' guna memvalidasi sesi.",
  },
};
