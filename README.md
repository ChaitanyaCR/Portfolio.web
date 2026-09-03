# Chaitanya Raj — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 (Next.js will pick the next free port if 3000 is busy).

## Editing content

All resume content — profile info, experience, skills, projects, education, certifications —
lives in one place: [`lib/content.ts`](lib/content.ts). Edit that file to update copy; no need
to touch the components.

Two things to fill in there:
- `profile.linkedin` / `profile.github` — currently placeholder URLs, replace with your real profiles.
- `certifications` — empty by default (none on the resume yet). Add entries and the
  Certifications section will appear automatically.

## Contact form (Resend)

The contact form (`components/Contact.tsx`) posts to `app/api/contact/route.ts`, which sends an
email via [Resend](https://resend.com).

1. Create a free Resend account and generate an API key.
2. Set it locally in `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   ```
3. On Vercel: Project Settings → Environment Variables → add `RESEND_API_KEY`.

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
