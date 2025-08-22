# HQ Dashboard MVP

Initial scaffold for the headquarters dashboard to monitor labor, rent and raw material costs and evaluate franchise-to-owned conversion timing.

## Setup

```bash
npm install
npm run dev
```

## Database
- SQL schema: `db/schema.sql`
- Initial migration: `db/migrations/000_init.sql`

## Seed

```bash
npm run seed
```

## Structure
```
src/
  app/
    overview/
    advisor/
  components/
  lib/
data/csv
scripts/
```

See `docs/ROADMAP.md` for phase 2 plans.
