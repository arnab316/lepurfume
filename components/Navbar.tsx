import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-32">
      <Link href="/" className="btn-label text-[18px] tracking-tight5 text-white">
        leparfum.ai
      </Link>

      <div className="flex items-center gap-[52px]">
        <Link href="/" className="text-[13px] font-bold uppercase leading-[150%] text-white transition-opacity hover:opacity-70">
          Curate My Scent
        </Link>
        <Link href="/" className="text-[13px] font-bold uppercase leading-[150%] text-white transition-opacity hover:opacity-70">
          Let&apos;s Chat
        </Link>
      </div>
    </nav>
  )
}
