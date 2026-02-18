'use client'

import { motion } from 'framer-motion'
import { FlaskConical, Leaf, Ruler, Database } from 'lucide-react'

export function ExperiencePage() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <ExperienceCard
        icon={<FlaskConical className="w-5 h-5" />}
        title="Research Collaborator"
        org="ALBA Synchrotron · Cerdanyola, Spain"
        date="Feb 2025 — Mar 2025"
        bullets={[
          'Contributed to research on barocaloric effects.',
          'Supported high-precision data collection and experimental measurements.',
          'Worked with rigorous documentation and research-grade workflows.',
        ]}
        highlights={[
          { icon: <Ruler className="w-4 h-4" />, label: 'Measurement', value: 'high precision' },
          { icon: <Database className="w-4 h-4" />, label: 'Data', value: 'collection & analysis' },
        ]}
      />

      <ExperienceCard
        icon={<Leaf className="w-5 h-5" />}
        title="Intern"
        org="Renewable Energy Company · Girona, Spain"
        date="Jun 2022 — Aug 2022"
        bullets={[
          'Supported technical operations and day-to-day engineering tasks.',
          'Assisted with data analysis and reporting for internal processes.',
        ]}
        highlights={[
          { icon: <Database className="w-4 h-4" />, label: 'Support', value: 'ops & analysis' },
        ]}
      />
    </div>
  )
}

function ExperienceCard({
  icon,
  title,
  org,
  date,
  bullets,
  highlights,
}: {
  icon: React.ReactNode
  title: string
  org: string
  date: string
  bullets: string[]
  highlights?: { icon: React.ReactNode; label: string; value: string }[]
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
          <p className="mt-1 text-sm text-foreground-dim">{org}</p>
        </div>
        <span className="text-sm text-foreground-dim whitespace-nowrap">{date}</span>
      </div>

      {highlights && highlights.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span
              key={h.label}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-foreground-dim"
            >
              <span className="opacity-80">{h.icon}</span>
              <span>{h.label}:</span>
              <span className="text-foreground">{h.value}</span>
            </span>
          ))}
        </div>
      )}

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
