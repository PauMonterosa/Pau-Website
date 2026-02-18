'use client'

import { motion } from 'framer-motion'
import { FlaskConical, Waves, Cpu, Activity } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassPanel className="md:col-span-2">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground-dim leading-relaxed"
          >
            I’m an Engineering Physics student at UPC with a strong interest in biophysics, sensing
            systems and advanced experimental research.
            <br />
            <br />
            My work combines mathematical modeling, signal processing and laboratory instrumentation.
            I enjoy building systems that translate physical principles into measurable technology —
            from biomedical sensing to optical setups.
          </motion.p>
        </GlassPanel>

        <div className="flex flex-col gap-4">
          <MiniCard icon={<Activity className="w-4 h-4" />} title="Biophysics" desc="Signals from the body, measured precisely." />
          <MiniCard icon={<Waves className="w-4 h-4" />} title="Signal Processing" desc="From raw data to robust metrics." />
          <MiniCard icon={<FlaskConical className="w-4 h-4" />} title="Lab Work" desc="Instrumentation, calibration, measurement." />
          <MiniCard icon={<Cpu className="w-4 h-4" />} title="Engineering" desc="Models → implementation → validation." />
        </div>
      </div>
    </div>
  )
}

function GlassPanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.06)]',
        className ?? '',
      ].join(' ')}
    >
      {children}
    </div>
  )
}

function MiniCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4"
    >
      <div className="flex items-center gap-2 text-foreground">
        <span className="text-foreground-dim">{icon}</span>
        <span className="font-semibold">{title}</span>
      </div>
      <p className="mt-2 text-sm text-foreground-dim leading-relaxed">{desc}</p>
    </motion.div>
  )
}

