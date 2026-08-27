# DeFi Accountancy Website

Professional marketing site for DeFi Accountancy — tax, accounting, bookkeeping, and business services.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- shadcn/ui (Base UI primitives)
- Supabase (consultation form storage)
- Vercel (hosting + analytics)

## Local development

```bash
cp .env.example .env.local
# Fill NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
npm install
npm run dev
```

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Publishable / anon key for form inserts |

Business contact details live in `src/lib/site.ts`.
