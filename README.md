# leparfum.ai

Bespoke fragrance landing page built with Next.js 14 (App Router), Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — the root redirects to `/information`.

## Folder structure

## Assets

Drop the files into the matching folders — filenames must be exact.

### Videos — `public/videos/`

Hero section:
- `hero-1.mp4` — main hero background
- `hero-2.mp4` — second hero slide

Scrolling card section (auto-rotates every 4s):
- `card-broken-gift.mp4`
- `card-solution.mp4`
- `card-experience.mp4`
- `card-legacy.mp4`

How It Works (sticky scroll steps):
- `step-01.mp4`
- `step-02.mp4`
- `step-03.mp4`

Choose Your World (expanding panels):
- `world-weddings.mp4`
- `world-corporate.mp4`
- `world-hospitality.mp4`

> Note: if you only have images instead of videos for some sections, the components for Scrolling Card / How It Works / Choose Your World accept image paths too. Just point them at `/images/...jpg` and they fall back to background images.

### Images — `public/images/`

Bottles for the Uniquely Bottled ring (12 used in rotation):

`bottle-red.jpg`, `bottle-glitter.jpg`, `bottle-romantic.jpg`, `bottle-desert.jpg`, `bottle-beach.jpg`, `bottle-floral.jpg`, `bottle-moonlit.jpg`, `bottle-tropical.jpg`, `bottle-rainy.jpg`, `bottle-warm.jpg`, `bottle-cosmic.jpg`, `bottle-jungle.jpg`

Other:
- `logo.png` — footer + navbar logo
- `Instagram.png`, `Facebook.png`, `tictoc.png`, `x.png`, `linkedin.png` — social icons

## Animations

| Section          | What happens                                                           |
| ---------------- | ---------------------------------------------------------------------- |
| Hero             | Parallax — text fades and drifts down, video drifts up as you scroll   |
| Scrolling Card   | Auto-rotates every 4s, crossfade between slides, dot pagination        |
| How It Works     | Sticky scroll — progress dot slides down the center line, steps fade   |
| Choose Your World | Panels expand on hover, body text + arrow reveal on the active panel  |
| Uniquely Bottled | Bottles orbit in an elliptical ring around the center text             |
| Testimonials     | Continuous marquee (loops forever, optional pause on hover)            |
| FAQs             | Questions cascade in on scroll, hover line, accordion open/close       |

## Font

Uses **Share Tech Mono** via `next/font/google` as a free stand-in for Andale Mono. Swap it in `app/layout.tsx` if you license the real Andale Mono later.

## Notes

- All section files are in `components/sections/` — edit any one without touching the others.
- Tailwind tokens (colors like `ink`, `cream`, `smoke`, `ash`, `sand`, `sky`) live in `tailwind.config.ts`.
- Animations use Framer Motion's `useScroll` for parallax/sticky-scroll and `motion` components for everything else.