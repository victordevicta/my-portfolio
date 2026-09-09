# ⚙️ Victor de Victa — Portfolio

A personal portfolio site with a steampunk soul — brass gradients, gear dividers, and warm bronze tones wrapped around a clean, modern Next.js build.

Live sections walk through who I am, what I've worked on, and what I've shipped: an animated hero, a tabbed skills/education/experience timeline, and a filterable project showcase.

## ✨ Features

- **Animated hero** — role titles cycle through a typewriter effect (`react-type-animation`)
- **Tabbed "About Me"** — Skills, Education and Experience rendered from a single reusable timeline component, each with tags, dates and locations
- **Filterable projects grid** — tag-based filtering (`All` / `Web`) with hover-reveal repo links
- **Steampunk visual theme** — bronze/brass color palette, gear-icon section dividers, brass-framed imagery, subtle grain texture
- **Responsive navigation** — collapsible mobile menu, smooth-scrolling anchor links tuned to clear the fixed navbar
- **CV download & LinkedIn CTA** — one click to grab the résumé PDF or head straight to LinkedIn

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| UI | [React 18](https://react.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) with a custom bronze/brass theme |
| Icons | [Heroicons](https://heroicons.com/) |
| Animation | [react-type-animation](https://www.npmjs.com/package/react-type-animation) |
| Testing | [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) |
| Fonts | `next/font/google` (Inter) |

## 🚀 Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it live. The page hot-reloads as you edit files under `src/app`.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint over the project |
| `npm run test` | Run the Jest test suite once |
| `npm run test:watch` | Run tests in watch mode |

## 📁 Project Structure

```
src/app/
├── components/          # UI building blocks (Navbar, HeroSection, ProjectCard, ...)
│   └── __tests__/       # Component tests (Jest + React Testing Library)
├── utils/
│   └── tab-data-lists.js  # Skills, education and experience data
├── globals.css           # Theme, background texture, base styles
├── layout.js              # Root layout, fonts and metadata
└── page.js                # Page composition (Hero, About, Projects)
```

## 🧪 Testing

Component behavior — tab switching, project filtering, mobile menu toggling, nav links — is covered with Jest and React Testing Library. Run the suite with:

```bash
npm run test
```

## 📄 License

Personal project — feel free to look around, but please don't reuse the content as your own.
