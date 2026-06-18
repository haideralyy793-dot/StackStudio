# Stack Studio

Premium dark agency website for a software/web development studio. Built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, GSAP ScrollTrigger, Lenis, and React Hook Form.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Google Sheets contact form

1. Create a Google Sheet with columns: `Timestamp | Name | Email | Phone | Service | Budget | Message`
2. Open **Extensions → Apps Script** and deploy the `doPost` handler from the project brief
3. Deploy as Web App: Execute as **Me**, access **Anyone**
4. Copy the Web App URL into `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Logo assets

- `public/logo.png` — transparent background (navbar, footer, preloader, page transitions)
- `public/logo-light.jpg` — light background variant

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # production server
npm run lint     # ESLint
```

## Tech stack

- Next.js 15 App Router
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion
- GSAP + ScrollTrigger
- Lenis smooth scroll
- React Hook Form + Zod
- Google Apps Script (form → Sheets)
