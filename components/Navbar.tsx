'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="absolute inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-6 md:px-32">
      <Link href="/" className="text-[16px] font-bold uppercase tracking-tight5 text-white md:text-[18px]">
        leparfum.ai
      </Link>

      <div className="hidden items-center gap-[52px] md:flex">
        <Link href="/" className="text-[13px] font-bold uppercase leading-[150%] text-white transition-opacity hover:opacity-70">
          Curate My Scent
        </Link>
        <Link href="/" className="text-[13px] font-bold uppercase leading-[150%] text-white transition-opacity hover:opacity-70">
          Let&apos;s Chat
        </Link>
      </div>

      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span
          className={`h-px w-6 bg-white transition-transform ${
            open ? 'translate-y-[7px] rotate-45' : ''
          }`}
        />
        <span className={`h-px w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span
          className={`h-px w-6 bg-white transition-transform ${
            open ? '-translate-y-[7px] -rotate-45' : ''
          }`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-20 flex flex-col gap-6 bg-ink/95 px-6 py-8 backdrop-blur md:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-[14px] font-bold uppercase text-white"
          >
            Curate My Scent
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-[14px] font-bold uppercase text-white"
          >
            Let&apos;s Chat
          </Link>
        </div>
      )}
    </nav>
  )
}