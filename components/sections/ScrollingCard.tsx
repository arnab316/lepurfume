'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArrowButton from '../ui/ArrowButton'
import DotPagination from '../ui/DotPagination'

const cards = [
  {
    title: 'The Broken Gift',
    body: 'Move beyond predictable favors and corporate gifts to something genuinely memorable. Each recipient creates a personal fragrance that captures their unique experience or relationship—crafted with premium ingredients and presented with an elegance that reflects the occasion.',
    image: '/images/scrolling-bg.jpg',
    label: 'How can you elevate your big day?',
  },
  {
    title: 'The Solution',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    image: '/images/scrooling2.jpg',
    label: 'Ready to begin?',
  },
  {
    title: 'The Experience',
    body: 'Every guest walks away with something they cherish — a fragrance that captures the essence of your event, designed individually for them and presented in elegant packaging.',
    image: '/images/scrooling3.jpg',
    label: 'Imagine the possibilities',
  },
  {
    title: 'The Legacy',
    body: 'Long after the day has ended, each guest carries home a tangible memory — a scent that brings them back to your moment whenever they wear it.',
    image: '/images/scrooling4.jpg',
    label: 'Build something timeless',
  },
]

export default function ScrollingCard() {
  const [active, setActive] = useState(0)
  const card = cards[active]

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % cards.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full bg-white px-4 py-6 md:px-16 md:py-8">
      <div className="relative h-[560px] w-full overflow-hidden rounded-2xl bg-cream md:h-[722px]">
        <AnimatePresence mode="sync">
          <motion.div
            key={card.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${card.image})` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 md:via-black/30 md:to-transparent" />

        <div className="absolute left-6 right-6 top-1/2 z-10 flex max-w-[477px] -translate-y-1/2 flex-col gap-6 md:left-16 md:right-auto md:w-[477px] md:gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-2"
            >
              <h2 className="text-[24px] font-normal uppercase leading-[130%] tracking-tight5 text-white md:text-[36px]">
                {card.title}
              </h2>
              <p className="text-[14px] leading-[140%] tracking-tight5 text-white md:text-[16px] md:leading-[130%]">
                {card.body}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-end gap-2">
            <ArrowButton variant="filled-light" />
            <div className="flex w-full max-w-[323px] flex-col gap-1">
              <span className="caption text-white/70">{card.label}</span>
              <div className="flex h-12 items-center justify-end rounded border border-ash/80 px-3">
                <ArrowButton variant="outline-light" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 z-10 md:bottom-9 md:left-16">
          <DotPagination count={cards.length} active={active} onChange={setActive} />
        </div>
      </div>
    </section>
  )
}