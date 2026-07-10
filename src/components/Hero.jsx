import FloatingTechBadges from './FloatingTechBadges'

export default function Hero() {
  return (
    <section id="home" className="relative pt-[calc(64px+80px)] pb-20 min-h-screen flex items-center px-[5%]">
      {/* Floating tech icons in the background */}
      <FloatingTechBadges />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-16 items-center w-full max-w-[900px] mx-auto">
        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] backdrop-blur-xl text-green text-[13px] font-medium px-[14px] py-[6px] rounded-full mb-6 shadow-glass">
            <span className="w-[7px] h-[7px] bg-green rounded-full animate-pulse-dot" />
            Available for internship &amp; collaboration
          </div>
          <h1 className="font-display text-[clamp(36px,5.5vw,54px)] font-bold leading-[1.1] tracking-tight text-white mb-2">
            Hi, I'm <span className="bg-gradient-to-r from-[#213885] via-[#5F3475] to-[#893172] bg-clip-text text-transparent">Evan Savero</span>
          </h1>
          <p className="font-display text-[clamp(16px,2.2vw,20px)] font-normal text-white/60 mb-5 leading-[1.4]">
            Informatics Engineering Student · Data Science &amp; ML Enthusiast
          </p>
          <p className="text-[15px] text-white/55 leading-[1.75] mb-9 max-w-[480px]">
            Mahasiswa Teknik Informatika UMS yang passionate di bidang Machine Learning dan pengolahan data.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="#projects" className="bg-gradient-to-r from-[#213885] to-[#893172] text-white px-7 py-3 rounded-full text-sm font-semibold no-underline transition-all duration-300 hover:shadow-lg hover:shadow-[#213885]/30 hover:-translate-y-[2px]">
              Lihat Projects →
            </a>
            <a href="#contact" className="bg-white/[0.08] backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-semibold no-underline border border-white/[0.15] transition-all duration-300 hover:bg-white/[0.14] hover:-translate-y-[2px] shadow-glass">
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Right card */}
        <div className="hidden md:block bg-white/[0.07] backdrop-blur-2xl border border-white/[0.12] rounded-3xl p-7 shadow-glass">
          <div className="w-[72px] h-[72px] bg-gradient-to-br from-[#213885] to-[#893172] rounded-full flex items-center justify-center mb-4 overflow-hidden shadow-lg shadow-[#213885]/20">
            <img src="/evan.jpeg" alt="Evan" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="font-display font-bold text-[17px] text-white mb-1">Evan</div>
          <div className="text-[13px] text-white/50 mb-5">Informatics Engineering · UMS</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-[10px] p-2 px-3 bg-white/[0.08] border border-white/[0.10] rounded-xl text-[13px] font-medium text-white/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#213885] to-[#893172] shrink-0" />
              Machine Learning
            </div>
            <div className="flex items-center gap-[10px] p-2 px-3 bg-white/[0.08] border border-white/[0.10] rounded-xl text-[13px] font-medium text-white/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#5F3475] to-[#893172] shrink-0" />
              Python &amp; Data Science
            </div>
          </div>
          <div className="flex gap-6 mt-5 pt-5 border-t border-white/[0.10]">
            <div className="text-center">
              <div className="font-display text-[22px] font-bold text-white leading-none">10+</div>
              <div className="text-[11px] text-white/40 mt-[2px]">Projects</div>
            </div>
            <div className="text-center">
              <div className="font-display text-[22px] font-bold text-white leading-none">6+</div>
              <div className="text-[11px] text-white/40 mt-[2px]">ML Models</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

