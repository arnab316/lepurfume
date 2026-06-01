'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '../Navbar'
import ArrowButton from '../ui/ArrowButton'
import DotPagination from '../ui/DotPagination'

const slides = [
  {
    heading: 'Bottle the Moment',
    sub: 'Bespoke scents for unforgettable memories',
    body: 'Expertly crafted fragrances that bring your stories to life, from personal celebrations to corporate gifts.',
    video: '/videos/hero-1.mp4',
  },
  {
    heading: 'Craft Your Signature',
    sub: 'AI-curated fragrances, uniquely yours',
    body: 'Tell us your story. Our AI reads between the lines to compose a scent no one else will wear.',
    video: '/videos/hero-2.mp4',
  },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const videoY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0])

  const slide = slides[active]
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setActive((i) => (i + 1) % slides.length)

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-ink md:min-h-[800px]">
      <motion.div style={{ y: videoY }} className="absolute -inset-y-32 inset-x-0 z-0">
        <video
          key={slide.video}
          src={slide.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-800 to-black" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </motion.div>

      <Navbar />

      <div className="absolute left-4 top-1/2 z-20 -translate-y-1/2 md:left-[60px]">
        <DotPagination count={slides.length} active={active} vertical onChange={setActive} />
      </div>

      <div className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4 md:right-[60px]">
        <ArrowButton direction="left" variant="outline-light" onClick={prev} />
        <ArrowButton direction="right" variant="filled-light" onClick={next} />
      </div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-x-0 bottom-[40px] z-10 px-6 md:bottom-[80px] md:px-32"
      >
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] font-normal uppercase leading-[130%] tracking-tight5 text-white md:text-[36px]">
              {slide.heading}
            </h1>
            <h2 className="text-[20px] font-normal uppercase leading-[130%] tracking-tight5 text-haze md:text-[36px]">
              {slide.sub}
            </h2>
          </div>

          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <p className="p1 max-w-full text-white md:max-w-[378px]">{slide.body}</p>
            <button onClick={next} className="group flex items-center gap-2">
              <span className="btn-label text-[13px] text-white">Begin the journey</span>
              <span className="h-[7px] w-[7px] rounded-full bg-white transition-transform group-hover:scale-125" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}