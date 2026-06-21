# BAJs Portfolio Website

**BAJs Project Management and Consultancy** (RC: 7377476)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS (contact form)
- Deployed on Vercel

## Getting Started (Local Development)

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd bajs-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Open `.env.local` and fill in your EmailJS keys.

4. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/          # Next.js App Router pages and layouts
├── components/   # Reusable UI and section components
└── data/         # Static content (projects, team, services)
```

## Updating Content

- **Projects** — edit `src/data/projects.ts`
- **Team info** — edit `src/data/team.ts`
- **Services** — edit `src/data/services.ts`

## Deployment

Automatic via GitHub Actions on every push to `main`. The `quality-check` job (type check, lint, build) must pass before deployment triggers.

Requires the following secrets set in the GitHub repository settings:

| Secret | Description |
|---|---|
| `VERCEL_TOKEN` | Vercel personal access token |
| `VERCEL_ORG_ID` | Vercel team/org ID |
| `VERCEL_PROJECT_ID` | Vercel project ID |

## Contact

[bajsprojmangandconsultancy@gmail.com](mailto:bajsprojmangandconsultancy@gmail.com)
