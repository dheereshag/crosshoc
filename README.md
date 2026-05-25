# Crosshoc

A game discovery and catalog web app built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Features

- **Game catalog** — Browse a curated list of games across 8 genres (Action, Strategy, RPG, Shooter, Adventure, Puzzle, Racing, Sports)
- **Filtering & sorting** — Filter by genre, section (All / New / Top / Genres), and sort by relevance, name, release date, popularity, or average rating — all driven by URL search params with no client state
- **Game detail pages** — Per-game pages with cover art, rating, description, user reviews, and a recommended game
- **Responsive sidebar** — Collapsible sidebar with genre navigation, secondary links, and user info
- **Dynamic pricing** — Prices computed per game from genre base prices and recency/parity adjustments

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn-style primitives + Base UI (`@base-ui/react`) |
| Icons | Lucide React |
| Notifications | Sonner |
| Forms | React Hook Form + Zod |
| Package manager | pnpm |

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root shell — sidebar provider, fonts, toaster
  page.tsx              # Main catalog/home page
  games/[id]/page.tsx   # Game detail page
  dashboard/page.tsx    # Stub (not in use)

components/             # React components
  app-sidebar.tsx       # Sidebar composition (client component)
  nav-main.tsx          # Primary nav items
  nav-secondary.tsx     # Secondary nav items
  nav-user.tsx          # User footer in sidebar
  game-deck-controls.tsx
  ui/                   # Reusable UI primitives

constants/              # All app data (no external API)
  catalog.ts            # Game type, games array, genres, sort options, pricing
  reviews.ts            # Review type and deterministic review generator
  sidebar.tsx           # Sidebar data and genre icon maps

hooks/
  use-mobile.ts         # Mobile breakpoint hook

lib/
  utils.ts              # cn() class merging utility
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Lint
pnpm lint

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## URL-Based State

Filtering and sorting use URL search params — no React client state:

| Param | Values |
|---|---|
| `section` | `all`, `new`, `top`, `genres` |
| `genre` | `Action`, `Strategy`, `RPG`, `Shooter`, `Adventure`, `Puzzle`, `Racing`, `Sports` |
| `sort` | `relevance`, `date-added`, `name`, `release-date`, `popularity`, `average-rating` |

## Data

All data lives in `constants/` — there is no external API or database. Game images are served from `https://picsum.photos` using stable seeds (`crosshoc-{id}`).
