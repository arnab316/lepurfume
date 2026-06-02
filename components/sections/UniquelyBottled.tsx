'use client'

import { motion } from 'framer-motion'
import ArrowButton from '../ui/ArrowButton'

const bottles = [
  '/images/bottle-red.jpg',
  '/images/bottle-glitter.jpg',
  '/images/bottle-romantic.jpg',
  // '/images/bottle-desert.jpg',
    '/images/bottle-moonlit.jpg',

  '/images/bottle-beach.jpg',
  // '/images/bottle-floral.jpg',
    // '/images/bottle-desert.jpg',
      '/images/bottle-romantic.jpg',


  '/images/bottle-moonlit.jpg',
    '/images/bottle-red.jpg',
  // '/images/bottle-tropical.jpg',
  '/images/bottle-rainy.jpg',
  '/images/bottle-warm.jpg',
  '/images/bottle-glitter.jpg',
  // '/images/bottle-cosmic.jpg',
  // '/images/bottle-jungle.jpg',
  '/images/bottle1.jpg',
]

const ORBIT_RADIUS = 320

export default function UniquelyBottled() {
  return (
    <section className="relative h-[850px] w-full overflow-hidden bg-white">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60, 
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute left-1/2 top-1/2 h-0 w-0"
      >
        {bottles.map((src, i) => {
          const angle = (i / bottles.length) * 360
          const rad = (angle * Math.PI) / 180
          const x = Math.cos(rad) * ORBIT_RADIUS
          const y = Math.sin(rad) * ORBIT_RADIUS

          return (
            <motion.div
              key={i}
              style={{
                left: x,
                top: y,
                rotate: angle + 90, 
              }}
              // className="absolute h-[120px] w-[90px] -translate-x-1/2 -translate-y-1/2"
              // className="absolute h-[140px] w-[105px] -translate-x-1/2 -translate-y-1/2"
              className="absolute h-[100px] w-[75px] -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="h-full w-full overflow-hidden rounded-md bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${src})` }}
              />
            </motion.div>
          )
        })}
      </motion.div>

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[200px] bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[200px] bg-gradient-to-l from-white to-transparent" />

      <div className="absolute left-1/2 top-1/2 z-20 flex w-[497px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-12 text-center">
        <div className="flex flex-col gap-8">
          <h2 className="h2 text-ink">Uniquely Bottled</h2>
          <p className="p1 text-ink">
            Every guest and recipient experiences moments differently. We transform these unique perspectives into
            individual fragrances—creating a diverse collection of scents as distinctive as the people themselves, each
            crafted with exceptional care.
          </p>
        </div>

       <div className="flex w-[400px] items-end gap-3">
  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand">
    <span className="font-mono text-[18px] font-bold text-ink">E</span>
  </div>

  <div className="flex flex-1 flex-col gap-1">
    <span className="caption text-left text-smoke">How can you elevate your big day?</span>
    <div className="flex h-12 items-center rounded border border-ash bg-white px-3">
      <input
        type="text"
        className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ash"
        placeholder=""
      />
      <button aria-label="submit" className="ml-2 text-ink hover:opacity-60">
        <svg width="20" height="6" viewBox="0 0 20 6" fill="none">
          <path d="M0 3H17" stroke="currentColor" strokeWidth="1.2" />
          <path d="M14 0L19 3L14 6" fill="currentColor" />
        </svg>
      </button>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}