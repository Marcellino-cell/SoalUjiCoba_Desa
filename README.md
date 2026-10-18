# TechExam — Pemerintahan Desa (100 soal)

Aplikasi ujian front-end berbasis HTML, CSS, dan JavaScript.

## Token paket
- `DESA-2026`: soal nomor 1–35.
- `ITF-2026`: soal nomor 36–100. Token ITF dipertahankan sesuai permintaan; isi paketnya adalah lanjutan materi Pemerintahan Desa.

## Fitur
- Splash/loading screen animasi pada akses pertama di browser dengan tombol "Lewati intro".
- Gerbang token sebelum formulir identitas dibuka.
- Timer, pengacakan soal/pilihan opsional, navigasi dengan nomor global 1–100, penanda tinjau, autosave, dan pemulihan sesi.
- Penilaian otomatis, ringkasan benar/salah/kosong, ID hasil unik, barcode Code 128, ulasan kunci, cetak/simpan PDF, dan ekspor JSON.

## Menjalankan
1. Ekstrak ZIP.
2. Buka terminal di folder `techexam`.
3. Jalankan `python -m http.server 8000`.
4. Buka `http://localhost:8000`.

Barcode memakai JsBarcode dari jsDelivr sehingga perlu koneksi internet untuk memuat pustaka tersebut. Jika pustaka gagal dimuat, ID hasil tetap tersedia.

## Koreksi kunci dan ketentuan hukum
Kunci pada gambar digunakan sebagai acuan, tetapi beberapa soal/kunci perlu dikoreksi agar lebih sesuai dengan redaksi dan ketentuan terbaru. Perubahan kunci yang disengaja pada versi ini adalah: soal 50 (tugas perangkat desa), 53 (RPJM Desa 8 tahun), 57 (pembinaan/pengawasan), 74 (keputusan pembentukan panitia), dan 77 (masa jabatan kepala desa 8 tahun). Opsi/rumusan pada soal 27, 39, 48, 49, 52, dan 55 juga dirapikan agar tidak mengajarkan istilah/ketentuan yang keliru.

Sumber resmi untuk pembaruan masa jabatan dan perencanaan desa:
- UU Nomor 3 Tahun 2024 — Perubahan Kedua atas UU Nomor 6 Tahun 2014 tentang Desa: https://peraturan.bpk.go.id/Details/283617/uu-no-3-tahun-2024
- Naskah UU Nomor 3 Tahun 2024 (PDF pada Database Peraturan BPK), khususnya Pasal 39 dan Pasal 79: https://peraturan.bpk.go.id/Download/342639/UU%20Nomor%203%20Tahun%202024.pdf
- PP Nomor 43 Tahun 2014 tentang Peraturan Pelaksanaan UU Desa (riwayat perubahan PP 47/2015 dan PP 11/2019): https://jdih.kemenkeu.go.id/dok/pp-43-tahun-2014
- JsBarcode — dukungan format Code 128: https://github.com/lindell/JsBarcode

## Keamanan
Ini prototipe front-end. Token dan kunci dapat dilihat dari berkas JavaScript; hasil tersimpan secara lokal dan barcode hanya memuat ID hasil, bukan verifikasi autentik melalui server. Untuk ujian resmi, pindahkan token, kunci, penilaian, database, dan endpoint verifikasi ke backend.
