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
    <section id="skills" className="hidden md:block py-24 px-[5%] bg-transparent">
      <div ref={ref} className="max-w-[900px] mx-auto reveal">
        <div className="text-xs font-semibold tracking-[1.5px] uppercase bg-gradient-to-r from-[#213885] to-[#893172] bg-clip-text text-transparent mb-3">Kemampuan</div>
        <div className="font-display text-[clamp(28px,4vw,36px)] font-bold text-[#081849] leading-[1.2] tracking-tight mb-4">Tech Stack</div>
        <p className="text-base text-[#081849]/70 max-w-[560px] leading-[1.7] mb-12">
          Teknologi dan tools yang saya gunakan dalam membangun proyek-proyek nyata.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCards.map((card) => (
            <div key={card.title} className="bg-white/50 backdrop-blur-xl border border-black/[0.06] rounded-2xl p-6 shadow-glass transition-all duration-300 hover:bg-white/75 hover:-translate-y-1">
              <div className="flex items-center gap-[10px] mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-black/[0.05] shadow-sm" style={{ background: card.bg }}>
                  <i className={`ti ${card.icon}`} style={{ fontSize: 18, color: card.color }} />
                </div>
                <div className="font-display font-semibold text-sm text-[#081849]">{card.title}</div>
              </div>
              <div className="flex flex-wrap gap-[6px]">
                {card.tags.map((tag) => (
                  <span key={tag} className="bg-white/70 border border-black/[0.05] text-[#081849]/80 text-xs font-semibold px-[10px] py-1 rounded-[6px]">
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

export function SkillsMobile() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const mobileSkills = [
    { name: 'Python', icon: 'ti-brand-python', color: '#3776AB' },
    { name: 'XGBoost', icon: 'ti-cpu', color: '#FF5A00' },
    { name: 'scikit-learn', icon: 'ti-brain', color: '#F7931E' },
    { name: 'Pandas', icon: 'ti-table', color: '#893172' },
    { name: 'NumPy', icon: 'ti-binary', color: '#213885' },
    { name: 'Streamlit', icon: 'ti-device-desktop', color: '#FF4B4B' },
    { name: 'Plotly', icon: 'ti-chart-bar', color: '#5F3475' },
    { name: 'MySQL', icon: 'ti-database', color: '#213885' },
    { name: 'React', icon: 'ti-brand-react', color: '#61DAFB' },
    { name: 'Tailwind', icon: 'ti-brand-tailwind', color: '#06B6D4' },
    { name: 'JavaScript', icon: 'ti-brand-javascript', color: '#F7DF1E' },
    { name: 'Git', icon: 'ti-brand-git', color: '#F05032' },
    { name: 'Vite', icon: 'ti-bolt', color: '#646CFF' },
    { name: 'HTML5', icon: 'ti-brand-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'ti-brand-css3', color: '#1572B6' },
  ]

  // Duplicate items to ensure a seamless loop
  const listItems = [...mobileSkills, ...mobileSkills]

  return (
    <section className="block md:hidden py-16 px-[5%] bg-transparent overflow-hidden">
      <div ref={ref} className="max-w-[900px] mx-auto reveal">
        <div className="text-xs font-semibold tracking-[1.5px] uppercase bg-gradient-to-r from-[#213885] to-[#893172] bg-clip-text text-transparent mb-3">Kemampuan</div>
        <div className="font-display text-[28px] font-bold text-[#081849] leading-[1.2] tracking-tight mb-4">Tech Stack</div>
        <p className="text-sm text-[#081849]/70 leading-[1.7] mb-8">
          Teknologi dan tools yang saya gunakan.
        </p>
        
        {/* Infinite scrolling marquee with fade overlays using pale cyan/blue color from the palette */}
        <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 before:bg-gradient-to-r before:from-[#b4e1eb] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 after:bg-gradient-to-l after:from-[#b4e1eb] after:to-transparent">
          <div className="animate-marquee flex gap-4">
            {listItems.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 bg-white/60 backdrop-blur-xl border border-black/[0.06] rounded-2xl shadow-glass shrink-0"
              >
                <span className="text-lg animate-pulse-dot" style={{ color: skill.color }}>
                  <i className={`ti ${skill.icon}`} />
                </span>
                <span className="text-sm font-semibold text-[#081849]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
