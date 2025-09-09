## MySaaS – Portfolio and Contact Website

A Next.js (App Router) website to showcase portfolio projects and allow clients to contact us.

### Tech
- Next.js 14 (App Router)
- TypeScript, ESLint
- Tailwind CSS

### Run locally
```bash
yarn
yarn dev
# open http://localhost:3000
```

### Project structure
- `src/app/layout.tsx`: Global layout with Navbar and Footer
- `src/app/page.tsx`: Home page (hero + CTAs)
- `src/app/portfolio/page.tsx`: Portfolio grid (placeholder data)
- `src/app/contact/page.tsx`: Contact form
- `src/app/api/contact/route.ts`: API endpoint to handle contact submissions (placeholder)

### Next steps
- Replace placeholder portfolio cards with real data
- Wire up `/api/contact` to send email or store in a database
- Add SEO metadata and Open Graph tags
