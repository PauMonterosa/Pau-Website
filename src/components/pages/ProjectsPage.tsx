'use client'

import { motion } from 'framer-motion'
import { Activity, Waves, Radar, Bot, Droplets, Atom } from 'lucide-react'

const projects = [
  {
    icon: <Activity className="w-5 h-5" />,
    title: 'Biomedical modeling — Tuberculosis dynamics',
    tags: ['Systems Biology', 'Differential Equations'],
    desc: 'Modeled immune-system interaction with M. tuberculosis using competition dynamics and ODE analysis.',
  },
  {
    icon: <Waves className="w-5 h-5" />,
    title: 'Optical Coherence Tomography (OCT) system',
    tags: ['Optics', 'Signal Processing'],
    desc: 'Developed and calibrated an OCT setup for non-invasive interferometric imaging.',
  },
  {
    icon: <Radar className="w-5 h-5" />,
    title: 'Laser systems & range finding',
    tags: ['Photonics', 'Nd:YAG'],
    desc: 'Characterized laser cavities and implemented a laser range finder for precision distance measurement.',
  },
  {
    icon: <Droplets className="w-5 h-5" />,
    title: 'Fluid physics in microgravity',
    tags: ['Fluid Dynamics', 'Experimental'],
    desc: 'Experimental study of capillary effects and fluid behavior under microgravity conditions.',
  },
  {
    icon: <Atom className="w-5 h-5" />,
    title: 'Thermodynamic & crystallographic analysis',
    tags: ['Materials', 'Characterization'],
    desc: 'Dielectric and structural characterization of disordered materials and phase-change compounds.',
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: 'Autonomous line tracker robot',
    tags: ['Control', 'Electronics'],
    desc: 'Designed and programmed a PID-controlled robot for high-speed trajectory tracking.',
  },
]

export function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((p) => (
        <motion.div
          key={p.title}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6"
        >
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-foreground-dim">{p.icon}</span>
            <h3 className="text-lg font-semibold">{p.title}</h3>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-foreground-dim"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm text-foreground-dim leading-relaxed">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

