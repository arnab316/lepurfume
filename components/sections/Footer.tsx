import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Information', href: '/information' },
]

const services = [
  { label: 'Weddings', href: '/' },
  { label: 'Corporate & Gifting', href: '/' },
  { label: 'Hospitality', href: '/' },
]

const legal = [
  { label: 'Privacy Policy', href: '/' },
  { label: 'Terms of Service', href: '/' },
  { label: 'Cookies Settings', href: '/' },
]

const socials = [
  { name: 'Instagram', icon: '/images/Instagram.png', href: 'https://instagram.com/leparfum.ai' },
  { name: 'Facebook', icon: '/images/Facebook.png', href: 'https://facebook.com/leparfum.ai' },
  { name: 'TikTok', icon: '/images/tictoc.png', href: 'https://tiktok.com/@leparfum.ai' },
  { name: 'X', icon: '/images/x.png', href: 'https://x.com/leparfum_ai' },
  { name: 'LinkedIn', icon: '/images/LinkedIn.png', href: 'https://linkedin.com/company/leparfum-ai' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-cream px-6 pb-8 pt-12 md:px-32 md:pb-10 md:pt-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <Link href="/">
          <img src="/images/logo.png" alt="leparfum.ai" className="h-7 bg-black md:h-8" />
        </Link>

        <div className="grid grid-cols-2 gap-8 md:flex md:gap-20">
          <FooterColumn links={navLinks} />
          <FooterColumn links={services} />
          <FooterColumn links={legal} />

          <div className="flex flex-col gap-2">
            <a href="mailto:enquiries@leparfum.ai" className="btn-label break-all text-ink hover:opacity-60">
              ✉ enquiries@leparfum.ai
            </a>
            <a href="mailto:media@leparfum.ai" className="btn-label break-all text-ink hover:opacity-60">
              ✉ media@leparfum.ai
            </a>
          </div>
        </div>
      </div>

      <div className="my-6 h-px w-full bg-ash md:my-8" />

      <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="p2 text-ink">© 2026 leparfum.ai. All rights reserved.</p>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="hover:opacity-60"
            >
              <img src={s.icon} alt={s.name} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="btn-label text-ink hover:opacity-60">
          {l.label}
        </Link>
      ))}
    </div>
  )
}