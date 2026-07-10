import { useEffect, useRef } from 'react'

const skillCards = [
  {
    icon: 'ti-brain', color: '#893172', bg: 'rgba(137,49,114,0.12)', title: 'Machine Learning',
    tags: ['Python', 'XGBoost', 'scikit-learn', 'SMOTE', 'Pandas', 'NumPy', 'Impute'],
  },
  {
    icon: 'ti-chart-bar', color: '#5F3475', bg: 'rgba(95,52,117,0.12)', title: 'Data & Visualisasi',
    tags: ['Matplotlib', 'Seaborn', 'Plotly', 'Streamlit'],
  },
  {
    icon: 'ti-database', color: '#213885', bg: 'rgba(33,56,133,0.12)', title: 'Database',
    tags: ['MySQL'],
  },
  {
    icon: 'ti-world', color: '#893172', bg: 'rgba(137,49,114,0.12)', title: 'Web Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind'],
  },
  {
    icon: 'ti-tools', color: '#5F3475', bg: 'rgba(95,52,117,0.12)', title: 'Tools & Lainnya',
    tags: ['Tkinter', 'Proteus', 'Git'],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-24 px-[5%] bg-transparent">
      <div ref={ref} className="max-w-[900px] mx-auto reveal">
        <div className="text-xs font-semibold tracking-[1.5px] uppercase bg-gradient-to-r from-[#213885] to-[#893172] bg-clip-text text-transparent mb-3">Kemampuan</div>
        <div className="font-display text-[clamp(28px,4vw,36px)] font-bold text-white leading-[1.2] tracking-tight mb-4">Tech Stack</div>
        <p className="text-base text-white/60 max-w-[560px] leading-[1.7] mb-12">
          Teknologi dan tools yang saya gunakan dalam membangun proyek-proyek nyata.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCards.map((card) => (
            <div key={card.title} className="bg-white/[0.07] backdrop-blur-xl border border-white/[0.10] rounded-2xl p-6 shadow-glass transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-1">
              <div className="flex items-center gap-[10px] mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.10] shadow-sm" style={{ background: card.bg }}>
                  <i className={`ti ${card.icon}`} style={{ fontSize: 18, color: card.color }} />
                </div>
                <div className="font-display font-semibold text-sm text-white">{card.title}</div>
              </div>
              <div className="flex flex-wrap gap-[6px]">
                {card.tags.map((tag) => (
                  <span key={tag} className="bg-white/[0.08] border border-white/[0.10] text-white/75 text-xs font-medium px-[10px] py-1 rounded-[6px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
