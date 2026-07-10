# Implementation Plan: Floating Tech Badges di Hero Section (portoevan)

## Context
Project: portoevan.vercel.app — React + Vite + Tailwind CSS, deploy di Vercel.
Tujuan: Menambahkan floating tech badges (icon teknologi yang bergerak naik-turun secara halus) di background hero section, terinspirasi dari komponen HeroSection milik referensi open-source berbasis Framer Motion.

## Goal
Tambahkan komponen `FloatingTechBadges` yang menampilkan beberapa icon teknologi (React, Tailwind, Node.js, MongoDB, Vite, Python, dll — sesuaikan dengan stack yang dipakai di project ini dan EXPOIN) mengambang dengan animasi looping halus di belakang konten utama hero section, tanpa mengganggu keterbacaan teks di depannya.

## Requirements
1. Gunakan `framer-motion` untuk animasi dan `react-icons` (set `si` / Simple Icons) untuk icon teknologi.
2. Komponen baru: `src/components/FloatingTechBadges.jsx`
   - Terima data array tech (icon, label, posisi top/left dalam %, durasi animasi) sebagai konstanta di dalam file, gampang diedit manual.
   - Setiap badge: kotak rounded dengan efek glass (`bg-white/10 backdrop-blur-md border border-white/20`), animasi float naik-turun (`y: [0, -15, 0]`) infinite loop, delay berbeda tiap badge biar tidak sinkron.
   - Container: `absolute inset-0 pointer-events-none overflow-hidden` supaya tidak menghalangi klik ke konten di atasnya.
3. Integrasikan ke `HeroSection` yang sudah ada di project ini:
   - Cari file hero section yang sekarang dipakai (kemungkinan di `src/components` atau `src/sections`).
   - Pastikan section pembungkus punya `relative` dan konten utama (judul, teks, tombol) punya `relative z-10` supaya tampil di atas floating badges.
   - JANGAN mengubah struktur atau isi teks/tombol yang sudah ada — hanya menambahkan layer badge di belakangnya.
4. Responsif: sembunyikan atau kurangi jumlah badge di layar kecil (`hidden md:block` per badge, atau breakpoint sejenis) supaya tidak mengganggu layout mobile.
5. Warna icon dan style badge harus menyesuaikan tema warna yang sudah dipakai di portoevan saat ini (cek `tailwind.config.js` dan class warna yang dominan dipakai di komponen lain) — jangan hardcode warna yang beda sendiri.
6. Non-OOP, plain functional component, tanpa helper function tambahan yang tidak perlu — konsisten dengan gaya kode project ini.

## Steps
1. Install dependency: `npm install framer-motion react-icons` (cek dulu apakah sudah ada di `package.json`, jangan install ulang kalau sudah ada).
2. Buat `src/components/FloatingTechBadges.jsx` sesuai requirement di atas.
3. Baca file hero section yang sudah ada, cocokkan struktur JSX-nya, lalu sisipkan `<FloatingTechBadges />` di posisi yang tepat (paling atas dalam section, sebelum konten teks).
4. Jalankan `npm run dev` dan cek visual di browser — pastikan badge tidak overlap dengan teks dan animasinya smooth.
5. Cek responsivitas di ukuran mobile (devtools breakpoint sm/md).
6. Jangan commit/push — tampilkan dulu hasil perubahan file untuk direview.

## Constraints
- Jangan ubah dependency lain di package.json selain yang disebutkan.
- Jangan refactor komponen lain di luar scope ini.
- Jangan gunakan localStorage/sessionStorage.
- Pertahankan gaya kode existing (functional component, tanpa OOP, tanpa abstraksi berlebihan).

## Output yang diharapkan
- File `FloatingTechBadges.jsx` baru.
- Diff singkat pada file hero section yang menunjukkan penambahan import + pemanggilan komponen.
- Ringkasan perubahan di akhir (tanpa penjelasan panjang, langsung to the point).