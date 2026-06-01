'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Lorem ipsum dolor sit amet consectetur vitae vitae augue lobortis dictum?',
    a: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
  },
  {
    q: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?',
    a: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.',
  },
  {
    q: 'Neque porro quisquam est, qui dolorem ipsum?',
    a: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
  },
  {
    q: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis?',
    a: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
  },
  {
    q: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum?',
    a: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
  },
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0)
  const [hover, setHover] = useState<number | null>(null)

  return (
    <section className="w-full bg-ink px-4 py-12 md:px-16 md:py-20">
      <div className="rounded-2xl bg-white p-6 md:p-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h2 text-ink"
          >
            FAQs
          </motion.h2>

          <div className="flex flex-col">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-px w-full origin-left bg-ash"
            />

            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="relative border-b border-ash"
              >
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: hover === i ? '100%' : '0%' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute bottom-0 left-0 h-px bg-ink"
                />

                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left md:gap-16 md:py-6"
                >
                  <span className="text-[14px] font-normal uppercase leading-[130%] tracking-tight5 text-ink md:text-[18px] md:leading-[120%]">
                    {faq.q}
                  </span>
                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-smoke md:h-12 md:w-12">
                    <span className="block h-px w-3 bg-ink md:w-4" />
                    <motion.span
                      animate={{ rotate: open === i ? 0 : 90 }}
                      transition={{ duration: 0.3 }}
                      className="absolute block h-px w-3 bg-ink md:w-4"
                    />
                  </span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[600px] pb-5 text-[14px] leading-[140%] tracking-tight5 text-smoke md:pb-6 md:text-[16px] md:leading-[130%]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}