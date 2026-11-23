# BAJs Portfolio Website

BAJs Project Management &amp; Consultancy (RC: 9947203)

Marketing site for a multidisciplinary consultancy working across project management, business
development, technology, data and finance.

## Tech stack

- Next.js 14 (App Router) with TypeScript
- Tailwind CSS
- Framer Motion (used sparingly for page transitions and section reveals)
- Resend for the contact form (server-side API route)
- Deployed on Vercel

## Getting started

```bash
git clone https://github.com/japheth-codes/bajs-website.git
cd bajs-website
npm install
cp .env.local.example .env.local
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Environment variables

All variables live in `.env.local` for local development and in Vercel for Preview and Production.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key with sending access |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `BAJs Website <contact@your-domain>` |
| `CONTACT_EMAIL_GENERAL` | Inbox for General Inquiry and Other |
| `CONTACT_EMAIL_PROJECTS` | Inbox for Project Discussion and Partnership |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata |

None of the Resend or inbox variables use the `NEXT_PUBLIC_` prefix, so they never reach the
browser.

## Content

Most copy lives in the data files so it only needs updating in one place:

- `src/data/company.ts` (name, RC number, tagline, phones, email, LinkedIn, addresses)
- `src/data/services.ts` (the five service areas)
- `src/data/team.ts` (leadership profiles)
- `src/data/projects.ts` (project catalogue)

## Contact form

`src/app/api/contact/route.ts` sends each message through Resend and routes it by subject:

| Subject | Recipient |
| --- | --- |
| General Inquiry | `CONTACT_EMAIL_GENERAL` |
| Other | `CONTACT_EMAIL_GENERAL` |
| Project Discussion | `CONTACT_EMAIL_PROJECTS` |
| Partnership | `CONTACT_EMAIL_PROJECTS` |

The route includes a honeypot field and basic validation. Resend can only deliver to other
inboxes after a sending domain is verified; a `.vercel.app` address cannot be verified.

## Deployment

Pushes to `main` run the quality check (type check, lint, build) and then deploy with the Vercel
action. Required repository secrets:

| Secret | Description |
| --- | --- |
| `VERCEL_TOKEN` | Vercel personal access token |
| `VERCEL_ORG_ID` | Vercel team/org ID |
| `VERCEL_PROJECT_ID` | Vercel project ID |

The canonical URL is `https://bajs-pmc.vercel.app`. The older
`https://bajs-website.vercel.app` domain should redirect to it. Both are configured in the
Vercel dashboard under Settings, then Domains.

## Contact

bajsprojmangandconsultancy@gmail.com
