#  Personal Portfolio

A professional, high-performance personal portfolio built to showcase engineering work, technical skills, and a user-centric approach to software development.

##  Tech Stack

This project is built with modern, scalable technologies:

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **UI Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Email API**: [Resend](https://resend.com/)

##  Features

- **Responsive Design**: Flawless experience across all devices with carefully crafted mobile and desktop states (including touch-safe hover interactions).
- **Premium Aesthetics**: Clean, modern dark mode UI with glassmorphism effects, strategic glow highlights, and subtle micro-interactions.
- **Contact Form**: Integrated functional contact form utilizing the Resend API for direct communication.
- **Dynamic Projects Showcase**: Highlight featured work (like Taskflow) with dedicated problem/solution breakdowns and live links.
- **Performance Optimized**: Built on Next.js Turbopack with strict adherence to Web Vitals and SEO best practices.

##  Getting Started

First, install the dependencies:

```bash
npm install
```

Next, duplicate the `.env.local.example` or set up the environment variables (specifically for Resend):

```bash
RESEND_API_KEY=your_resend_api_key_here
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##  Project Structure

- `app/` - Next.js App Router layout and pages.
- `src/components/` - Reusable UI components (Navbar, Container, etc.).
- `src/sections/` - Major page sections (Hero, About, Projects, Skills, Approach, Contact, Footer).
- `src/lib/` - Utility functions and shared constants (e.g., social links).
- `public/` - Static assets and media.

##  Deployment

This platform is ready for seamless deployment on [Vercel](https://vercel.com/):

```bash
npm run build
```

Then follow Vercel's standard deployment flow. Ensure that your `RESEND_API_KEY` is added to the production environment variables.

---

*Designed and engineered with a focus on reliability, speed, and user experience.*
