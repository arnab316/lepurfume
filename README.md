# leparfum.ai

Bespoke fragrance landing page — Next.js 14 (App Router) + Tailwind CSS + Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` — it redirects to `/information`.

## Assets needed

### Videos → `public/videos/`
- `hero-1.mp4` — main hero background
- `hero-2.mp4` — second hero slide
- `card-broken-gift.mp4` — Broken Gift card
- `card-solution.mp4` — The Solution card
- `card-experience.mp4` — The Experience card
- `card-legacy.mp4` — The Legacy card
- `step-01.mp4` — How It Works step 1
- `step-02.mp4` — How It Works step 2
- `step-03.mp4` — How It Works step 3
- `world-weddings.mp4` — Weddings panel
- `world-corporate.mp4` — Corporate panel
- `world-hospitality.mp4` — Hospitality panel

### Images → `public/images/`
12 bottle images: `bottle-red.jpg`, `bottle-glitter.jpg`, `bottle-romantic.jpg`, `bottle-desert.jpg`, `bottle-beach.jpg`, `bottle-floral.jpg`, `bottle-moonlit.jpg`, `bottle-tropical.jpg`, `bottle-rainy.jpg`, `bottle-warm.jpg`, `bottle-cosmic.jpg`, `bottle-jungle.jpg`

## Animations

- **Hero** — parallax scroll (text fades out, video drifts up)
- **Scrolling Card** — video crossfade between slides
- **How It Works** — sticky scroll with progress dot moving down center line
- **Choose Your World** — horizontal expanding panels on hover
- **Uniquely Bottled** — floating drifting bottles
- **FAQs** — hover progress bar + accordion expand
- **Testimonials** — sliding carousel
