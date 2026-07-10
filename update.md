# Prompt Vibe Coding — Update Portfolio (Liquid Glass Style)

## Konteks Proyek
- Repo: portoevan.vercel.app
- Stack: React + Vite + Tailwind CSS
- Deploy: Vercel

## Tugas
**Ubah keseluruhan style menjadi "Liquid Glass"** (gaya glassmorphism modern, referensi: mockup UI dengan card kaca buram di atas background gelap penuh blob gradient warna-warni — pink, orange, purple, blue).

   ### Background
   - Base background gelap: gradient dari navy/dark purple ke black (misal `bg-gradient-to-br from-[#1a1030] via-[#0f0a1f] to-black`).
   - Tambahkan beberapa blob bulat besar (`div` absolute, `rounded-full`, ukuran besar) dengan warna gradasi cerah (pink→orange, purple→blue) dan `blur-3xl` supaya glow lembut. Sebar posisinya (pojok kiri atas, kanan bawah, tengah) dengan `opacity-60–80`.
   - Blob-blob ini yang jadi "warna" utama, card kaca di atasnya akan memantulkan warna ini lewat transparansi.

   ### Card / Panel Kaca
   - `bg-white/10` sampai `bg-white/15` (sangat transparan, gelap-transparan karena background-nya gelap)
   - `backdrop-blur-xl` atau `backdrop-blur-2xl`
   - `border border-white/20` (garis tepi tipis biar keliatan "kaca")
   - `rounded-3xl` (sudut sangat membulat, seperti mockup)
   - `shadow-2xl shadow-black/40` untuk kesan melayang
   - Beri sedikit inner highlight opsional (misal border-top lebih terang) untuk efek reflektif kaca

   ### Tipografi & Elemen
   - Judul besar bold, warna putih/near-white
   - Sub-teks warna `white/60–70` (abu-abu terang, biar ada hierarki)
   - Badge/label kecil (seperti "STEP 01", tanggal kalender) pakai pill kecil dengan warna solid cerah (orange/pink) sebagai aksen kontras di atas kaca
   - Button utama pakai gradient solid cerah (orange→pink) dengan rounded-full, kontras tegas dari card kaca di sekitarnya — jangan dibuat transparan juga
   - Icon/avatar bulat kecil bisa pakai gradient solid warna-warni sebagai aksen

   ### Konsistensi
   - Terapkan pola ini ke semua section: Navbar, Hero, About, Projects, Skills, Contact, Footer
   - Pastikan kontras teks tetap terbaca jelas di atas blur (uji dengan teks putih/abu terang saja, hindari teks gelap)

   ### Background Bergerak Saat Scroll (Parallax)
   - Blob-blob background harus ikut bergerak (parallax) ketika halaman di-scroll, bukan diam statis.
   - Cara implementasi:
     - Background blob dibuat `fixed` (bukan `absolute`) di satu wrapper paling belakang, posisinya menutupi seluruh viewport (`fixed inset-0 -z-10`), supaya dia stay di belakang sepanjang scroll.
     - Untuk efek pergerakan tiap blob beda kecepatan (parallax bertingkat), pakai `useEffect` + `window.scrollY` untuk baca posisi scroll, lalu update `transform: translateY(...)` tiap blob dengan multiplier berbeda (misal blob 1 kali `scrollY * 0.1`, blob 2 kali `scrollY * 0.2`, blob 3 kali `scrollY * -0.15` biar arahnya variatif).
     - Gunakan `requestAnimationFrame` di dalam scroll listener biar animasi halus dan tidak nge-lag.
     - Tambahkan `transition: transform 0.1s linear` (via style inline atau Tailwind `transition-transform`) supaya pergerakan terasa smooth, bukan patah-patah.
   - Contoh pola state: simpan `scrollY` di `useState`, update via `useEffect` dengan event listener `scroll` di `window`, lalu pasang cleanup `removeEventListener` saat unmount.
   - Pastikan performa tetap ringan: jangan taruh terlalu banyak blob (cukup 3–5), dan hindari re-render komponen berat lain saat scroll (isolasi logic parallax di komponen `Background.jsx` tersendiri).

## Batasan & Preferensi Coding
- Gunakan pendekatan eksplisit, hindari abstraksi/helper function yang tidak perlu.
- Styling cukup pakai utility class Tailwind langsung di JSX (tidak perlu bikin file CSS terpisah kecuali sudah ada).
- Jangan ubah struktur routing atau logic yang tidak berkaitan dengan style/animasi.
- Pastikan tetap responsive (mobile & desktop).

## Output yang Diharapkan
- Semua komponen utama sudah pakai style liquid glass yang konsisten.
- Website tetap bisa di-build (`npm run build`) tanpa error.