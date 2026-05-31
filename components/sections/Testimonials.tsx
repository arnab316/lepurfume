'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Our guests still talk about it. Each one left with a piece of our day — and ourselves — with everyone we love.',
    name: 'John Doe',
    role: 'VP of Employee Experience',
  },
  {
    quote: 'A truly unique experience. The personalized scents made our corporate event unforgettable.',
    name: 'Mark Chen',
    role: 'CEO, Velvet Studio',
  },
  {
    quote: 'Every guest walked away with something special. Could not recommend more highly.',
    name: 'Emma Wilson',
    role: 'Wedding Planner',
  },
  {
    quote: 'The attention to detail was remarkable. A truly bespoke experience from start to finish.',
    name: 'Sarah Mills',
    role: 'Event Director',
  },
  {
    quote: 'Our team is still talking about the scents months later. An unforgettable gift.',
    name: 'David Park',
    role: 'Head of People',
  },
]

const loop = [...testimonials, ...testimonials]

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-ink py-32">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[300px] bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[300px] bg-gradient-to-l from-ink to-transparent" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex w-max gap-16"
      >
        {loop.map((t, i) => (
          <div key={i} className="relative flex w-[460px] shrink-0 flex-col gap-6 px-8">

            <div className="absolute left-0 top-0 h-full w-px bg-smoke" />

            <div className="text-[60px] leading-none text-haze">&ldquo;</div>
            <p className="h5 text-white">{t.quote}</p>
            <div className="flex flex-col gap-1">
              <span className="p1 text-white">{t.name}</span>
              <span className="p2 text-white/70">{t.role}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}