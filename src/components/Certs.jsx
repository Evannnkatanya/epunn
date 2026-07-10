import { useEffect, useRef } from 'react'

export default function Certs() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certs" className="py-24 px-[5%] bg-transparent">
      <div ref={ref} className="max-w-[900px] mx-auto reveal">
        <div className="text-xs font-semibold tracking-[1.5px] uppercase bg-gradient-to-r from-[#213885] to-[#893172] bg-clip-text text-transparent mb-3">Kredensial</div>
        <div className="font-display text-[clamp(28px,4vw,36px)] font-bold text-[#081849] leading-[1.2] tracking-tight mb-4">
          Sertifikasi &amp; Prestasi
        </div>
        <p className="text-base text-[#081849]/70 max-w-[560px] leading-[1.7] mb-12">
          Pencapaian dan sertifikat dari perjalanan belajar yang berkelanjutan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/50 backdrop-blur-xl border border-black/[0.06] rounded-2xl p-5 shadow-glass transition-all duration-300 hover:bg-white/75 hover:-translate-y-1">
            <div className="text-[11px] font-bold tracking-[1px] uppercase text-[#081849]/50 mb-2">
              Coursera / Dicoding
            </div>
            <div className="font-display text-sm font-bold text-[#081849] mb-1 leading-[1.3]">
              Machine Learning Fundamentals
            </div>
            <div className="text-xs text-[#081849]/55">2024</div>
            <span className="inline-block mt-[10px] text-[11px] font-semibold px-2 py-[3px] rounded-[5px] bg-gradient-to-r from-[#213885] to-[#893172] text-white">
              Sertifikat
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
