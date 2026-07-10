import { useState, useEffect } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certs', label: 'Certs' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white/[0.06] backdrop-blur-2xl border-b border-white/[0.08] flex items-center justify-between px-[5%] z-[100] shadow-glass">
        <a href="#home" className="font-display font-bold text-lg text-white no-underline tracking-tight">
          Evan<span className="bg-gradient-to-r from-[#213885] to-[#893172] bg-clip-text text-transparent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`no-underline text-sm font-medium transition-colors duration-200 ${
                  activeSection === l.href.slice(1) ? 'text-white' : 'text-white/50 hover:text-white/90'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:evansafero@gmail.com"
          className="hidden md:inline-block bg-gradient-to-r from-[#213885] to-[#893172] text-white px-5 py-2 rounded-full text-sm font-semibold no-underline transition-all duration-300 hover:shadow-lg hover:shadow-[#213885]/25 hover:-translate-y-[1px]"
        >
          Hire me
        </a>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <span className="block w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300" />
          <span className="block w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300" />
          <span className="block w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white/[0.08] backdrop-blur-2xl border-b border-white/[0.08] p-[20px_5%] flex flex-col gap-4 z-[99] shadow-glass">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="no-underline text-[15px] text-white/70 font-medium py-[6px] border-b border-white/[0.08] last:border-none hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
