'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

const steps = [
  {
    num: '01',
    heading: 'Tap, Swipe, Dream',
    body: 'It begins with digital invitations sent to your event guests or team members. Each recipient engages with our AI through natural conversation—sharing their unique perspective or meaningful connection.',
    sub: "Our technology transforms these insights into personalized fragrance profiles, which master perfumers bring to life using premium ingredients. The finished scents arrive in elegant packaging customizable for your event or brand—creating a sophisticated keepsake that's genuinely personal.",
    image: '/images/step-01.jpg',
  },
  {
    num: '02',
    heading: 'Five-Minute AI Creation',
    body: 'It begins with digital invitations sent to your event guests or team members. Each recipient engages with our AI through natural conversation—sharing their unique perspective or meaningful connection.',
    sub: "Our technology transforms these insights into personalized fragrance profiles, which master perfumers bring to life using premium ingredients.",
    image: '/images/step-02.jpg',
  },
  {
    num: '03',
    heading: 'Bottles Await on the Big Day',
    body: 'It begins with digital invitations sent to your event guests or team members. Each recipient engages with our AI through natural conversation—sharing their unique perspective or meaningful connection.',
    sub: "Our technology transforms these insights into personalized fragrance profiles, which master perfumers bring to life using premium ingredients.",
    image: '/images/step-03.jpg',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const dotY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={ref}
      className="relative w-full bg-white"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <h2 className="h1 pt-24 text-center text-ink">How It Works</h2>

        <div className="absolute left-1/2 top-40 bottom-16 w-px -translate-x-1/2 bg-ink">
          <motion.div
            style={{ top: dotY }}
            className="absolute left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink bg-white"
          >
            <div className="h-5 w-5 rounded-full bg-ink" />
          </motion.div>
        </div>

        {steps.map((step, i) => (
          <Step
            key={step.num}
            step={step}
            index={i}
            total={steps.length}
            progress={scrollYProgress}
            side={i % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  )
}

type StepProps = {
  step: (typeof steps)[number]
  index: number
  total: number
  progress: MotionValue<number>
  side: 'left' | 'right'
}

function Step({ step, index, total, progress, side }: StepProps) {

  const start = index / total
  const end = (index + 1) / total
  const mid = (start + end) / 2

  const opacity = useTransform(
    progress,
    [start, mid - 0.05, mid + 0.05, end],
    [0, 1, 1, 0]
  )
  const y = useTransform(progress, [start, end], [60, -60])

  
  const imageX = useTransform(
    progress,
    [start, mid],
    side === 'left' ? [-80, 0] : [80, 0]
  )


  const imageOnLeft = side === 'left'

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center"
    >
      <motion.div
        style={{ x: imageX }}
        className={`absolute top-1/2 h-[60vh] w-[45%] -translate-y-1/2 overflow-hidden bg-cover bg-center ${
          imageOnLeft ? 'left-0 rounded-r-lg' : 'right-0 rounded-l-lg'
        }`}
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${step.image})` }}
        />
      </motion.div>

      <motion.div
        style={{ y }}
        className={`absolute top-1/2 flex w-[40%] max-w-[479px] -translate-y-1/2 flex-col gap-4 ${
          imageOnLeft ? 'right-[5%]' : 'left-[5%]'
        }`}
      >
        <div className="flex flex-col gap-2">
          <span className="h4 text-ink">{step.num}</span>
          <h3 className="h3 text-ink">{step.heading}</h3>
        </div>
        <p className="p1 text-ink">{step.body}</p>
        <p className="p2 text-smoke">{step.sub}</p>
      </motion.div>
    </motion.div>
  )
}