# API Hari Libur Indonesia

API sederhana untuk mendapatkan data hari libur nasional Indonesia berdasarkan tahun.

## Fitur

* Data hari libur nasional Indonesia
* Berdasarkan tahun
* REST API
* Open Source
* Deploy menggunakan Vercel

## Endpoint

```http
POST /api
```

## Request

```json
{
  "username": "your_username",
  "password": "your_password",
  "tahun": "2026"
}
```

## Response

```json
{
  "success": true,
  "tahun": 2026,
  "total": 10,
  "data": [
    {
      "id": 1,
      "tanggal": "2026-01-01",
      "nama": "Tahun Baru Masehi"
    }
  ]
}
```

## Menjalankan Secara Lokal

```bash
npm install
vercel dev
```

## Kontribusi

Kontribusi, perbaikan data, dan pengembangan fitur sangat terbuka melalui Pull Request.

## Lisensi

MIT License

## Catatan

Data hari libur bersumber dari keputusan pemerintah yang berlaku pada tahun terkait. Pengguna disarankan untuk melakukan verifikasi ulang apabila digunakan untuk kebutuhan operasional atau administratif yang bersifat kritis.

---

Dibuat dan dipelihara oleh Huda Nur.
