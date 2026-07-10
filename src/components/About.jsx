import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="about" className="py-24 px-[5%] bg-transparent">
      <div ref={ref} className="max-w-[900px] mx-auto reveal">
        <div className="text-xs font-semibold tracking-[1.5px] uppercase bg-gradient-to-r from-[#213885] to-[#893172] bg-clip-text text-transparent mb-3">Tentang Saya</div>
        <div className="font-display text-[clamp(28px,4vw,36px)] font-bold text-white leading-[1.2] tracking-tight mb-4">
          Sedikit tentang diri saya
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-white/60 mb-4 text-[15px]">
              Saya adalah mahasiswa Teknik Informatika di Universitas Muhammadiyah Surakarta (UMS) dengan rekam jejak akademik yang baik. Saya tertarik pada dunia Machine Learning, pengolahan dataset besar, dan pembangunan sistem berbasis data.
            </p>
            <p className="text-white/60 text-[15px]">
              Selain dunia teknis, saya juga aktif di bidang kreatif mulai dari konten kreator, video editing, hingga produksi konten digital. Saya percaya kombinasi keduanya membuat saya bisa membangun produk yang tidak hanya fungsional tapi juga menarik.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              { icon: 'ti-brain', color: '#893172', bg: 'rgba(137,49,114,0.12)', title: 'Machine Learning', desc: 'Membangun model klasifikasi, regresi, dan prediksi menggunakan XGBoost, scikit-learn.' },
              { icon: 'ti-database', color: '#5F3475', bg: 'rgba(95,52,117,0.12)', title: 'Database Systems', desc: 'Desain skema MySQL, normalisasi 3NF, stored procedures, CRUD dengan Python Tkinter.' },
              { icon: 'ti-video', color: '#213885', bg: 'rgba(33,56,133,0.12)', title: 'Content Creation', desc: 'Video editing dan produksi konten digital mengkombinasikan skill teknis dengan kreatifitas visual.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-[14px] items-start p-5 bg-white/[0.07] backdrop-blur-xl border border-white/[0.10] rounded-2xl shadow-glass transition-all duration-300 hover:bg-white/[0.11]">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.10] shadow-sm" style={{ background: item.bg }}>
                  <i className={`ti ${item.icon}`} style={{ fontSize: 18, color: item.color }} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-white mb-[2px]">{item.title}</div>
                  <div className="text-[13px] text-white/55 leading-[1.5]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
