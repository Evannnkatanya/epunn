import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './MotivationalIntro.css'

/**
 * MotivationalIntro — A cinematic hero intro inspired by TikTok "motivational core" editing.
 *
 * Three-phase animation sequence:
 * Phase 1 (0–1.5s):  Question text fades in with blur-to-sharp + zoom-out
 * Phase 2 (1.5–6s):  Rotating light streaks (SVG) + sequential reveal texts
 * Phase 3 (6–10s):   Dark orb appears + name/subtitle reveal
 * After ~11-12s:     Scene fades out, onComplete() fires
 *
 * @param {string}   questionText  - Phase 1 text (e.g., "siapa itu Evan?")
 * @param {string[]} revealTexts   - Phase 2 rotating texts
 * @param {string}   name          - Phase 3 name inside orb
 * @param {string}   subtitle      - Phase 3 subtitle/role
 * @param {function} onComplete    - Callback after entire sequence
 */
export default function MotivationalIntro({
  questionText = 'siapa itu Evan?',
  revealTexts = ['seorang mahasiswa informatika', 'yang bermimpi besar', 'dan terus belajar'],
  name = 'Evan Savero',
  subtitle = 'Informatics Engineering',
  onComplete,
}) {
  const [phase, setPhase] = useState(0) // 0=not started, 1, 2, 3
  const [currentTextIndex, setCurrentTextIndex] = useState(-1)
  const [showOrb, setShowOrb] = useState(false)
  const [showName, setShowName] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // If reduced motion, show static version briefly then complete
  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase(3)
      setShowOrb(true)
      setShowName(true)
      setShowSubtitle(true)
      const timer = setTimeout(() => {
        onComplete?.()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [prefersReducedMotion, onComplete])

  // Phase sequencing timeline
  useEffect(() => {
    if (prefersReducedMotion) return

    const timers = []

    // Phase 1: Start immediately
    timers.push(setTimeout(() => setPhase(1), 100))

    // Phase 2: Start at 1.5s
    timers.push(setTimeout(() => setPhase(2), 1500))

    // Phase 2 texts: stagger each text every ~1.8s starting at 2s
    revealTexts.forEach((_, i) => {
      timers.push(setTimeout(() => setCurrentTextIndex(i), 2000 + i * 2000))
    })

    // Phase 3: Start at 6s
    timers.push(setTimeout(() => {
      setPhase(3)
      setCurrentTextIndex(-1) // hide rotating texts
    }, 6000))

    // Show orb at 6.3s
    timers.push(setTimeout(() => setShowOrb(true), 6300))

    // Show name at 7.2s
    timers.push(setTimeout(() => setShowName(true), 7200))

    // Show subtitle at 8.2s
    timers.push(setTimeout(() => setShowSubtitle(true), 8200))

    // Start fade out at 10.5s
    timers.push(setTimeout(() => setFadingOut(true), 10500))

    // Complete at 11.5s
    timers.push(setTimeout(() => {
      onComplete?.()
    }, 11500))

    return () => timers.forEach(clearTimeout)
  }, [prefersReducedMotion, revealTexts.length, onComplete])

  // Framer Motion variants for text animations
  const textFadeBlur = useMemo(() => ({
    hidden: {
      opacity: 0,
      filter: 'blur(8px)',
      scale: 1.2,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      filter: 'blur(8px)',
      scale: 0.92,
      transition: { duration: 0.6, ease: 'easeIn' },
    },
  }), [])

  const nameReveal = useMemo(() => ({
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      scale: 1.25,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }), [])

  const subtitleReveal = useMemo(() => ({
    hidden: {
      opacity: 0,
      filter: 'blur(6px)',
      y: 8,
    },
    visible: {
      opacity: 0.45,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }), [])

  // Build CSS class for container
  const containerClass = [
    'motivational-intro',
    phase >= 2 ? 'phase-2' : '',
    fadingOut ? 'fading-out' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={containerClass} id="motivational-intro">
      {/* ═══ PHASE 1: Question Text ═══ */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            className="phase1-text"
            variants={textFadeBlur}
            initial="hidden"
            animate="visible"
            exit="exit"
            key="phase1"
          >
            {questionText}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ PHASE 2: Rotating Light Streaks + Text ═══ */}
      {phase >= 2 && phase < 3 && (
        <>
          {/* Rotating scene container */}
          <div className="rotating-scene">
            {/* SVG Light Streaks */}
            <svg
              className="light-streaks-svg"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="streakBlur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                </filter>
                <filter id="streakBlurThin" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                </filter>
              </defs>
              {/* Main S-curve streak — big sweeping curve */}
              <path
                className="light-streak"
                d="M 200,100 C 350,200 650,250 700,500 C 750,750 400,800 300,900"
                filter="url(#streakBlur)"
              />
              {/* Secondary thinner streak — inverted curve */}
              <path
                className="light-streak"
                d="M 800,50 C 650,200 350,300 300,500 C 250,700 550,800 700,950"
                filter="url(#streakBlurThin)"
              />
              {/* Subtle third accent streak */}
              <path
                className="light-streak"
                d="M 500,0 C 400,250 600,400 500,650 C 400,850 450,950 500,1000"
                filter="url(#streakBlur)"
                style={{ opacity: 0.2, strokeWidth: 0.8 }}
              />
            </svg>
          </div>

          {/* Text in the center (counter-rotated to stay readable) */}
          <div className="rotating-text-container">
            <AnimatePresence mode="wait">
              {currentTextIndex >= 0 && currentTextIndex < revealTexts.length && (
                <motion.div
                  key={`text-${currentTextIndex}`}
                  className="rotating-text"
                  variants={textFadeBlur}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {revealTexts[currentTextIndex]}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}

      {/* ═══ PHASE 3: Dark Orb + Name ═══ */}
      <AnimatePresence>
        {phase === 3 && showOrb && (
          <motion.div
            className="orb-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key="orb-scene"
          >
            <div className="orb">
              {/* Name inside orb */}
              <AnimatePresence>
                {showName && (
                  <motion.div
                    className="orb-name"
                    variants={nameReveal}
                    initial="hidden"
                    animate="visible"
                    key="orb-name"
                  >
                    {name}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Subtitle inside orb */}
              <AnimatePresence>
                {showSubtitle && (
                  <motion.div
                    className="orb-subtitle"
                    variants={subtitleReveal}
                    initial="hidden"
                    animate="visible"
                    key="orb-subtitle"
                  >
                    {subtitle}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
