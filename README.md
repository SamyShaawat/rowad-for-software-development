# Rowad

Website for **Rowad for Software Development**, a software company in Alexandria, Egypt.
We design, build and run:

- **Websites and web apps**: company sites, online stores, customer portals
- **Mobile apps**: iOS and Android from one codebase
- **ERP systems**: implementation, data migration, custom modules (built on Odoo)
- **AI agents**: agents that read your data, use your tools and finish tasks, with human approval
- **Chatbots**: Arabic and English bots for WhatsApp and web, connected to your CRM
- **Hosting and DevOps**: managed hosting, CI/CD, backups and monitoring

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, static export), React 19, TypeScript 5 |
| Styling | Tailwind CSS 3, IBM Carbon design tokens, IBM Plex Sans / Mono |
| Forms | React Hook Form, Zod, reCAPTCHA; PHP mailer on cPanel (`public/contact-mailer.php`) |
| Icons | Heroicons; service diagrams are drawn in code (SVG) |
| Tooling | Nx 21, pnpm, Prettier, Playwright (e2e) |
| CI/CD | GitHub Actions, deployed to cPanel through the `deploy` branch |

## Getting started

Requirements: Node.js 22 and pnpm 10.

```bash
git clone https://github.com/SamyShaawat/Rowad.git
cd Rowad
pnpm install
cp .env.example .env.local   # add your reCAPTCHA and SMTP values for the contact form
pnpm dev                     # runs `nx serve rowad` at http://localhost:3001
```

If the dev server will not start, check that port 3001 is free and delete the `.next` folder.

## Scripts

```bash
pnpm dev            # development server (Turbopack) on :3001
pnpm build          # production build, static export to build/
pnpm start          # production server on :3001
pnpm nx:typecheck   # TypeScript check
pnpm format         # Prettier
pnpm test:e2e       # Playwright tests
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, clients strip, six services, how we work, call to action |
| `/services` | One section per service: diagram, what we build, how we deliver, stack, ways to work with us |
| `/about` | Story, numbers, how we work, expertise |
| `/clients` | Searchable, paginated client list |
| `/contact` | Contact form, company details, FAQ |

## Design

Built on the **IBM Carbon** design system: IBM Plex type, a black header bar, grey layers and
tile grids, with Rowad orange as the accent. Buttons are pills, frames are rounded, client logos
sit in circles. There are no gradients. Light and dark themes use soft off-white and off-black,
plus one calm accent colour per service.

## Project structure

```
src/
  app/                 routes: /, services, about, clients, contact, api/contact, not-found
  components/
    layout/            Header, Footer, ThemeToggle
    sections/          Hero, Services, Process, TrustStrip, Clients, CTA, illustrations
    ui/                Logo, PageHero, CurrentYear
  constants/           company, services, stats, clients and copy
  features/contact/    contact form
public/
  images/brand/        favicon, app icons, Open Graph image
  images/clientsImages client logos
.github/workflows/     CI and deploy
```

## Deployment

1. Push or merge to `main`.
2. GitHub Actions runs type checks and e2e tests, builds the static site and publishes it to the
   `deploy` branch.
3. cPanel pulls the `deploy` branch (Git Version Control) and copies the files to `public_html`.

Details: [CPANEL-DEPLOY-GUIDE.md](CPANEL-DEPLOY-GUIDE.md) and [DEPLOYMENT.md](DEPLOYMENT.md).
Work on a branch and open a pull request into `main`.

## Contact

- Website: https://rowad.com
- Email: info@rowad.com
- Phone: +20 109 1539 396
- Office: 584 El-Horreya Road, Gleem, Alexandria, Egypt

## License

Proprietary and confidential.
