# Chaitanya Raj — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 (Next.js will pick the next free port if 3000 is busy).

## Editing content

All site content — profile, hero stats, about copy, principles, experience, skills, projects,
education, certifications — lives in one place: [`lib/content.ts`](lib/content.ts). Components
read from it and hold no copy of their own, so editing that file is enough.

Icons are referenced by name (e.g. `icon: "workflow"`), and each component maps those names to
`lucide-react` components — that keeps `content.ts` free of JSX.

## Portrait

Save your headshot as **`public/portrait.jpg`** (square crops work best — it's rendered at a 1:1
aspect ratio with `object-fit: cover`, so any ratio is cropped centrally rather than distorted).

It's wired up already: it renders in the About section behind an offset accent frame, and is added
to the JSON-LD `Person.image`. Both are guarded by a build-time `existsSync` check, so until the
file is there the site simply shows no portrait — never a broken image. Add the file and rebuild
and it appears; no code change needed. To use a different filename or format, change
`profile.photo` in [`lib/content.ts`](lib/content.ts).

Still to fill in:
- `profile.siteUrl` — defaults to `https://example.com`. Set `NEXT_PUBLIC_SITE_URL` (or edit the
  fallback) so `metadataBase`, canonical URL, OG tags and the sitemap point at the real domain.
- `experience[0].note` — optional line explaining how Surya FinTech relates to Surya Software
  Systems Pvt. Ltd.; renders under the company heading when set.
- `certifications` — empty by default. Add entries and they render alongside education.

## Metadata, OG image and SEO

- [`app/opengraph-image.tsx`](app/opengraph-image.tsx) generates the 1200×630 social card at build
  time from the same tokens as the site, via `ImageResponse` from `next/og`.
- [`app/layout.tsx`](app/layout.tsx) sets Open Graph / Twitter metadata and emits a JSON-LD
  `Person` schema.
- [`app/sitemap.ts`](app/sitemap.ts) and [`app/robots.ts`](app/robots.ts) are generated from
  `profile.siteUrl`.

## Motion

Animation uses `framer-motion`, wrapped in small client primitives so the section components stay
server-rendered:

- [`components/motion.tsx`](components/motion.tsx) — `Reveal`, `StaggerGroup`/`StaggerItem`/`StaggerCard`, `CountUp`
- [`components/interactions.tsx`](components/interactions.tsx) — `Spotlight` (pointer-tracking card glow), `Magnetic` (buttons)
- [`components/ArchitectureDiagram.tsx`](components/ArchitectureDiagram.tsx) — the looping hero signal flow

Every primitive checks `useReducedMotion()` and renders a plain element instead, and the
stylesheet damps CSS animation under `prefers-reduced-motion: reduce`.

## Contact form (Resend)

The contact form (`components/Contact.tsx`) posts to `app/api/contact/route.ts`, which sends an
email via [Resend](https://resend.com).

1. Create a free Resend account and generate an API key.
2. Copy `.env.example` to `.env.local` and set your key:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```
3. On Vercel: Project Settings → Environment Variables → add both.

The route drops submissions that fill the hidden `company` honeypot field, and throttles each IP
to 5 requests per hour. That throttle is in-memory, so it is per-instance and resets on cold
start — good enough to blunt casual abuse, but move it to Vercel KV or Upstash if the endpoint
is ever seriously targeted.

Without the key set, the API route returns a clear error and the UI shows a "email me directly"
fallback link instead of failing silently.

By default, Resend's shared `onboarding@resend.dev` sender is used, which only requires the API
key. To send from your own domain, verify a domain in Resend and update the `from` address in
`app/api/contact/route.ts`.

## Deploying to Vercel

1. Push this repo to GitHub (or another Git provider).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo — Next.js is auto-detected,
   no config needed.
3. Add the `RESEND_API_KEY` environment variable before or after the first deploy.
4. Deploy.

Alternatively, from the CLI: `npx vercel` (and `npx vercel --prod` to promote to production)
after running `vercel login`.
