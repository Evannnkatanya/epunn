export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-2xl border-t border-white/[0.08] text-white/50 py-8 px-[5%] text-center text-[13px]">
      <div className="max-w-[900px] mx-auto flex justify-between items-center flex-wrap gap-4">
        <span className="font-display text-base font-bold bg-gradient-to-r from-[#213885] to-[#893172] bg-clip-text text-transparent">Evan</span>
        <span>© 2025 Evan</span>
        <div className="flex gap-4">
          <a href="https://github.com/Evannnkatanya" className="text-white/50 no-underline hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/evan-savero-a03585415/" className="text-white/50 no-underline hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/akuevancoy" className="text-white/50 no-underline hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
