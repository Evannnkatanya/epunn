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
    <div
      className="fixed inset-0 -z-50 overflow-hidden"
      style={{
        background: 'linear-gradient(165deg, #f9e8a2 0%, #dce8c8 18%, #c4e3da 32%, #b4e1eb 50%, #a4d0e1 65%, #95bdd7 78%, #78a4cb 100%)',
        backgroundSize: '100% 300vh',
      }}
    >
      {/* Desktop parallax blobs — hidden on mobile for performance */}
      <div
        style={{
          transform: scrollY !== 0 ? `translateY(${scrollY * 0.1}px)` : 'none',
          transition: 'transform 0.1s linear'
        }}
        className="absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#f9e8a2] to-[#b4e1eb] opacity-[0.45] blur-[180px] hidden md:block"
      />
      <div
        style={{
          transform: scrollY !== 0 ? `translateY(${scrollY * 0.2}px)` : 'none',
          transition: 'transform 0.1s linear'
        }}
        className="absolute top-[25%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#b4e1eb] to-[#95bdd7] opacity-[0.40] blur-[200px] hidden md:block"
      />
      <div
        style={{
          transform: scrollY !== 0 ? `translateY(${scrollY * -0.15}px)` : 'none',
          transition: 'transform 0.1s linear'
        }}
        className="absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#95bdd7] to-[#78a4cb] opacity-[0.35] blur-[160px] hidden md:block"
      />
      <div
        style={{
          transform: scrollY !== 0 ? `translateY(${scrollY * 0.05}px)` : 'none',
          transition: 'transform 0.1s linear'
        }}
        className="absolute top-[60%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-[#78a4cb] to-[#f9e8a2] opacity-[0.25] blur-[140px] hidden md:block"
      />
    </div>
  )
}
