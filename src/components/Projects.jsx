import { useEffect, useRef } from 'react'

const projects = [
  {
    name: 'Flight Price Prediction',
    status: 'Selesai',
    statusClass: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    desc: 'Model prediksi harga tiket pesawat menggunakan dataset ~300K baris. Membandingkan performa XGBoost, Random Forest, dan Linear Regression dengan pipeline EDA lengkap.',
    features: ['EDA dengan heatmap dan boxplot', 'Feature engineering dari data tiket', 'Evaluasi dan perbandingan 3 model'],
    tags: ['Python', 'XGBoost', 'scikit-learn', 'Pandas', 'Numpy'],
  },
  {
    name: 'Lung Cancer Risk Predictor',
    status: 'Selesai',
    statusClass: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    desc: 'Aplikasi prediksi risiko kanker paru-paru yang di-deploy via Streamlit, mengoptimalkan akurasi model klasifikasi.',
    features: ['Deployment via Streamlit', 'Feature Engineering', 'UI interaktif'],
    tags: ['Python', 'Streamlit', 'scikit-learn'],
  },
  {
    name: 'Earthquake Prediction & Visualization',
    status: 'Fail',
    statusClass: 'bg-rose-100 text-rose-800 border border-rose-200',
    desc: 'Proyek prediksi gempa bumi dengan visualisasi geospasial menggunakan Plotly. Menggunakan rolling/lag features dan melatih model XGBoost serta Bi-LSTM.',
    features: ['Visualisasi peta interaktif dengan plotly', 'Model gagal memprediksi', 'Model XGBoost dan Bi-LSTM'],
    tags: ['Python', 'Folium', 'XGBoost', 'LSTM'],
  },
]

export default function Projects() {
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
    <section id="projects" className="py-24 px-[5%] bg-transparent">
      <div ref={ref} className="max-w-[900px] mx-auto reveal">
        <div className="text-xs font-semibold tracking-[1.5px] uppercase bg-gradient-to-r from-[#213885] to-[#893172] bg-clip-text text-transparent mb-3">Karya</div>
        <div className="font-display text-[clamp(28px,4vw,36px)] font-bold text-[#081849] leading-[1.2] tracking-tight mb-4">Featured Projects</div>
        <p className="text-base text-[#081849]/70 max-w-[560px] leading-[1.7] mb-12">
          Beberapa proyek pilihan yang mencerminkan kemampuan saya di bidang Machine Learning dan data science.
        </p>
        <div className="grid gap-5">
          {projects.map((p) => (
            <div key={p.name} className="bg-white/50 backdrop-blur-2xl border border-black/[0.06] rounded-3xl p-7 shadow-glass transition-all duration-300 hover:bg-white/75 hover:-translate-y-[4px] hover:shadow-xl hover:shadow-black/[0.03]">
              <div className="flex justify-between items-start mb-3">
                <div className="font-display font-bold text-lg text-[#081849] tracking-tight">{p.name}</div>
                <span className={`text-[11px] font-semibold px-[10px] py-[3px] rounded-full ${p.statusClass}`}>
                  {p.status}
                </span>
              </div>
              <p className="text-sm text-[#081849]/65 mb-4 leading-[1.65]">{p.desc}</p>
              <ul className="list-none mb-5 flex flex-col gap-[6px]">
                {p.features.map((f) => (
                  <li key={f} className="text-[13px] text-[#081849]/65 flex gap-2">
                    <span className="bg-gradient-to-r from-[#213885] to-[#893172] bg-clip-text text-transparent shrink-0"></span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-[6px]">
                {p.tags.map((tag) => (
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
