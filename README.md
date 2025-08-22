# Real Estate Dashboard MVP

This repository contains an MVP implementation of a real estate site-selection dashboard for **BRAND_NAME** in **CITY/REGION**.

## Features
- Map based exploration of candidate locations
- Scoring and financial simulator
- API routes for scoring, similarity lookup and PDF one-pager report
- Prisma schema with PostGIS types

## Setup
1. Install dependencies (requires internet access):
   ```bash
   npm ci
   ```
2. Create `.env.local` with:
   ```env
   DATABASE_URL="postgresql://..."
   NEXT_PUBLIC_MAPBOX_TOKEN="pk..."
   ```
3. Run database migration and seed:
   ```bash
   npx prisma migrate deploy
   npm run seed
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

## Testing
- Unit tests: `npm test`
- E2E tests: `npx playwright test`

## Deployment
- Frontend/Backend: Vercel
- Database: Supabase (Postgres + PostGIS)

## Performance & Security Checklist
- [ ] Use CDN for static assets
- [ ] Enable HTTPS and secure cookies
- [ ] Apply input validation with Zod on API routes
- [ ] Run `npm audit` regularly
- [ ] Configure Supabase Row Level Security

## ERD
See `docs/erd.puml` for schema diagram.

## Notebooks
`notebooks/scoring.ipynb` provides the Python reference used to port logic to TypeScript in `src/lib/scoring.ts`.
