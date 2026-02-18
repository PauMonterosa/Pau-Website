'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import { ContactForm } from '@/components/ContactForm'

export function ContactPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left: quick info */}
      <motion.div
        whileHover={{ y: -4 }}
        className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6"
      >
        <h3 className="text-xl font-semibold text-foreground">Contact</h3>
        <p className="mt-2 text-sm text-foreground-dim leading-relaxed">
          Want to collaborate or discuss a project? Send me a message.
        </p>

        <div className="mt-5 space-y-3">
          <InfoRow icon={<MapPin className="w-4 h-4" />} label="Location" value="Barcelona, Spain" />
          <InfoLink icon={<Mail className="w-4 h-4" />} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
          <InfoLink icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" value="paumonterosa" href={siteConfig.links.linkedin} />
          <InfoLink icon={<Github className="w-4 h-4" />} label="GitHub" value="PauMonterosa" href={siteConfig.links.github} />
        </div>
      </motion.div>

      {/* Right: form (template style) */}
      <motion.div
        whileHover={{ y: -4 }}
        className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6"
      >
        <h3 className="text-xl font-semibold text-foreground">Send a message</h3>
        <p className="mt-2 text-sm text-foreground-dim leading-relaxed">
          I’ll get back to you as soon as possible.
        </p>

        <div className="mt-5">
          <ContactForm />
        </div>
      </motion.div>
    </div>
  )
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 text-foreground-dim">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  )
}

function InfoLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:bg-white/[0.06] transition-colors"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-foreground-dim">
          {icon}
          <span className="text-sm">{label}</span>
        </div>
        <span className="text-sm text-foreground">{value}</span>
      </div>
    </a>
  )
}

