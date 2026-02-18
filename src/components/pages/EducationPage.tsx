'use client'

import { motion } from 'framer-motion'
import { GraduationCap, FlaskConical } from 'lucide-react'

export function EducationPage() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <EduCard
        icon={<GraduationCap className="w-5 h-5" />}
        title="B.Sc. in Engineering Physics"
        meta="Universitat Politècnica de Catalunya · Barcelona"
        date="2023 — 2026"
        bullets={[
          'Focus: Biophysics & Signal Processing.',
          'Relevant project: “TakeDPulse — Precision Biometric Sensing”.',
        ]}
      />

      <EduCard
        icon={<FlaskConical className="w-5 h-5" />}
        title="Scientific Baccalaureate"
        meta="Joviat · Manresa"
        date="2021 — 2023"
        bullets={[
          'Graduated with Honors.',
          'Research project: Automated Image Classification Pipeline.',
        ]}
      />
    </div>
  )
}

function EduCard({
  icon,
  title,
  meta,
  date,
  bullets,
}: {
  icon: React.ReactNode
  title: string
  meta: string
  date: string
  bullets: string[]
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-foreground-dim">{icon}</span>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="mt-1 text-sm text-foreground-dim">{meta}</p>
        </div>
        <span className="text-sm text-foreground-dim whitespace-nowrap">{date}</span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-foreground-dim leading-relaxed">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[7px] w-1 h-1 rounded-full bg-white/35 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

