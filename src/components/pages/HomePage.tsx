'use client'

import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Mail, Linkedin, Github, Globe } from 'lucide-react'
import { siteConfig } from '@/lib/constants'

export function HomePage({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-0"
        >
          <p className="inline-flex items-center gap-2 text-sm md:text-base text-foreground-dim">
            <MapPin className="w-4 h-4" />
            Barcelona, Spain
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            {siteConfig.name}
          </h1>

          <p className="mt-5 text-lg md:text-xl text-foreground-dim max-w-2xl mx-auto leading-relaxed">
            Engineering Physics student focused on <span className="text-foreground">biophysics</span>,{' '}
            <span className="text-foreground">signal processing</span> and{' '}
            <span className="text-foreground">advanced instrumentation</span>.
          </p>
        </motion.div>

        {/* Floating cards */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <FloatingCard title="Focus" desc="Biophysics · Signal Processing · Instrumentation" />
          <FloatingCard title="Research" desc="Hands-on experimental work and precise measurement." />
          <FloatingCard title="Build" desc="From models to working systems: code + hardware." />
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <GlassLink href={`mailto:${siteConfig.email}`} icon={<Mail className="w-4 h-4" />}>
            {siteConfig.email}
          </GlassLink>
          <GlassLink href={siteConfig.links.linkedin} icon={<Linkedin className="w-4 h-4" />}>
            LinkedIn
          </GlassLink>
          <GlassLink href={siteConfig.links.github} icon={<Github className="w-4 h-4" />}>
            GitHub
          </GlassLink>
        </div>

        {/* CTA */}
        <motion.button
          onClick={onExplore}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] text-foreground transition-colors backdrop-blur-md"
        >
          Explore <ArrowDown className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  )
}

function FloatingCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
    >
      <div className="text-sm text-foreground-dim">{title}</div>
      <div className="mt-2 text-base text-foreground leading-snug">{desc}</div>
    </motion.div>
  )
}

function GlassLink({
  href,
  icon,
  children,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-foreground-dim hover:text-foreground transition-colors backdrop-blur-md"
    >
      {icon}
      <span className="text-sm">{children}</span>
    </a>
  )
}

