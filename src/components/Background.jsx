import { useState, useEffect } from 'react'

export default function Background() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
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
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gradient-to-br from-[#081849] via-[#0c1d5e] to-[#060e30]">
      {/* Sapphire Blue → Light Blue blob — top-left (multiplier: 0.1) */}
      <div
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          transition: 'transform 0.1s linear'
        }}
        className="absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#213885] to-[#5F3475] opacity-[0.30] blur-[180px]"
      />
      {/* Steel Blue → Deep Blue blob — right (multiplier: 0.2) */}
      <div
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s linear'
        }}
        className="absolute top-[25%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#5F3475] to-[#893172] opacity-[0.25] blur-[200px]"
      />
      {/* Light Blue → Sapphire Blue blob — bottom-left (multiplier: -0.15) */}
      <div
        style={{
          transform: `translateY(${scrollY * -0.15}px)`,
          transition: 'transform 0.1s linear'
        }}
        className="absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#893172] to-[#213885] opacity-[0.22] blur-[160px]"
      />
      {/* Steel Blue → Light Blue blob — center-right (multiplier: 0.05) */}
      <div
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
          transition: 'transform 0.1s linear'
        }}
        className="absolute top-[60%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-[#ECDFD2] to-[#5F3475] opacity-[0.10] blur-[140px]"
      />
    </div>
  )
}
