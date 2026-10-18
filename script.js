'use strict';

/*
 * TechExam — Pemerintahan Desa, 100 soal dalam dua paket token.
 * Front-end only. Kunci dan hasil tersimpan pada sisi browser untuk simulasi.
 * Untuk ujian resmi, pindahkan kunci, penilaian, dan verifikasi hasil ke server.
 */

const IT_QUESTION_BANK = [
  {"id": 36, "category": "Pemerintahan Desa", "question": "Kepala desa menyampaikan laporan hasil pelaksanaan APB Desa kepada Bupati setiap...", "options": ["Triwulan", "Semester", "1 tahun", "2 tahun"], "answer": 1, "explanation": "Kunci acuan untuk butir ini: B."},
  {"id": 37, "category": "Pemerintahan Desa", "question": "Seluruh pendapatan desa diterima dan disetorkan melalui desa dan penggunaannya ditetapkan dalam...", "options": ["Keputusan kepala desa", "Peraturan BPD", "Rembuk warga", "APB Desa"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 38, "category": "Pemerintahan Desa", "question": "Seluruh pendapatan desa diterima dan disetorkan melalui desa dan penggunaannya ditetapkan dalam...", "options": ["Keputusan kepala desa", "Peraturan BPD", "Rembuk warga", "APB Desa"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 39, "category": "Pemerintahan Desa", "question": "Rencana pembangunan desa untuk jangka waktu 8 tahun dinamakan...", "options": ["RPD", "RPJM Desa", "RKPD", "RPPD"], "answer": 1, "explanation": "Kunci B. Istilah yang tepat adalah RPJM Desa. UU Nomor 3 Tahun 2024 menetapkan RPJM Desa untuk jangka waktu 8 tahun."},
  {"id": 40, "category": "Pemerintahan Desa", "question": "Seluruh sumber pendapatan dan pengeluaran desa harus dicatat di...", "options": ["Anggaran penerimaan dan pengeluaran keuangan desa", "Keuangan desa", "Anggaran desa", "Anggaran Pendapatan dan Belanja Desa (APB Desa)"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 41, "category": "Pemerintahan Desa", "question": "Kepala urusan keuangan membantu sekretaris desa dalam urusan pelayanan administrasi. Tugas berikut yang bukan tugasnya adalah...", "options": ["Menyiapkan draf rancangan peraturan desa dan pembentukan BPD", "Melaksanakan administrasi pengelolaan keuangan desa", "Melaksanakan program dan kegiatan yang berhubungan dengan urusan keuangan desa", "Melaksanakan intensifikasi dan ekstensifikasi pendataan desa"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 42, "category": "Pemerintahan Desa", "question": "Kepala seksi pemerintahan mempunyai tugas pokok dan fungsi berikut, kecuali...", "options": ["Menyusun monografi dan profil desa", "Melaksanakan manajemen tata praja pemerintahan desa", "Melakukan pelestarian nilai sosial budaya masyarakat", "Memberikan pelayanan kepada masyarakat di bidang ketenteraman dan ketertiban"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 43, "category": "Pemerintahan Desa", "question": "Kepala seksi pelayanan mempunyai tugas pokok dan fungsi berikut, kecuali...", "options": ["Menyelenggarakan pelatihan keterampilan kerja", "Melaksanakan pelayanan kepada masyarakat di bidang pertanian dan perkebunan", "Melaksanakan pembinaan kerukunan umat beragama", "Memberikan pelayanan kepada masyarakat di bidang kesejahteraan rakyat"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 44, "category": "Pemerintahan Desa", "question": "Kepala seksi kesejahteraan mempunyai tugas pokok dan fungsi berikut, kecuali...", "options": ["Melaksanakan kegiatan yang berhubungan dengan kesejahteraan rakyat", "Pembinaan kepemudaan, olahraga, dan karang taruna", "Membantu pelaksanaan pemungutan dana sosial", "Membina kegiatan pengumpulan zakat, infak, dan sedekah"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 45, "category": "Pemerintahan Desa", "question": "Di bawah ini yang bukan tugas pokok dan fungsi sekretaris desa adalah...", "options": ["Mengadakan pemeliharaan bangunan gedung kantor, tugu batas desa, dan monumen", "Menyusun rancangan LPPD, LKPJ, dan IPPD", "Menyelenggarakan administrasi pengelolaan keuangan desa", "Melaksanakan administrasi aset desa seperti tanah, bangunan, dan barang milik desa secara tertib"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 46, "category": "Pemerintahan Desa", "question": "Kepala urusan tata usaha dan umum membantu sekretaris desa dalam urusan pelayanan administrasi. Tugas berikut yang bukan tugasnya adalah...", "options": ["Melaksanakan inventarisasi barang-barang milik desa secara tertib", "Melaksanakan penataan administrasi perangkat desa dan kepala desa", "Melaksanakan tata naskah dinas sesuai ketentuan perundang-undangan", "Melaksanakan inventarisasi dan ekstensifikasi pendataan desa"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 47, "category": "Pemerintahan Desa", "question": "Undang-undang yang mengatur tentang desa adalah...", "options": ["UU Nomor 6 Tahun 2014", "UU Nomor 32 Tahun 2004", "UU Nomor 23 Tahun 2014", "UU Nomor 33 Tahun 2004"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 48, "category": "Pemerintahan Desa", "question": "Sekretaris desa bertanggung jawab kepada...", "options": ["Kepala urusan", "Kepala desa", "Kepala seksi", "Kepala dusun"], "answer": 1, "explanation": "Sekretaris desa bertanggung jawab kepada kepala desa."},
  {"id": 49, "category": "Pemerintahan Desa", "question": "APB Desa adalah singkatan dari...", "options": ["Anggaran Pendapatan dan Belanja Desa", "Anggaran perolehan dan biaya desa", "Anggaran produk dan biaya desa", "Anggaran rumah tangga desa"], "answer": 0, "explanation": "Kunci A setelah koreksi ekspansi singkatan: APB Desa adalah Anggaran Pendapatan dan Belanja Desa."},
  {"id": 50, "category": "Pemerintahan Desa", "question": "Perangkat desa adalah unsur yang membantu kepala desa dalam...", "options": ["Melaksanakan tugas dan kewenangan kepala desa", "Menjadi panitia pemilihan kepala desa", "Membuat keputusan pembangunan desa secara mandiri", "Mengawasi dan mengontrol pelaksanaan pembangunan desa sebagai fungsi utama"], "answer": 0, "explanation": "Koreksi kunci: tugas utama perangkat desa adalah membantu kepala desa melaksanakan tugas dan kewenangannya. Pada lembar kunci gambar butir ini tertulis C, tetapi pilihan/kunci tersebut tidak sesuai dengan rumusan tugas yang benar."},
  {"id": 51, "category": "Pemerintahan Desa", "question": "BPD dibentuk dengan mekanisme sebagai berikut...", "options": ["Dipilih langsung", "Dipilih secara mufakat", "Melalui ujian tulis", "Melalui rekomendasi Bupati"], "answer": 1, "explanation": "Kunci acuan untuk butir ini: B."},
  {"id": 52, "category": "Pemerintahan Desa", "question": "Peraturan desa adalah aturan yang diundangkan di desa dan dibuat oleh...", "options": ["Kepala desa", "Tokoh masyarakat", "RT/RW dan kepala desa", "Kepala desa setelah dibahas dan disepakati bersama BPD"], "answer": 3, "explanation": "Peraturan desa ditetapkan oleh kepala desa setelah dibahas dan disepakati bersama Badan Permusyawaratan Desa (BPD)."},
  {"id": 53, "category": "Pemerintahan Desa", "question": "Menurut ketentuan terbaru, Rencana Pembangunan Jangka Menengah Desa (RPJM Desa) disusun untuk jangka waktu...", "options": ["1 tahun", "8 tahun", "2 tahun", "3 tahun"], "answer": 1, "explanation": "Koreksi kunci: RPJM Desa berlangsung 8 tahun menurut Pasal 79 UU Nomor 3 Tahun 2024; RKP Desa merupakan rencana tahunan. Lembar kunci gambar menandai D, tetapi itu materi yang tidak sesuai dengan ketentuan terbaru."},
  {"id": 54, "category": "Pemerintahan Desa", "question": "Kepala dusun bertanggung jawab kepada kepala desa melalui...", "options": ["Sekretaris desa", "Kepala seksi", "Kepala urusan", "BPD"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 55, "category": "Pemerintahan Desa", "question": "Kepala dusun/perangkat desa dapat diberhentikan apabila...", "options": ["Mengikuti upacara kemerdekaan", "Telah mencapai batas usia 60 tahun sesuai ketentuan", "Tidak berbusana rapi", "Memakai kendaraan dinas"], "answer": 1, "explanation": "Opsi diperbaiki dari usia 65 menjadi 60 tahun karena batas usia perangkat desa pada ketentuan umum adalah 60 tahun."},
  {"id": 56, "category": "Pemerintahan Desa", "question": "Mengatur dan mengurus kepentingan masyarakat berdasarkan hak asal-usul dan adat istiadat merupakan hak dari...", "options": ["Pemerintah pusat dan kabupaten/kota", "Pemerintah desa", "Masyarakat desa", "Desa"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 57, "category": "Pemerintahan Desa", "question": "Kinerja penyelenggaraan pemerintahan desa wajib dibina dan diawasi oleh...", "options": ["Lembaga kemasyarakatan desa", "Pemerintah, pemerintah daerah provinsi, dan pemerintah daerah kabupaten/kota", "Seluruh masyarakat desa", "Badan Permusyawaratan Desa"], "answer": 1, "explanation": "Koreksi kunci dari C menjadi B: pembinaan dan pengawasan dilakukan pemerintah dan pemerintah daerah pada tingkat yang ditentukan peraturan perundang-undangan."},
  {"id": 58, "category": "Pemerintahan Desa", "question": "Perangkat desa diberhentikan ketika mencapai usia...", "options": ["55 tahun", "60 tahun", "50 tahun", "45 tahun"], "answer": 1, "explanation": "Kunci acuan untuk butir ini: B."},
  {"id": 59, "category": "Pemerintahan Desa", "question": "Organisasi pengelola BUM Desa paling sedikit terdiri dari...", "options": ["Manajer dan ketua BUM Desa", "Ketua dan bendahara BUM Desa", "Penasihat dan pelaksana operasional", "Kepala unit usaha BUM Desa"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 60, "category": "Pemerintahan Desa", "question": "Jumlah anggota Badan Permusyawaratan Desa (BPD) adalah...", "options": ["7 orang, paling banyak 9 orang", "7 orang, paling banyak 11 orang", "5 orang, paling banyak 9 orang", "5 orang, paling banyak 11 orang"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 61, "category": "Pemerintahan Desa", "question": "Perangkat desa yang menjabat sebagai bendahara desa adalah unsur staf...", "options": ["Kepala seksi di desa", "Kepala urusan di desa", "Kepala dusun di desa", "Sekretariat desa"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 62, "category": "Pemerintahan Desa", "question": "Alokasi Dana Desa (ADD) adalah...", "options": ["Dana yang dibagikan secara merata", "Dana yang diterima dari pemerintah pusat", "Dana yang diterima dari kecamatan", "Dana yang diterima desa dari APBD kabupaten"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 63, "category": "Pemerintahan Desa", "question": "Dalam pengelolaan keuangan desa, tahun anggaran berlangsung selama...", "options": ["4 tahun", "3 tahun", "1 tahun", "2 tahun"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 64, "category": "Pemerintahan Desa", "question": "Pengaturan keuangan desa memiliki ruang lingkup berikut, kecuali...", "options": ["Keuangan desa", "Pendapatan desa", "Perhitungan penerimaan desa", "APB Desa"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 65, "category": "Pemerintahan Desa", "question": "Keuangan desa adalah semua hak dan kewajiban desa yang dapat dinilai dengan...", "options": ["Kerja perangkat desa dalam menarik pajak", "Penerimaan dari pajak bumi dan bangunan", "Uang dan barang yang berhubungan dengan pelaksanaan hak dan kewajiban desa", "Iuran pembangunan dari setiap warga masyarakat"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 66, "category": "Pemerintahan Desa", "question": "Pengaturan desa menurut UU Nomor 6 Tahun 2014 berasaskan hal-hal berikut, kecuali...", "options": ["Kewilayahan", "Partisipasi", "Pemberdayaan", "Kesetaraan"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 67, "category": "Pemerintahan Desa", "question": "Batas wilayah desa yang dinyatakan dalam bentuk peta desa ditetapkan dengan...", "options": ["Peraturan Bupati", "Peraturan camat", "Peraturan desa", "Peraturan gubernur"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 68, "category": "Pemerintahan Desa", "question": "Berikut ini yang bukan asas penyelenggaraan pemerintahan desa adalah...", "options": ["Pendapatan asli desa", "Kepastian hukum", "Keterbukaan", "Profesionalitas"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 69, "category": "Pemerintahan Desa", "question": "Perangkat desa terdiri dari unsur berikut, kecuali...", "options": ["Pelaksana kesukuan", "Pelaksana kewilayahan", "Pelaksana teknis", "Sekretariat desa"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 70, "category": "Pemerintahan Desa", "question": "Musyawarah desa dilaksanakan paling sedikit...", "options": ["Sekali dalam setahun", "Dua kali dalam setahun", "Tiga kali dalam setahun", "Empat kali dalam setahun"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 71, "category": "Pemerintahan Desa", "question": "Perangkat desa dilarang melakukan tindakan berikut, kecuali...", "options": ["Melaksanakan pemungutan Pajak Bumi dan Bangunan kepada masyarakat sesuai penugasan", "Menjadi pengurus partai politik", "Merangkap jabatan sebagai ketua/anggota lembaga desa yang dilarang", "Terlibat dalam kampanye pemilihan umum"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 72, "category": "Pemerintahan Desa", "question": "Perangkat desa diberhentikan karena hal-hal berikut, kecuali...", "options": ["Melakukan jalan sehat", "Berakhir masa jabatannya", "Meninggal dunia", "Melakukan tindak pidana dan telah mendapat putusan pengadilan berkekuatan hukum tetap"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 73, "category": "Pemerintahan Desa", "question": "Biaya pencalonan dan pengangkatan perangkat desa dibebankan kepada sumber berikut, kecuali...", "options": ["Pemerintah desa", "Swadaya masyarakat", "Dana pinjaman yang mengikat", "Dana-dana lain yang sah"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 74, "category": "Pemerintahan Desa", "question": "Pembentukan panitia pemilihan kepala desa ditetapkan dengan...", "options": ["Peraturan desa", "Keputusan kepala desa", "Peraturan kepala desa", "Keputusan BPD"], "answer": 3, "explanation": "Koreksi kunci dari B menjadi D: panitia pemilihan dibentuk oleh BPD dan penetapan formalnya mengacu pada keputusan BPD sesuai ketentuan pemilihan kepala desa."},
  {"id": 75, "category": "Pemerintahan Desa", "question": "Tugas utama perangkat desa adalah...", "options": ["Membantu kepala desa mengurus tanah bengkok dan memungut PBB saja", "Membantu kepala desa melaksanakan tugas dan kewenangannya", "Melaksanakan administrasi desa dan mengolah tanah bengkok saja", "Membantu tugas anggota BPD dan LPM saja"], "answer": 1, "explanation": "Kunci acuan untuk butir ini: B."},
  {"id": 76, "category": "Pemerintahan Desa", "question": "Sanksi administrasi bagi perangkat desa yang melanggar larangan berikut, kecuali...", "options": ["Teguran tertulis", "Teguran lisan", "Pemberhentian sementara", "Melakukan kerja sukarela"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 77, "category": "Pemerintahan Desa", "question": "Berdasarkan UU Desa yang berlaku saat ini, masa jabatan kepala desa adalah...", "options": ["5 tahun", "4 tahun", "7 tahun", "6 tahun", "8 tahun"], "answer": 4, "explanation": "Koreksi kunci dari D menjadi E: UU Nomor 3 Tahun 2024 menetapkan masa jabatan kepala desa 8 tahun dan dapat menjabat paling banyak 2 kali masa jabatan."},
  {"id": 78, "category": "Pemerintahan Desa", "question": "Batas usia perangkat desa menurut ketentuan umum adalah...", "options": ["Setinggi-tingginya 58 tahun", "Setinggi-tingginya 55 tahun", "Setinggi-tingginya 57 tahun", "Setinggi-tingginya 60 tahun"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 79, "category": "Pemerintahan Desa", "question": "Kepala desa dapat menjabat paling banyak...", "options": ["4 kali masa jabatan", "1 kali masa jabatan", "2 kali masa jabatan", "3 kali masa jabatan"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 80, "category": "Pemerintahan Desa", "question": "Kepala desa diberhentikan karena hal-hal berikut, kecuali...", "options": ["Masa jabatan berakhir dan telah dilantik pejabat baru", "Meninggal dunia", "Melakukan tindak pidana dengan putusan berkekuatan hukum tetap", "Menyelenggarakan hiburan di balai desa"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 81, "category": "Pemerintahan Desa", "question": "Pendapatan perangkat desa berikut ini yang tidak semestinya diterima adalah...", "options": ["Menerima penghasilan tetap setiap bulan", "Menerima bagian komisi dari proyek desa", "Menerima tunjangan yang bersumber dari APB Desa", "Menerima penghasilan lain yang sah"], "answer": 1, "explanation": "Kunci acuan untuk butir ini: B."},
  {"id": 82, "category": "Pemerintahan Desa", "question": "Para kepala urusan di desa dipimpin oleh...", "options": ["Kepala desa", "Camat", "Sekretaris desa", "Ketua BPD"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 83, "category": "Pemerintahan Desa", "question": "Para kepala seksi merupakan unsur pembantu dan pelaksana tugas operasional...", "options": ["Sekretaris desa", "Camat", "Kepala desa", "Ketua BPD"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 84, "category": "Pemerintahan Desa", "question": "Para kepala dusun merupakan satuan tugas kewilayahan yang membantu...", "options": ["Sekretaris desa", "Kepala seksi pemerintahan", "Kepala desa", "Kepala urusan umum"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 85, "category": "Pemerintahan Desa", "question": "Kondisi nyata yang khas di desa, termasuk keadaan terkini dan perkembangan yang diharapkan, dinamakan...", "options": ["Desa mandiri", "Desa mandiri", "Tipologi desa", "Prioritas pembangunan Dana Desa"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 86, "category": "Pemerintahan Desa", "question": "Calon perangkat desa harus memenuhi persyaratan pendidikan minimal...", "options": ["SMA atau sederajat", "S1", "Diploma", "SMP"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 87, "category": "Pemerintahan Desa", "question": "Calon kepala desa harus memenuhi persyaratan pendidikan minimal...", "options": ["Diploma", "SMP atau sederajat", "S1", "SMA"], "answer": 1, "explanation": "Kunci acuan untuk butir ini: B."},
  {"id": 88, "category": "Pemerintahan Desa", "question": "Modal awal BUM Desa berasal dari...", "options": ["Utang bank", "APBD", "APBN", "APB Desa"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 89, "category": "Pemerintahan Desa", "question": "Ikut serta dalam perencanaan dan pelaksanaan pembangunan merupakan tugas dari...", "options": ["Lembaga kemasyarakatan desa", "Tokoh masyarakat desa", "Masyarakat desa", "Kader masyarakat desa"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 90, "category": "Pemerintahan Desa", "question": "Pilihan kegiatan yang didahulukan dan diutamakan untuk dibiayai dengan Dana Desa disebut...", "options": ["Desa mandiri", "Desa maju", "Tipologi desa", "Prioritas penggunaan Dana Desa"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 91, "category": "Pemerintahan Desa", "question": "Menurut UU Nomor 6 Tahun 2014 Pasal 9, desa dapat dihapuskan karena alasan...", "options": ["Perintah Presiden dan Bupati", "Terjadi kekosongan pemerintahan desa", "Konflik antarwarga yang berkepanjangan", "Bencana alam dan/atau kepentingan program nasional strategis"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 92, "category": "Pemerintahan Desa", "question": "Pengakuan dan penghormatan atas desa yang sudah ada dengan keberagamannya sebelum dan sesudah terbentuknya NKRI merupakan tujuan...", "options": ["Masyarakat desa dan pemerintah desa", "Pengaturan desa", "Peraturan desa", "Pemerintah desa"], "answer": 1, "explanation": "Kunci acuan untuk butir ini: B."},
  {"id": 93, "category": "Pemerintahan Desa", "question": "Perencanaan, pelaksanaan, dan pengawasan merupakan tahapan dari...", "options": ["Pembangunan desa", "Pengadaan barang/jasa di desa", "Penyusunan RKP Desa", "Penyusunan RPJM Desa"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 94, "category": "Pemerintahan Desa", "question": "Jenis peraturan desa terdiri dari...", "options": ["Peraturan desa dan peraturan BPD", "Peraturan desa, peraturan BPD, dan peraturan kepala desa", "Peraturan desa, peraturan bersama kepala desa, dan peraturan kepala desa", "Peraturan bersama kepala desa dan peraturan kepala desa"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 95, "category": "Pemerintahan Desa", "question": "Meminta dan mendapatkan informasi dari pemerintah desa serta mengawasi penyelenggaraan pemerintahan, pelaksanaan pembangunan, pembinaan, dan pemberdayaan masyarakat desa merupakan...", "options": ["Kewenangan masyarakat desa", "Kewajiban masyarakat desa", "Tugas masyarakat desa", "Hak masyarakat desa"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 96, "category": "Pemerintahan Desa", "question": "Yang dimaksud dengan pemerintahan desa sesuai peraturan perundang-undangan adalah...", "options": ["Kepala desa, sekretaris desa, dan kepala urusan", "Kepala desa dan BPD", "Pemerintah desa dan BPD", "Kepala desa dan dinas"], "answer": 2, "explanation": "Kunci acuan untuk butir ini: C."},
  {"id": 97, "category": "Pemerintahan Desa", "question": "Yang dimaksud dengan pemerintah desa terdiri dari...", "options": ["Kepala desa dan sekretaris desa", "Kepala desa", "Kepala desa dan BPD", "Kepala desa dan perangkat desa"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."},
  {"id": 98, "category": "Pemerintahan Desa", "question": "Salah satu larangan kepala desa ialah meninggalkan tugas tanpa alasan yang jelas secara berturut-turut selama...", "options": ["30 hari", "60 hari", "25 hari", "90 hari"], "answer": 0, "explanation": "Kunci acuan untuk butir ini: A."},
  {"id": 99, "category": "Pemerintahan Desa", "question": "Penyampaian nama calon kepala desa terpilih oleh BPD kepada Bupati/Wali Kota dilakukan paling lambat...", "options": ["60 hari", "7 hari", "15 hari", "30 hari"], "answer": 1, "explanation": "Kunci acuan untuk butir ini: B."},
  {"id": 100, "category": "Pemerintahan Desa", "question": "Dalam melaksanakan tugasnya, perangkat desa dilarang...", "options": ["Merugikan kepentingan umum dan membuat keputusan yang menguntungkan diri sendiri", "Melakukan tindakan perusakan sekelompok masyarakat desa dan menjadi pengurus partai politik", "Melakukan tindakan diskriminatif terhadap warga dan golongan masyarakat tertentu", "Semua jawaban benar"], "answer": 3, "explanation": "Kunci acuan untuk butir ini: D."}
];


// Paket soal Pemerintahan Desa nomor 1–35. Kunci dimasukkan dari lembar pengguna dengan koreksi yang dicatat di README.
const DESA_QUESTION_BANK = [
  {
    id: 1, category: 'Pemerintahan Desa',
    question: "Dalam hal pemilihan kepala desa maka panitia pemilihan dibentuk oleh...",
    options: ["Sekretaris desa", "BPD", "LPMD", "Perangkat desa", "Kepala desa"],
    answer: 1, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: B.'
  },
  {
    id: 2, category: 'Pemerintahan Desa',
    question: "Syarat menjadi calon kepala desa adalah berusia paling rendah....",
    options: ["20 tahun", "25 tahun", "30 tahun", "35 tahun", "40 tahun"],
    answer: 1, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: B.'
  },
  {
    id: 3, category: 'Pemerintahan Desa',
    question: "Undang-undang yang mengatur tentang desa adalah...",
    options: ["UU nomor 4 tahun 2014", "UU nomor 5 tahun 2014", "UU nomor 6 Tahun 2014", "UU nomor 5 tahun 2015", "UU nomor 6 tahun 2015"],
    answer: 2, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: C.'
  },
  {
    id: 4, category: 'Pemerintahan Desa',
    question: "Peraturan pemerintah yang mengatur tentang Desa yaitu...",
    options: ["PP nomor 42 tahun 2014", "PP nomor 43 Tahun 2014", "PP nomor 42 tahun 2015", "PP nomor 43 tahun 2015", "PP nomor 43 tahun 2016"],
    answer: 1, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: B.'
  },
  {
    id: 5, category: 'Pemerintahan Desa',
    question: "Memimpin penyelenggaraan pemerintahan desa merupakan kewenangan...",
    options: ["Kepala desa", "Sekretaris desa", "Perangkat desa", "Masyarakat", "BPD"],
    answer: 0, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: A.'
  },
  {
    id: 6, category: 'Pemerintahan Desa',
    question: "Pendirian badan usaha milik desa disepakati melalui...",
    options: ["Musyawarah BPD", "Musyawarah pemerintah desa", "Musyawarah desa", "Musyawarah kepala desa dan BPD", "Musyawarah kepala desa dan LPMD"],
    answer: 2, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: C.'
  },
  {
    id: 7, category: 'Pemerintahan Desa',
    question: "Pendirian badan usaha milik desa ditetapkan melalui...",
    options: ["Peraturan desa", "Peraturan kepala Desa", "Peraturan ketua BPD", "Keputusan kepala Desa", "Keputusan ketua BPD"],
    answer: 0, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: A.'
  },
  {
    id: 8, category: 'Pemerintahan Desa',
    question: "Upaya peningkatan kualitas hidup dan kehidupan untuk sebesar-besarnya kesejahteraan masyarakat desa disebut....",
    options: ["Pembangunan masyarakat", "Pembangunan desa", "Pembangunan bersama masyarakat desa", "Pembangunan kawasan desa", "Pembangunan masyarakat desa"],
    answer: 2, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: C.'
  },
  {
    id: 9, category: 'Pemerintahan Desa',
    question: "Kerjasama antar desa dilaksanakan oleh badan kerjasama antar desa yang dibentuk melalui...",
    options: ["Keputusan bersama antar kepala desa", "Peraturan bersama kepala desa", "Keputusan bersama kepala desa dan BPD", "Peraturan bersama kepala desa dan BPD", "Peraturan bersama kepala desa dan BUMDes"],
    answer: 1, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: B.'
  },
  {
    id: 10, category: 'Pemerintahan Desa',
    question: "Kerjasama antar desa dituangkan dalam peraturan bersama kepala desa melalui...",
    options: ["Kesepakatan musyawarah antar desa", "Kesepakatan bersama kepala desa", "Kesepakatan bersama kepala desa dan BPD", "Kesepakatan musyawarah antar ketua BPD", "Kesepakatan bersama masyarakat dan desa"],
    answer: 0, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: A.'
  },
  {
    id: 11, category: 'Pemerintahan Desa',
    question: "Kepala desa diberhentikan karena hal-hal berikut kecuali...",
    options: ["Berakhir masa jabatan", "Tidak lagi memenuhi syarat sebagai kepala desa", "Melanggar larangan sebagai kepala desa", "Melaksanakan kewajiban sebagai kepala desa", "Dinyatakan sebagai terpidana berdasarkan putusan pengadilan yang telah mempunyai kekuatan hukum tetap"],
    answer: 3, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: D.'
  },
  {
    id: 12, category: 'Pemerintahan Desa',
    question: "Berikut adalah yang bukan merupakan tujuan penataan Desa yaitu...",
    options: ["Mewujudkan efektivitas penyelenggaraan pemerintahan desa", "Mempercepat peningkatan kesejahteraan masyarakat desa", "Mempercepat peningkatan kualitas pelayanan publik", "Meningkatkan kualitas tata kelola pemerintahan desa", "Meningkatkan kesenjangan desa"],
    answer: 4, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: E.'
  },
  {
    id: 13, category: 'Pemerintahan Desa',
    question: "Asas penyelenggaraan pemerintahan desa antara lain adalah....",
    options: ["Kepastian hukum keterbukaan kebersamaan keramahan", "Profesionalitas akuntabilitas kearifan lokal", "Keterbukaan ramah nyaman", "Ketertiban keamanan kepentingan bersama", "Ketertiban keamanan kenyamanan"],
    answer: 1, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: B.'
  },
  {
    id: 14, category: 'Pemerintahan Desa',
    question: "Tujuan penataan desa adalah kecuali...",
    options: ["Mewujudkan efektivitas penyelenggaraan pemerintahan desa", "Mempercepat peningkatan kesejahteraan pemerintah desa", "Mempercepat peningkatan kualitas pelayanan publik", "Meningkatkan kualitas tata kelola pemerintahan desa", "Meningkatkan daya saing desa"],
    answer: 1, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: B.'
  },
  {
    id: 15, category: 'Pemerintahan Desa',
    question: "Pendirian badan usaha milik desa disepakati melalui...",
    options: ["Musyawarah BPD", "Musyawarah pemerintah desa", "Musyawarah desa", "Musyawarah kepala desa dan BPD", "Musyawarah kepala desa dan LPMD"],
    answer: 2, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: C.'
  },
  {
    id: 16, category: 'Pemerintahan Desa',
    question: "Pendirian badan usaha milik desa ditetapkan melalui...",
    options: ["Peraturan desa", "Peraturan kepala Desa", "Peraturan ketua BPD", "Keputusan kepala Desa", "Keputusan ketua BPD"],
    answer: 0, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: A.'
  },
  {
    id: 17, category: 'Pemerintahan Desa',
    question: "Kawasan yang mempunyai kegiatan utama pertanian termasuk pengelolaan sumber daya alam dengan susunan fungsi kawasan sebagai tempat pemukiman pedesaan, pelayanan jasa pemerintahan, pelayanan sosial, dan kegiatan ekonomi adalah....",
    options: ["Kawasan pertanian terpadu", "Kawasan masyarakat desa", "Kawasan ekonomi desa", "Kawasan pemerintahan desa", "Kawasan perdesaan"],
    answer: 4, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: E.'
  },
  {
    id: 18, category: 'Pemerintahan Desa',
    question: "Berikut ini yang bukan termasuk dalam penataan desa adalah....",
    options: ["Pembentukan", "Penghapusan", "Penggabungan", "Perubahan status", "Pembuatan desa"],
    answer: 4, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: E.'
  },
  {
    id: 19, category: 'Pemerintahan Desa',
    question: "Kerjasama desa dengan pihak ketiga dimusyawarahkan dalam....",
    options: ["Musyawarah kepala desa dan BPD", "Musyawarah pemerintahan desa", "Musyawarah pemerintah desa", "Musyawarah desa", "Musyawarah desa dan pihak ketiga"],
    answer: 3, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: D.'
  },
  {
    id: 20, category: 'Pemerintahan Desa',
    question: "Yang merupakan kewenangan desa adalah, kecuali....",
    options: ["Kewenangan berdasarkan hak asal usul", "Kewenangan lokal berskala desa", "Kewenangan yang ditugaskan oleh pemerintah, pemerintah daerah provinsi, atau pemerintah daerah kabupaten atau kota", "Kewenangan lain yang ditugaskan oleh pemerintah, pemerintah daerah provinsi, atau pemerintah daerah kabupaten atau kota sesuai dengan ketentuan peraturan perundang-undangan", "Kewenangan berdasarkan wilayah"],
    answer: 4, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: E.'
  },
  {
    id: 21, category: 'Pemerintahan Desa',
    question: "Kepala desa menyampaikan laporan realisasi pelaksanaan APBDesa kepada Bupati atau walikota setiap...",
    options: ["2 bulan", "3 bulan", "4 bulan", "Semester", "Tahun"],
    answer: 3, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: D.'
  },
  {
    id: 22, category: 'Pemerintahan Desa',
    question: "RKP desa merupakan penjabaran dari RPJM desa untuk jangka waktu berapa tahun...",
    options: ["1 tahun", "2 tahun", "3 tahun", "5 tahun", "4 tahun"],
    answer: 0, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: A.'
  },
  {
    id: 23, category: 'Pemerintahan Desa',
    question: "Kepala desa atau yang disebut dengan nama lain dibantu perangkat desa sebagai unsur penyelenggara pemerintahan desa disebut....",
    options: ["Pemberdayaan masyarakat", "Pemberdayaan desa", "Pemerintah desa", "Tatanan desa", "Tata kelola desa"],
    answer: 2, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: C.'
  },
  {
    id: 24, category: 'Pemerintahan Desa',
    question: "Besaran penghasilan tetap perangkat desa selain sekdes adalah...",
    options: ["Paling sedikit 40% dari penghasilan tetap Kades perbulan", "Paling sedikit 50% dari penghasilan tetap Kades perbulan", "Paling sedikit 60% dari penghasilan tetap Kades perbulan", "Paling sedikit 70% dari penghasilan tetap Kades perbulan", "Paling sedikit 80% dari penghasilan tetap Kades perbulan"],
    answer: 1, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: B.'
  },
  {
    id: 25, category: 'Pemerintahan Desa',
    question: "Besaran penghasilan sekretaris desa adalah....",
    options: ["Paling sedikit 70% dari penghasilan tetap kepala desa perbulan", "Paling sedikit 80% dari penghasilan tetap kepala desa perbulan", "Paling sedikit 90% dari penghasilan tetap kepala desa perbulan", "Paling sedikit sama dengan penghasilan tetap kepala desa perbulan", "Tidak ada ketentuan"],
    answer: 0, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: A.'
  },
  {
    id: 26, category: 'Pemerintahan Desa',
    question: "Penataan Desa meliputi...",
    options: ["Pembentukan Desa penghapusan desa", "Pembentukan Desa penghapusan desa dan perbaikan perangkat desa", "Pembentukan Desa perubahan status desa", "Pembentukan Desa penghapusan Desa perubahan desa", "Penghapusan Desa perubahan status desa dan penggantian perangkat desa"],
    answer: 3, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: D.'
  },
  {
    id: 27, category: 'Pemerintahan Desa',
    question: "Peraturan Desa ditetapkan oleh...",
    options: ["Bupati/Wali Kota", "BPD", "Kepala desa", "Kepala desa setelah dibahas dan disepakati bersama BPD"],
    answer: 3, explanation: 'Opsi D diperjelas: Peraturan Desa ditetapkan kepala desa setelah dibahas dan disepakati bersama BPD.'
  },
  {
    id: 28, category: 'Pemerintahan Desa',
    question: "Kepala seksi pemerintahan mempunyai tugas pokok dan fungsi sebagai berikut, kecuali...",
    options: ["Menyusun monografi dan profil desa", "Melaksanakan manajemen tata praja pemerintahan desa", "Melakukan pelestarian nilai sosial budaya masyarakat", "Memberikan pelayanan kepada masyarakat di bidang ketentraman dan ketertiban"],
    answer: 2, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: C.'
  },
  {
    id: 29, category: 'Pemerintahan Desa',
    question: "Kepala seksi pelayanan mempunyai tugas pokok dan fungsi sebagai berikut, kecuali....",
    options: ["Menyelenggarakan pelatihan keterampilan keterampilan kerja", "Melaksanakan pelayanan kepada masyarakat di bidang pertanian dan perkebunan", "Melaksanakan pembinaan kerukunan umat beragama", "Memberikan pelayanan kepada masyarakat di bidang kesejahteraan rakyat"],
    answer: 3, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: D.'
  },
  {
    id: 30, category: 'Pemerintahan Desa',
    question: "Dalam melaksanakan tugas dan wewenangnya perangkat desa bertanggung jawab kepada...",
    options: ["Camat", "Sekretaris desa", "Kepala desa", "Semua jawaban salah"],
    answer: 2, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: C.'
  },
  {
    id: 31, category: 'Pemerintahan Desa',
    question: "Keuangan desa adalah semuanya hak dan kewajiban desa yang dapat dinilai dengan",
    options: ["Kerja perangkat desa menarik pajak", "Penerimaan dari pajak bumi dan bangunan", "Uang dan barang yang berhubungan dengan pelaksanaan hak dan kewajiban desa", "Pajak dari setiap warga desa"],
    answer: 2, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: C.'
  },
  {
    id: 32, category: 'Pemerintahan Desa',
    question: "Sekretaris desa dalam urusan keuangan di desa mempunyai tugas...",
    options: ["Penyeleksian", "Pengawasan", "Pembelanjaan", "Koordinator"],
    answer: 3, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: D.'
  },
  {
    id: 33, category: 'Pemerintahan Desa',
    question: "Pembentukan panitia pemilihan kepala desa ditetapkan dengan...",
    options: ["Kepala desa", "Peraturan desa", "Peraturan Bupati", "BPD"],
    answer: 3, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: D.'
  },
  {
    id: 34, category: 'Pemerintahan Desa',
    question: "Barang milik desa yang berasal dari kekayaan asli Desa, dibeli atau diperoleh atas beban APB Desa atau perolehan hak lainnya yang sah adalah...",
    options: ["Aset desa", "Dana desa", "Kekayaan desa", "Peta desa"],
    answer: 0, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: A.'
  },
  {
    id: 35, category: 'Pemerintahan Desa',
    question: "Dana perimbangan yang diterima kabupaten atau kota dalam anggaran pendapatan dan belanja daerah kabupaten atau kota setelah dikurangi dana alokasi khusus disebut...",
    options: ["Aset desa", "Alokasi dana Desa", "Dana desa", "APB desa"],
    answer: 1, explanation: 'Kunci acuan dari lembar jawaban yang dikirim: B.'
  },
];

const EXAM_PACKS = {
  desa: { id: 'desa', title: 'Pemerintahan Desa · Paket 1 (Soal 1–35)', code: 'DESA-001', token: 'DESA-2026', questions: DESA_QUESTION_BANK },
  it: { id: 'it', title: 'Pemerintahan Desa · Paket 2 (Soal 36–100)', code: 'ITF-001', token: 'ITF-2026', questions: IT_QUESTION_BANK }
};
let QUESTION_BANK = IT_QUESTION_BANK;
let TOTAL_QUESTIONS = QUESTION_BANK.length;

const STORAGE_DRAFT_KEY = 'techexam_draft_v4';
const STORAGE_RESULTS_KEY = 'techexam_results_v2';
const OPTION_LETTERS = ['A','B','C','D','E'];
const state = {
  screen: 'welcome',
  activePackId: null,
  questions: [],
  answers: {},
  marked: [],
  currentIndex: 0,
  candidateName: '',
  candidateClass: '',
  durationMinutes: 90,
  startedAt: 0,
  deadline: 0,
  timerHandle: null,
  saveHandle: null,
  lastResult: null,
  storageAvailable: true
};

const $ = (id) => document.getElementById(id);
const welcomeScreen = $('welcomeScreen');
const examScreen = $('examScreen');
const resultsScreen = $('resultsScreen');
const optionsContainer = $('optionsContainer');
const questionGrid = $('questionGrid');
const toastElement = $('toast');
let toastHandle = null;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createSessionQuestions(shuffleQuestionOrder) {
  const sessionQuestions = QUESTION_BANK.map(question => {
    const optionOrder = question.options.map((_, index) => index);
    return {
      ...question,
      options: optionOrder.map(index => question.options[index]),
      answer: Number.isInteger(question.answer) ? optionOrder.indexOf(question.answer) : null,
      optionOrder
    };
  });
  return shuffleQuestionOrder ? shuffle(sessionQuestions) : sessionQuestions;
}

function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    state.storageAvailable = false;
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
    state.storageAvailable = true;
    return true;
  } catch (error) {
    state.storageAvailable = false;
    return false;
  }
}

function safeStorageRemove(key) {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    state.storageAvailable = false;
    return false;
  }
}

function showToast(message) {
  toastElement.textContent = message;
  toastElement.hidden = false;
  window.clearTimeout(toastHandle);
  toastHandle = window.setTimeout(() => { toastElement.hidden = true; }, 2800);
}

function setScreen(screenName) {
  state.screen = screenName;
  welcomeScreen.hidden = screenName !== 'welcome';
  examScreen.hidden = screenName !== 'exam';
  resultsScreen.hidden = screenName !== 'results';
  $('breadcrumbCurrent').textContent = screenName === 'exam' ? 'Ujian berlangsung' : screenName === 'results' ? 'Hasil ujian' : 'Ujian digital';
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function localDateLabel(date = new Date()) {
  return new Intl.DateTimeFormat('id-ID', {day:'2-digit', month:'short', year:'numeric'}).format(date);
}

function formatElapsed(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  if (hours > 0) return `${hours} jam ${String(minutes).padStart(2,'0')} menit`;
  if (minutes > 0) return `${minutes} menit ${String(secs).padStart(2,'0')} detik`;
  return `${secs} detik`;
}

function formatClock(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;
  return `${String(minutes).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function isAnswered(question) {
  return Number.isInteger(state.answers[question.id]) && state.answers[question.id] >= 0 && state.answers[question.id] < question.options.length;
}

function answeredCount() {
  return state.questions.reduce((count, question) => count + (isAnswered(question) ? 1 : 0), 0);
}

function markedCount() {
  return state.marked.length;
}

function updateSaveStatus() {
  const node = $('saveStatus');
  if (!state.storageAvailable) {
    node.innerHTML = '<i class="save-warning-dot"></i> Simpan lokal tidak tersedia';
    node.classList.add('save-warning');
  } else {
    node.innerHTML = '<i></i> Autosave aktif';
    node.classList.remove('save-warning');
  }
}

function currentDraft() {
  return {
    version: 3,
    packId: state.activePackId,
    questionIds: state.questions.map(question => question.id),
    optionOrders: Object.fromEntries(state.questions.map(question => [String(question.id), question.optionOrder || [0,1,2,3,4]])),
    answers: state.answers,
    marked: state.marked,
    currentIndex: state.currentIndex,
    candidateName: state.candidateName,
    candidateClass: state.candidateClass,
    durationMinutes: state.durationMinutes,
    startedAt: state.startedAt,
    deadline: state.deadline,
    savedAt: Date.now()
  };
}

function saveDraft() {
  if (state.screen !== 'exam' || !state.questions.length) return;
  const success = safeStorageSet(STORAGE_DRAFT_KEY, JSON.stringify(currentDraft()));
  if (!success) showStorageWarningOnce();
  updateSaveStatus();
}

let storageWarningShown = false;
function showStorageWarningOnce() {
  if (!storageWarningShown) {
    showToast('Penyimpanan browser tidak tersedia. Jangan tutup halaman jika ingin mempertahankan sesi.');
    storageWarningShown = true;
  }
}

function getSavedDraft() {
  if (!state.activePackId) return null;
  const raw = safeStorageGet(STORAGE_DRAFT_KEY);
  if (!raw) return null;
  try {
    const draft = JSON.parse(raw);
    if (!draft || draft.version !== 3 || draft.packId !== state.activePackId || !Array.isArray(draft.questionIds) || draft.questionIds.length !== TOTAL_QUESTIONS) return null;
    const validIds = new Set(QUESTION_BANK.map(question => question.id));
    if (draft.questionIds.some(id => !validIds.has(id))) return null;
    if (!Number.isFinite(draft.deadline) || !Number.isFinite(draft.startedAt)) return null;
    return draft;
  } catch (error) {
    safeStorageRemove(STORAGE_DRAFT_KEY);
    return null;
  }
}

function renderResumePanel() {
  const draft = getSavedDraft();
  $('resumeBox').hidden = !draft;
  if (draft) {
    const answered = Object.keys(draft.answers || {}).length;
    const minutesLeft = Math.max(0, Math.ceil((draft.deadline - Date.now()) / 60000));
    $('resumeDescription').textContent = `${draft.candidateName || 'Peserta'} • ${answered} jawaban tersimpan • sekitar ${minutesLeft} menit tersisa.`;
  }
}


function updatePackLabels(pack) {
  const count = pack.questions.length;
  $('sidebarPackTitle').textContent = pack.title;
  $('sidebarQuestionCount').textContent = `${count} soal`;
  $('setupSubject').textContent = pack.title;
  const keysReady = pack.questions.every(question => Number.isInteger(question.answer) && question.answer >= 0);
  $('setupQuestionSummary').textContent = keysReady ? `${count} pertanyaan • Pilihan ganda • Nilai maksimal 100` : `${count} pertanyaan • Pilihan ganda • Kunci jawaban belum tersedia`;
  $('overviewQuestionNumber').innerHTML = `${count}<span>Q</span>`;
  $('activeExamTitle').textContent = pack.title;
  $('examCode').textContent = pack.code;
  $('questionTotal').textContent = ` / ${count}`;
  $('resultSubject').textContent = pack.title;
  $('resultQuestionCount').textContent = `${count} pertanyaan`;
  $('resultScoring').textContent = keysReady ? 'Skor akhir 0–100' : 'Menunggu kunci jawaban';
}

function verifyAccessToken(showMessage = true) {
  const submitted = String($('accessToken').value || '').trim().toUpperCase();
  const pack = Object.values(EXAM_PACKS).find(candidate => candidate.token.toUpperCase() === submitted);
  const status = $('tokenStatus');
  if (!pack) {
    state.activePackId = null;
    $('examSetupFields').hidden = true;
    $('resumeBox').hidden = true;
    status.textContent = submitted ? 'Token tidak valid. Periksa token yang diberikan pengawas.' : 'Masukkan token dari pengawas untuk membuka paket soal.';
    status.classList.remove('token-success');
    status.classList.add('token-error');
    return false;
  }
  state.activePackId = pack.id;
  QUESTION_BANK = pack.questions;
  TOTAL_QUESTIONS = QUESTION_BANK.length;
  $('examSetupFields').hidden = false;
  updatePackLabels(pack);
  renderResumePanel();
  status.textContent = showMessage ? `Token valid. Paket “${pack.title}” berhasil dibuka.` : '';
  status.classList.remove('token-error');
  status.classList.add('token-success');
  return true;
}

function startNewExam() {
  if (!verifyAccessToken(false)) { showToast('Masukkan token ujian yang valid terlebih dahulu.'); return; }
  const activePack = EXAM_PACKS[state.activePackId];
  const nameInput = $('candidateName');
  if (!nameInput.reportValidity()) return;
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.setCustomValidity('Nama peserta wajib diisi.');
    nameInput.reportValidity();
    nameInput.setCustomValidity('');
    return;
  }
  state.candidateName = name;
  state.candidateClass = $('candidateClass').value.trim();
  state.durationMinutes = Number($('durationSelect').value) || 90;
  state.questions = createSessionQuestions($('shuffleQuestions').checked);
  $('examCandidateLine').textContent = state.candidateName + (state.candidateClass ? ` • ${state.candidateClass}` : '');
  state.answers = {};
  state.marked = [];
  state.currentIndex = 0;
  state.startedAt = Date.now();
  state.deadline = state.startedAt + state.durationMinutes * 60 * 1000;
  state.lastResult = null;
  storageWarningShown = false;
  enterExam();
}

function resumeExam() {
  const draft = getSavedDraft();
  if (!draft) {
    renderResumePanel();
    showToast('Sesi tersimpan tidak ditemukan atau sudah tidak valid.');
    return;
  }
  const questionMap = new Map(QUESTION_BANK.map(question => [question.id, question]));
  state.questions = draft.questionIds.map(id => {
    const base = questionMap.get(id);
    if (!base) return null;
    const savedOrder = draft.optionOrders && draft.optionOrders[String(id)];
    const optionCount = base.options.length;
    const isValidOrder = Array.isArray(savedOrder) && savedOrder.length === optionCount && new Set(savedOrder).size === optionCount && savedOrder.every(index => Number.isInteger(index) && index >= 0 && index < optionCount);
    const optionOrder = isValidOrder ? savedOrder : base.options.map((_, index) => index);
    return { ...base, options: optionOrder.map(index => base.options[index]), answer: Number.isInteger(base.answer) ? optionOrder.indexOf(base.answer) : null, optionOrder };
  }).filter(Boolean);
  if (state.questions.length !== TOTAL_QUESTIONS) {
    safeStorageRemove(STORAGE_DRAFT_KEY);
    renderResumePanel();
    showToast('Sesi tersimpan tidak dapat dipulihkan.');
    return;
  }
  state.answers = draft.answers && typeof draft.answers === 'object' ? draft.answers : {};
  state.marked = Array.isArray(draft.marked) ? draft.marked.filter(id => state.questions.some(question => question.id === id)) : [];
  state.currentIndex = Math.min(TOTAL_QUESTIONS - 1, Math.max(0, Number(draft.currentIndex) || 0));
  state.candidateName = String(draft.candidateName || 'Peserta');
  state.candidateClass = String(draft.candidateClass || '');
  state.durationMinutes = Number(draft.durationMinutes) || 90;
  state.startedAt = Number(draft.startedAt);
  state.deadline = Number(draft.deadline);
  enterExam();
}

function enterExam() {
  setScreen('exam');
  $('examCandidateLine').textContent = state.candidateName + (state.candidateClass ? ` • ${state.candidateClass}` : '');
  renderQuestion();
  saveDraft();
  startTimer();
}

function startTimer() {
  window.clearInterval(state.timerHandle);
  updateTimerUI();
  if (state.screen !== 'exam') return;
  state.timerHandle = window.setInterval(() => {
    if (state.screen !== 'exam') {
      window.clearInterval(state.timerHandle);
      return;
    }
    const remaining = Math.ceil((state.deadline - Date.now()) / 1000);
    updateTimerUI(remaining);
    if (remaining <= 0) finishExam(true);
    else if (remaining % 5 === 0) saveDraft();
  }, 1000);
}

function updateTimerUI(remainingSeconds) {
  const remaining = Number.isFinite(remainingSeconds) ? remainingSeconds : Math.ceil((state.deadline - Date.now()) / 1000);
  $('timerText').textContent = formatClock(remaining);
  const warning = remaining <= 300;
  $('timerCard').classList.toggle('warning', warning);
  $('timerText').setAttribute('aria-label', `Sisa waktu ${formatClock(remaining)}`);
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  if (!question) return;
  $('questionNumber').textContent = String(question.id).padStart(2, '0');
  $('questionCategory').textContent = question.category.toUpperCase();
  $('questionText').textContent = question.question;
  $('questionProgressBar').style.width = `${((state.currentIndex + 1) / TOTAL_QUESTIONS) * 100}%`;
  const legend = document.createElement('legend');
  legend.className = 'sr-only';
  legend.textContent = 'Pilihan jawaban';
  const optionNodes = question.options.map((optionText, optionIndex) => {
    const label = document.createElement('label');
    label.className = 'option-choice';
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `question-${question.id}`;
    input.value = String(optionIndex);
    input.checked = state.answers[question.id] === optionIndex;
    input.setAttribute('aria-label', `Pilihan ${OPTION_LETTERS[optionIndex]}: ${optionText}`);
    input.addEventListener('change', () => selectAnswer(question, optionIndex));
    const letter = document.createElement('span');
    letter.className = 'option-letter';
    letter.textContent = OPTION_LETTERS[optionIndex];
    const text = document.createElement('span');
    text.className = 'option-text';
    text.textContent = optionText;
    const check = document.createElement('span');
    check.className = 'option-check';
    check.setAttribute('aria-hidden', 'true');
    check.textContent = '✓';
    label.append(input, letter, text, check);
    if (state.answers[question.id] === optionIndex) label.classList.add('selected');
    return label;
  });
  optionsContainer.replaceChildren(legend, ...optionNodes);
  $('prevButton').disabled = state.currentIndex === 0;
  $('nextButton').disabled = state.currentIndex === TOTAL_QUESTIONS - 1;
  const isMarked = state.marked.includes(question.id);
  $('markButton').setAttribute('aria-pressed', String(isMarked));
  $('markButtonText').textContent = isMarked ? 'Hapus tanda tinjau' : 'Tandai untuk ditinjau';
  $('answerStatus').textContent = isAnswered(question) ? `Jawaban tersimpan: ${OPTION_LETTERS[state.answers[question.id]]}` : 'Belum dijawab';
  $('answerStatus').classList.toggle('answered', isAnswered(question));
  renderQuestionGrid();
  updateAnswerSummary();
  updateSaveStatus();
}

function selectAnswer(question, optionIndex) {
  state.answers[question.id] = optionIndex;
  [...optionsContainer.querySelectorAll('.option-choice')].forEach((node, index) => {
    node.classList.toggle('selected', index === optionIndex);
  });
  $('answerStatus').textContent = `Jawaban tersimpan: ${OPTION_LETTERS[optionIndex]}`;
  $('answerStatus').classList.add('answered');
  renderQuestionGrid();
  updateAnswerSummary();
  saveDraft();
}

function renderQuestionGrid() {
  const fragment = document.createDocumentFragment();
  state.questions.forEach((question, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'question-nav-btn';
    button.textContent = String(question.id).padStart(2, '0');
    button.setAttribute('aria-label', `Buka soal ${question.id}${isAnswered(question) ? ', sudah dijawab' : ', belum dijawab'}${state.marked.includes(question.id) ? ', ditandai untuk ditinjau' : ''}`);
    if (isAnswered(question)) button.classList.add('answered');
    if (state.marked.includes(question.id)) button.classList.add('marked');
    if (index === state.currentIndex) {
      button.classList.add('current');
      button.setAttribute('aria-current', 'step');
    }
    button.addEventListener('click', () => {
      state.currentIndex = index;
      renderQuestion();
      saveDraft();
    });
    fragment.appendChild(button);
  });
  questionGrid.replaceChildren(fragment);
}

function updateAnswerSummary() {
  const answered = answeredCount();
  $('answeredCount').textContent = String(answered);
  $('unansweredCount').textContent = String(TOTAL_QUESTIONS - answered);
  $('markedCount').textContent = String(markedCount());
}

function toggleMarked() {
  const question = state.questions[state.currentIndex];
  const existingIndex = state.marked.indexOf(question.id);
  if (existingIndex >= 0) state.marked.splice(existingIndex, 1);
  else state.marked.push(question.id);
  state.marked.sort((a, b) => a - b);
  const isMarked = state.marked.includes(question.id);
  $('markButton').setAttribute('aria-pressed', String(isMarked));
  $('markButtonText').textContent = isMarked ? 'Hapus tanda tinjau' : 'Tandai untuk ditinjau';
  renderQuestionGrid();
  updateAnswerSummary();
  saveDraft();
}

function navigateQuestion(delta) {
  const nextIndex = state.currentIndex + delta;
  if (nextIndex < 0 || nextIndex >= TOTAL_QUESTIONS) return;
  state.currentIndex = nextIndex;
  renderQuestion();
  saveDraft();
}

function makeResultId() {
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let randomPart = '';
  for (let i = 0; i < 6; i += 1) randomPart += alphabet[Math.floor(Math.random() * alphabet.length)];
  return `TX-${datePart}-${randomPart}`;
}

function finishExam(isTimeout = false) {
  if (state.screen !== 'exam') return;
  const unanswered = TOTAL_QUESTIONS - answeredCount();
  if (!isTimeout) {
    const message = unanswered > 0
      ? `Masih ada ${unanswered} soal yang belum dijawab. Tetap selesaikan ujian? Jawaban kosong bernilai 0.`
      : 'Semua soal sudah dijawab. Selesaikan ujian dan hitung nilai sekarang?';
    if (!window.confirm(message)) return;
  }
  window.clearInterval(state.timerHandle);
  window.clearInterval(state.saveHandle);
  const keysReady = state.questions.every(question => Number.isInteger(question.answer) && question.answer >= 0);
  const correct = keysReady ? state.questions.reduce((count, question) => count + (isAnswered(question) && state.answers[question.id] === question.answer ? 1 : 0), 0) : null;
  const answered = answeredCount();
  const wrong = keysReady ? answered - correct : null;
  const score = keysReady ? Math.round((correct / TOTAL_QUESTIONS) * 100) : null;
  const elapsedSeconds = Math.max(0, Math.min(Date.now(), state.deadline) - state.startedAt) / 1000;
  const result = {
    id: makeResultId(),
    packId: state.activePackId,
    candidateName: state.candidateName,
    candidateClass: state.candidateClass,
    subject: EXAM_PACKS[state.activePackId].title,
    keysReady,
    score,
    correct,
    wrong,
    unanswered: TOTAL_QUESTIONS - answered,
    totalQuestions: TOTAL_QUESTIONS,
    durationMinutes: state.durationMinutes,
    elapsedSeconds: Math.floor(elapsedSeconds),
    startedAt: new Date(state.startedAt).toISOString(),
    submittedAt: new Date().toISOString(),
    timedOut: isTimeout,
    responses: state.questions.map((question, index) => ({
      number: question.id,
      questionId: question.id,
      category: question.category,
      question: question.question,
      selectedIndex: Number.isInteger(state.answers[question.id]) ? state.answers[question.id] : null,
      selectedLetter: Number.isInteger(state.answers[question.id]) ? OPTION_LETTERS[state.answers[question.id]] : null,
      selectedText: Number.isInteger(state.answers[question.id]) ? question.options[state.answers[question.id]] : null,
      correctIndex: Number.isInteger(question.answer) ? question.answer : null,
      correctLetter: Number.isInteger(question.answer) ? OPTION_LETTERS[question.answer] : null,
      correctText: Number.isInteger(question.answer) ? question.options[question.answer] : null,
      isCorrect: Number.isInteger(question.answer) && Number.isInteger(state.answers[question.id]) ? state.answers[question.id] === question.answer : null,
      explanation: question.explanation
    }))
  };
  state.lastResult = result;
  safeStorageRemove(STORAGE_DRAFT_KEY);
  saveResultHistory(result);
  renderResults(result);
  setScreen('results');
  if (isTimeout) showToast(result.keysReady ? 'Waktu habis. Jawaban yang tersimpan telah dinilai.' : 'Waktu habis. Jawaban tersimpan; nilai menunggu kunci resmi.');
}

function saveResultHistory(result) {
  let history = [];
  try {
    const raw = safeStorageGet(STORAGE_RESULTS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) history = parsed;
  } catch (error) {
    history = [];
  }
  history.unshift({id:result.id, candidateName:result.candidateName, score:result.score, submittedAt:result.submittedAt});
  safeStorageSet(STORAGE_RESULTS_KEY, JSON.stringify(history.slice(0, 10)));
}

function renderBarcode(resultId) {
  const barcodeSvg = $('barcode');
  const fallback = $('barcodeFallback');
  barcodeSvg.replaceChildren();
  fallback.hidden = true;
  try {
    if (typeof window.JsBarcode !== 'function') throw new Error('JsBarcode library not loaded');
    window.JsBarcode(barcodeSvg, resultId, {
      format: 'CODE128',
      lineColor: '#17203a',
      background: '#fbfcff',
      width: 1.65,
      height: 54,
      displayValue: true,
      font: 'monospace',
      fontSize: 11,
      textMargin: 4,
      margin: 5
    });
    barcodeSvg.setAttribute('aria-label', `Barcode Code 128 untuk ID hasil ${resultId}`);
  } catch (error) {
    fallback.hidden = false;
    barcodeSvg.setAttribute('aria-label', 'Barcode tidak tersedia');
  }
}

function renderResults(result) {
  const scoreText = result.keysReady ? String(result.score) : '—';
  $('resultScore').textContent = scoreText;
  $('ringScore').textContent = scoreText;
  $('resultCorrect').textContent = result.keysReady ? String(result.correct) : '—';
  $('resultWrong').textContent = result.keysReady ? String(result.wrong) : '—';
  $('resultUnanswered').textContent = String(result.unanswered);
  $('resultCandidate').textContent = result.candidateName || '—';
  $('resultClass').textContent = result.candidateClass || '—';
  $('resultElapsed').textContent = formatElapsed(result.elapsedSeconds);
  $('resultId').textContent = result.id;
  const submittedDate = new Date(result.submittedAt);
  $('resultDateTop').textContent = localDateLabel(submittedDate);
  $('resultDateTop').setAttribute('title', submittedDate.toLocaleString('id-ID'));
  $('passStatus').textContent = !result.keysReady ? 'MENUNGGU KUNCI' : result.score >= 75 ? 'TARGET TERCAPAI' : 'PERLU LATIHAN LAGI';
  $('passStatus').classList.toggle('needs-work', result.keysReady && result.score < 75);
  $('passStatus').classList.toggle('pending-key', !result.keysReady);
  $('resultMessage').textContent = !result.keysReady
    ? 'Jawaban peserta telah direkam. Nilai dan status benar/salah akan dihitung setelah kunci jawaban resmi dimasukkan.'
    : result.score >= 75
      ? 'Bagus! Kamu mencapai panduan target simulasi. Terus pertajam pemahamanmu.'
      : 'Gunakan pembahasan di bawah untuk memahami materi dan mencoba lagi.';
  const percent = result.keysReady ? Math.max(0, Math.min(100, result.score)) : 0;
  $('scoreRing').style.background = `conic-gradient(var(--blue) ${percent}%, #e8ebf5 ${percent}%)`;
  renderBarcode(result.id);
  renderReview(result);
  $('reviewContent').hidden = true;
  $('toggleReviewButton').setAttribute('aria-expanded', 'false');
  $('toggleReviewButton').innerHTML = 'Buka pembahasan <span>⌄</span>';
}

function renderReview(result) {
  const container = $('reviewContent');
  const fragment = document.createDocumentFragment();
  result.responses.forEach(response => {
    const item = document.createElement('article');
    item.className = 'review-item';
    const top = document.createElement('div');
    top.className = 'review-item-top';
    const number = document.createElement('span');
    number.className = 'review-number';
    number.textContent = `Q${String(response.number).padStart(2,'0')}`;
    const questionText = document.createElement('div');
    questionText.className = 'review-question';
    questionText.textContent = response.question;
    const status = document.createElement('span');
    status.className = 'review-status ' + (!result.keysReady ? (response.selectedIndex === null ? 'empty' : 'pending-key') : (response.selectedIndex === null ? 'empty' : response.isCorrect ? 'correct' : 'incorrect'));
    status.textContent = !result.keysReady ? (response.selectedIndex === null ? 'KOSONG' : 'TERCATAT') : response.selectedIndex === null ? 'KOSONG' : response.isCorrect ? 'BENAR' : 'SALAH';
    top.append(number, questionText, status);
    const answerLine = document.createElement('p');
    answerLine.className = 'review-answer-line';
    if (response.selectedIndex === null) {
      answerLine.append('Jawabanmu: ');
      const blank = document.createElement('b');
      blank.textContent = 'Belum dijawab';
      answerLine.append(blank, ' · ');
    } else {
      answerLine.append('Jawabanmu: ');
      const selected = document.createElement('b');
      selected.textContent = `${response.selectedLetter}. ${response.selectedText}`;
      answerLine.append(selected, ' · ');
    }
    answerLine.append('Kunci: ');
    const correct = document.createElement('b');
    correct.textContent = result.keysReady ? `${response.correctLetter}. ${response.correctText}` : 'Belum diberikan';
    answerLine.append(correct);
    const explanation = document.createElement('p');
    explanation.className = 'review-explanation';
    explanation.textContent = result.keysReady ? `Materi: ${response.category}. ${response.explanation}` : `Materi: ${response.category}. Kunci resmi belum dimasukkan; nilai belum dihitung.`;
    item.append(top, answerLine, explanation);
    fragment.appendChild(item);
  });
  container.replaceChildren(fragment);
}

function buildExportPayload(result) {
  return {
    application: 'TechExam',
    reportType: 'Practice exam result',
    notice: 'This is a client-generated practice result. The ID barcode is not online verification or a cryptographic signature.',
    ...result
  };
}

function downloadJson() {
  if (!state.lastResult) return;
  const payload = buildExportPayload(state.lastResult);
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${state.lastResult.id.toLowerCase()}-hasil-ujian.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  showToast('File hasil JSON berhasil disiapkan.');
}

async function copyResultId() {
  if (!state.lastResult) return;
  const value = state.lastResult.id;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
    } else {
      const helper = document.createElement('textarea');
      helper.value = value;
      helper.setAttribute('readonly', '');
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.select();
      const copied = document.execCommand('copy');
      helper.remove();
      if (!copied) throw new Error('Clipboard unavailable');
    }
    showToast('ID hasil berhasil disalin.');
  } catch (error) {
    showToast(`Salin manual ID ini: ${value}`);
  }
}

function returnHome() {
  window.clearInterval(state.timerHandle);
  state.lastResult = state.lastResult || null;
  setScreen('welcome');
  renderResumePanel();
}

function toggleReview() {
  const opening = $('reviewContent').hidden;
  $('reviewContent').hidden = !opening;
  $('toggleReviewButton').setAttribute('aria-expanded', String(opening));
  $('toggleReviewButton').innerHTML = opening ? 'Tutup pembahasan <span>⌃</span>' : 'Buka pembahasan <span>⌄</span>';
}

function initialize() {
  $('todayLabel').textContent = localDateLabel(new Date());
  $('startForm').addEventListener('submit', event => {
    event.preventDefault();
    startNewExam();
  });
  $('verifyTokenButton').addEventListener('click', () => verifyAccessToken(true));
  $('accessToken').addEventListener('input', () => {
    state.activePackId = null;
    $('examSetupFields').hidden = true;
    $('resumeBox').hidden = true;
    $('tokenStatus').textContent = 'Tekan “Verifikasi token” untuk membuka paket soal.';
    $('tokenStatus').classList.remove('token-success', 'token-error');
  });
  $('candidateName').addEventListener('input', event => event.target.setCustomValidity(''));
  $('resumeButton').addEventListener('click', resumeExam);
  $('discardDraftButton').addEventListener('click', () => {
    if (window.confirm('Hapus sesi ujian yang tersimpan di browser ini?')) {
      safeStorageRemove(STORAGE_DRAFT_KEY);
      renderResumePanel();
      showToast('Sesi tersimpan telah dihapus.');
    }
  });
  $('prevButton').addEventListener('click', () => navigateQuestion(-1));
  $('nextButton').addEventListener('click', () => navigateQuestion(1));
  $('markButton').addEventListener('click', toggleMarked);
  $('finishButton').addEventListener('click', () => finishExam(false));
  $('printButton').addEventListener('click', () => window.print());
  $('downloadJsonButton').addEventListener('click', downloadJson);
  $('copyResultIdButton').addEventListener('click', copyResultId);
  $('toggleReviewButton').addEventListener('click', toggleReview);
  $('backHomeButton').addEventListener('click', returnHome);
  $('retakeButton').addEventListener('click', () => {
    if (state.lastResult) {
      $('candidateName').value = state.lastResult.candidateName;
      $('candidateClass').value = state.lastResult.candidateClass;
      $('durationSelect').value = String(state.durationMinutes);
    }
    startNewExam();
  });
  document.addEventListener('keydown', event => {
    if (state.screen !== 'exam' || event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target;
    if (target && (['INPUT','TEXTAREA','SELECT','BUTTON'].includes(target.tagName) || target.isContentEditable)) return;
    if (event.key === 'ArrowLeft') navigateQuestion(-1);
    if (event.key === 'ArrowRight') navigateQuestion(1);
  });
  $('examSetupFields').hidden = true;
  $('resumeBox').hidden = true;
  renderResumePanel();
  updateSaveStatus();
}


function initializeFirstAccessSplash() {
  const splash = $('firstAccessSplash');
  if (!splash) return;
  let seen = false;
  try { seen = window.localStorage.getItem('techexam_first_access_splash_v1') === 'seen'; } catch (error) { seen = false; }
  if (seen) { splash.remove(); return; }
  document.documentElement.classList.add('intro-visible');
  let closed = false;
  const closeSplash = () => {
    if (closed) return;
    closed = true;
    try { window.localStorage.setItem('techexam_first_access_splash_v1', 'seen'); } catch (error) { /* Private browsing may block storage. */ }
    splash.classList.add('splash-out');
    document.documentElement.classList.remove('intro-visible');
    window.setTimeout(() => splash.remove(), 650);
  };
  const skipButton = $('skipSplashButton');
  if (skipButton) skipButton.addEventListener('click', closeSplash, { once: true });
  window.setTimeout(closeSplash, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  initializeFirstAccessSplash();
  initialize();
});
