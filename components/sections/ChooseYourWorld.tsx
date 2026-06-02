'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArrowButton from '../ui/ArrowButton'

const worlds = [
  {
    id: 'weddings',
    label: 'Weddings',
    body: 'Give your guests something truly memorable. Each person creates a fragrance that captures their experience of your special day—preserving personal moments in a luxurious keepsake.',
    image: '/images/world-weddings.jpg',
  },
  {
    id: 'corporate',
    label: 'Corporate & Gifting',
    body: "Elevate corporate gifting beyond the predictable. Personalised fragrances that reflect each recipient — a brand statement they'll actually treasure.",
    image: '/images/world-corporate.jpg',
  },
  {
    id: 'hospitality',
    label: 'Hospitality',
    body: 'Transform guest stays into sensory journeys. Bespoke signature scents for your property, or personalised takeaways for VIP guests.',
    image: '/images/world-hospitality.jpg',
  },
]

export default function ChooseYourWorld() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="w-full bg-cream py-16 md:py-32">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 px-6 md:mb-8 md:px-32"
      >
        <h2 className="h2 text-ink">Choose Your World</h2>
        <p className="p1 mt-2 text-ink">Which story will you write in scent?</p>
      </motion.div>

      <div className="flex flex-col gap-3 px-4 md:h-[500px] md:flex-row md:px-2">
        {worlds.map((world, i) => {
          const isActive = i === active

          return (
            <motion.div
              key={world.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(isActive ? null : i)}
              className="group relative h-[280px] cursor-pointer overflow-hidden rounded-lg md:h-auto"
              style={{ flex: 2 }}
            >
              <motion.div
                animate={{ flex: isActive ? 3 : active === null ? 2 : 1.5 }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0"
              >
                <motion.div
                  animate={{ scale: isActive ? 1 : 1.1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${world.image})` }}
                />

                <motion.div
                  animate={{ opacity: isActive ? 0 : 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-black"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-8">
                  <motion.h3
                    animate={{ fontSize: isActive ? '24px' : '20px' }}
                    transition={{ duration: 0.5 }}
                    className="font-mono uppercase leading-tight tracking-tight5 text-white md:!text-[24px]"
                    style={{ fontSize: isActive ? undefined : '20px' }}
                  >
                    {world.label}
                  </motion.h3>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-3 flex items-end justify-between gap-3 md:mt-4 md:gap-4"
                      >
                        <p className="max-w-[400px] text-[13px] leading-[140%] tracking-tight5 text-white md:text-[16px] md:leading-[130%]">
                          {world.body}
                        </p>
                        <ArrowButton variant="outline-light" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}