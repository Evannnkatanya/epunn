import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactLinks = [
    { href: 'https://github.com/Evannnkatanya', icon: 'ti-brand-github', label: 'github.com/Evankatanya' },
    { href: 'https://www.linkedin.com/in/evan-savero-a03585415/', icon: 'ti-brand-linkedin', label: 'linkedin.com/in/evansavero' },
    { href: 'https://www.instagram.com/akuevancoy?igsh=bGt2Nnhybng0MHZq', icon: 'ti-brand-instagram', label: '@akuevancoy' },
  ]

  return (
    <section id="contact" className="py-24 px-[5%] bg-transparent">
      <div ref={ref} className="max-w-[900px] mx-auto reveal">
        <div className="text-xs font-semibold tracking-[1.5px] uppercase bg-gradient-to-r from-[#213885] to-[#893172] bg-clip-text text-transparent mb-3">Contacts</div>
        <div className="font-display text-[clamp(28px,4vw,36px)] font-bold text-white leading-[1.2] tracking-tight mb-4">
          Lets Connect
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-white/55 mb-7">
              Tertarik untuk kolaborasi, magang, proyek freelance, atau sekadar ngobrol soal teknologi dan ML? Jangan ragu untuk menghubungi saya.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-[14px_16px] bg-white/[0.07] backdrop-blur-xl border border-white/[0.10] rounded-2xl no-underline text-white/80 text-sm font-medium transition-all duration-300 hover:bg-white/[0.14] hover:border-[#213885]/40 hover:text-white shadow-glass"
                >
                  <span className="text-base w-5 text-center text-[#893172]">
                    <i className={`ti ${link.icon}`} />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-[13px] font-medium text-white/80 mb-[6px] block">Nama</label>
              <input
                type="text"
                placeholder="Nama kamu"
                className="w-full p-[10px_14px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-xl text-sm text-white font-body transition-all duration-200 outline-none placeholder:text-white/30 focus:bg-white/[0.10] focus:border-[#213885]/50 focus:shadow-md focus:shadow-[#213885]/10"
              />
            </div>
            <div className="mb-4">
              <label className="text-[13px] font-medium text-white/80 mb-[6px] block">Email</label>
              <input
                type="email"
                placeholder="email@contoh.com"
                className="w-full p-[10px_14px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-xl text-sm text-white font-body transition-all duration-200 outline-none placeholder:text-white/30 focus:bg-white/[0.10] focus:border-[#213885]/50 focus:shadow-md focus:shadow-[#213885]/10"
              />
            </div>
            <div className="mb-4">
              <label className="text-[13px] font-medium text-white/80 mb-[6px] block">Pesan</label>
              <textarea
                placeholder="Halo Evan, saya ingin..."
                className="w-full p-[10px_14px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-xl text-sm text-white font-body transition-all duration-200 outline-none placeholder:text-white/30 focus:bg-white/[0.10] focus:border-[#213885]/50 resize-y min-h-[120px] focus:shadow-md focus:shadow-[#213885]/10"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#213885] to-[#893172] text-white p-3 rounded-full text-sm font-semibold border-none cursor-pointer font-body transition-all duration-300 hover:shadow-lg hover:shadow-[#213885]/30 hover:-translate-y-[1px]"
            >
              {submitted ? '✓ Terkirim!' : 'Kirim Pesan →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
