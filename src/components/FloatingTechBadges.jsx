import { motion } from 'framer-motion'
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiStreamlit
} from 'react-icons/si'

const BADGES = [
  { Icon: SiJupyter, label: 'Jupyter', color: '#F37626', top: '15%', left: '8%', duration: 6, delay: 0 },
  { Icon: SiPython, label: 'Python', color: '#3776AB', top: '22%', left: '85%', duration: 7, delay: 1.5 },
  { Icon: SiPandas, label: 'Pandas', color: '#FF5280', top: '75%', left: '10%', duration: 8, delay: 0.5 },
  { Icon: SiNumpy, label: 'NumPy', color: '#4DABCF', top: '82%', left: '80%', duration: 5.5, delay: 2 },
  { Icon: SiScikitlearn, label: 'Scikit-Learn', color: '#F7931E', top: '50%', left: '88%', duration: 6.5, delay: 1 },
  { Icon: SiStreamlit, label: 'Streamlit', color: '#FF4B4B', top: '48%', left: '5%', duration: 7.5, delay: 2.5 },
]

export default function FloatingTechBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {BADGES.map(({ Icon, label, color, top, left, duration, delay }, idx) => (
        <motion.div
          key={idx}
          style={{ top, left }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay,
          }}
          className="absolute hidden md:flex items-center gap-2 px-3 py-2 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] rounded-2xl shadow-glass"
        >
          <Icon style={{ color }} className="text-lg shrink-0" />
          <span className="text-xs font-semibold text-white/80 tracking-wide font-display">{label}</span>
        </motion.div>
      ))}
    </div>
  )
}
