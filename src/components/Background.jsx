import { useState, useEffect } from 'react'

export default function Background() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Disable scroll event listener on mobile to save performance
    if (window.innerWidth < 768) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gradient-to-br from-[#f9e8a2] via-[#b4e1eb] to-[#78a4cb]">
      {/* Sapphire Blue → Light Blue blob — top-left (multiplier: 0.1) */}
      <div
        style={{
          transform: scrollY !== 0 ? `translateY(${scrollY * 0.1}px)` : 'none',
          transition: 'transform 0.1s linear'
        }}
        className="absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#f9e8a2] to-[#b4e1eb] opacity-[0.45] blur-[100px] md:blur-[180px] hidden md:block"
      />
      {/* Steel Blue → Deep Blue blob — right (multiplier: 0.2) */}
      <div
        style={{
          transform: scrollY !== 0 ? `translateY(${scrollY * 0.2}px)` : 'none',
          transition: 'transform 0.1s linear'
        }}
        className="absolute top-[25%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#b4e1eb] to-[#95bdd7] opacity-[0.40] blur-[120px] md:blur-[200px] hidden md:block"
      />
      {/* Light Blue → Sapphire Blue blob — bottom-left (multiplier: -0.15) */}
      <div
        style={{
          transform: scrollY !== 0 ? `translateY(${scrollY * -0.15}px)` : 'none',
          transition: 'transform 0.1s linear'
        }}
        className="absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#95bdd7] to-[#78a4cb] opacity-[0.35] blur-[90px] md:blur-[160px] hidden md:block"
      />
      {/* Steel Blue → Light Blue blob — center-right (multiplier: 0.05) */}
      <div
        style={{
          transform: scrollY !== 0 ? `translateY(${scrollY * 0.05}px)` : 'none',
          transition: 'transform 0.1s linear'
        }}
        className="absolute top-[60%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-[#78a4cb] to-[#f9e8a2] opacity-[0.25] blur-[80px] md:blur-[140px] hidden md:block"
      />
    </div>
  )
}
