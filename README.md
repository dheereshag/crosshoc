# Crosshoc: Game Discovery & Catalog Platform

Crosshoc is a modern, responsive web application for game discovery and catalog browsing. Built on Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4, it features a dynamic game selection catalog with support for filtering, sorting, game details viewing, and a mock game leasing system ("My Deck").

Currently, the application runs entirely client-side using static data sources and URL-based state management, but it includes comprehensive blueprints for a database-backed, production-ready backend migration.

---

## 🎯 What the Project is About

At its core, **Crosshoc** is designed to simulate a digital game rental or leasing store. Users can browse a curated selection of games across multiple genres, look at game descriptions and screenshots, read community reviews, and add games to their personal "Deck" under flexible leasing arrangements (from 1 to 12 months with various volume options).

### Key Features

1. **Dynamic Catalog & Navigation**:
   - Collapsible sidebar categorized by new releases, top games, and genres (Action, RPG, Strategy, Shooter, Adventure, Puzzle, Racing, Sports, etc.).
   - Responsive UI that seamlessly adjusts to desktop and mobile layouts.
2. **URL-Based State Management**:
   - Filtering and sorting states are completely driven by URL query parameters (e.g., `?section=new`, `?genre=Action`, `?sort=popularity`). This ensures bookmarks, sharing, and navigation history work perfectly without relying on complex client-side state managers.
3. **Advanced Sorting and Shuffling**:
   - Implements a deterministic pseudo-shuffle algorithm (`((id * 37) % 101)`) to avoid displaying games in simple database insertion order on the home page.
   - Support for multiple sorting modes: Relevance, Date added, Name, Release date, Popularity, and Average rating.
4. **Interactive Detail Pages**:
   - High-fidelity image gallery showcasing game screenshots.
   - Comprehensive metadata block (average rating, release year, genre badges).
   - Smart recommendation engine that dynamically suggests similar games based on shared genres and ratings.
   - Simulated user reviews generated dynamically from templates.
5. **Interactive Deck Simulator**:
   - Allows users to select a lease duration (1, 3, 6, or 12 months) and the number of copies (1 to 9).
   - Computes real-time price estimates based on genre baseline prices, game recency adjustments, parity logic, and bulk lease discounts.

---

## 🏗️ Architecture & Project Structure

The project follows a standard Next.js App Router structure:

```
app/                    # Next.js App Router pages
  globals.css           # Global stylesheet using Tailwind CSS v4
  layout.tsx            # Root shell — sidebar provider, fonts, and notification toaster
  page.tsx              # Main catalog/home page (handles URL-based filters)
  games/[id]/page.tsx   # Dynamic game detail page (displays reviews, recommendations, & deck controls)
  dashboard/page.tsx    # Null stub (placeholder)

components/             # UI Components
  app-sidebar.tsx       # Collapsible side navigation layout
  filter-bar.tsx        # Filter selection controls (linked to URL query parameters)
  game-card.tsx         # Catalog card component representing a single game
  game-card-image.tsx   # Handles lazy loading and aspect ratios for game cards
  game-deck-controls.tsx# Lease period and copy selection interface for renting
  game-image-gallery.tsx# screenshot browser gallery for detail pages
  genre-badge.tsx       # visual tag representing a game genre
  nav-main.tsx          # primary navigation items inside the sidebar
  nav-secondary.tsx     # secondary links (Support, Feedback)
  nav-user.tsx          # user account footer card
  star-rating.tsx       # custom star rendering logic for game ratings
  ui/                   # Reusable shadcn/Base UI style primitives

constants/              # Data Layer (Static mock stores)
  catalog.ts            # Master game array, pricing variables, and genres
  reviews.ts            # User reviews metadata template and helper functions
  sidebar.tsx           # Navigation arrays and Lucide React icon maps

hooks/                  # Custom React hooks
  use-mobile.ts         # Handles sidebar breakpoints dynamically

lib/                    # Utilities and helper libraries
  catalog-utils.ts      # Functions for visible games logic (sorting, filtering, sectioning)
  utils.ts              # cn() style merger, URL builder, and pluralization helper
```

---

## 💾 Pricing & Business Logic Formulas

Currently, all pricing calculations are computed dynamically on the frontend via helper functions in `constants/catalog.ts` and `components/game-deck-controls.tsx`.

### 1. Base Price Calculation

The baseline monthly price of renting a game is calculated using the following formula:
$$\text{Base Price} = \max\left(12,\; \lfloor (\text{GenrePrice} + \text{RecencyAdjustment} + \text{ParityAdjustment}) \times 0.35 \rfloor\right)$$

- **Genre Prices**: RPG (`$69`), Action/Shooter/Sports (`$59`), Racing (`$54`), Strategy/Simulation (`$49`), Adventure (`$44`), Platformer (`$39`), Puzzle/Arcade (`$29`), Indie (`$24`), Casual (`$19`).
- **Recency Adjustment**: `$0` if released in the current year (`2025`/`2026`), else `-$8`.
- **Parity Adjustment**: `+$2` if `game.id % 2 === 0`, else `$0`.
- **Floor**: The absolute minimum monthly base price is capped at **`$12`**.

### 2. Lease Duration & Estimations

Longer renting periods qualify for bulk discounts:

- **1 Month**: No discount (multiplier = `1.0`)
- **3 Months**: 5% discount (multiplier = `0.95`)
- **6 Months**: 10% discount (multiplier = `0.90`)
- **12 Months**: 15% discount (multiplier = `0.85`)

The total price estimation:
$$\text{Total Price} = \max(12, \text{round}(\text{Base Price} \times \text{Months} \times \text{Discount})) \times \text{Copies}$$

---

## 🚀 Future Roadmap: Backend Migration

As documented in `BACKEND_REQUIREMENTS.md`, the platform is primed for a database and API backend migration:

1. **Database Schema**: A relational PostgreSQL DB design mapping out `users`, `genres`, `games`, `game_screenshots`, `game_genres` (many-to-many), `reviews`, and `deck_leases`.
2. **Billing Integration**: Real-time integration with Stripe Billing, recalculating pricing securely on the server-side to guarantee billing integrity.
3. **REST API Endpoints**:
   - Auth: `/api/auth/login`, `/api/auth/me`
   - Catalog: `/api/games`, `/api/games/:id`
   - Reviews: `/api/games/:id/reviews` (GET and POST)
   - Deck Leases: `/api/deck` (GET and POST)

---

## 🎙️ Interview Cheat Sheet / Q&A

This section is structured to help you answer technical, architectural, and design questions about this project in an interview setting.

#### 1. State Management: _"Why did you use URL search parameters instead of a state manager (Redux, Context, Zustand)?"_

- **Answer**: We chose URL-based state management (`?section`, `?genre`, `?sort`) for three main reasons:
  - **Shareability & Bookmarking**: Every state (e.g., "Top Action Games sorted by Rating") is represented by a unique URL. If a user bookmarks or shares the link, another user sees the exact same filtered state.
  - **Server-Side Rendering (SSR) Optimization**: Since the state is in the URL, Next.js Server Components can read these search parameters at request time, filter the static data on the server, and deliver fully rendered HTML to the client. This improves SEO and eliminates layout shifts.
  - **Simplifying Client State**: We didn't need to write boilerplate code for providers, actions, or client-side context hooks. It keeps the UI declarative and highly performant.

#### 2. Performance: _"What is that deterministic shuffle logic on the homepage, and why not use `Math.random()`?"_

- **Answer**: We use the formula `((id * 37) % 101)` to pseudo-shuffle games.
  - **Why not Math.random()**: A standard random sort (e.g., `.sort(() => Math.random() - 0.5)`) executes on every render/hydration, causing mismatch errors between server-rendered HTML and client-rendered UI. It also makes pagination impossible because games would shift positions randomly on subsequent pages.
  - **Benefit**: This formula is completely deterministic. It ensures that the catalog is displayed in a non-sequential, interesting order, yet stays perfectly consistent across server renders, client hydration, and page refreshes.

#### 3. Security & Billing: _"How do you prevent users from tampering with lease prices since the client calculates them?"_

- **Answer**: The frontend calculates estimates for user UX/feedback (in `GameDeckControls`). However, in a production migration, we follow the **Billing Integrity** principle:
  - **Strict Server-Side Valuation**: The client only sends the `gameId`, `leasePeriod` (months), and `copies` to the `/api/deck` endpoint.
  - **Re-computation on Server**: The backend retrieves the authoritative base price of the game from the database, applies the discount multiplier corresponding to the lease period, calculates the final amount, and processes the transaction. We never trust any price sent by the client.

#### 4. Architecture: _"Why did you structure pages as Server Components and leaf components as Client Components?"_

- **Answer**: We followed standard Next.js performance patterns:
  - **Server Components (Pages)**: `app/page.tsx` and `app/games/[id]/page.tsx` are server components. They handle parameter resolution, filter static lists, and construct recommendations on the server. This reduces client-side bundle size.
  - **Client Components (Interactive Leaves)**: Components requiring interactive React hook state or browser APIs (like `GameDeckControls` using `react-hook-form` / `zod`, and `AppSidebar` using collapsible states) are marked with `"use client"`. This maximizes search engine indexability and page loading speed.

#### 5. Algorithm: _"Explain the Recommendation Engine. How does it scale?"_

- **Answer**:
  - **Current Logic**: It filters out the current game, looks for candidates sharing at least one genre, sorts them by rating descending, and picks the top one. If no candidate shares a genre, it falls back to the overall top-rated game.
  - **Scaling to Millions of Games**: In a real production system, running an in-memory filter and sort on every request would be slow. We would optimize this by:
    1. Implementing **database indexing** on `rating` and a GIN index on genres.
    2. Using a caching layer (like Redis) to store recommended game IDs for each game.
    3. Moving to vector search (using PostgreSQL with `pgvector`) if recommendation criteria became more complex (e.g. based on user behavior embeddings).

#### 6. Database: _"Explain the relationship design of your database schema."_

- **Answer**: The database schema in `BACKEND_REQUIREMENTS.md` uses a clean relational structure:
  - **Many-to-Many**: `games` and `genres` are linked via `game_genres` composite key table.
  - **One-to-Many**: `games` has many `game_screenshots`, `reviews`, and `deck_leases`.
  - **User relations**: `users` create `deck_leases` and write `reviews`. This layout preserves referential integrity (e.g., using `ON DELETE CASCADE` for screenshots/reviews when a game is deleted) and supports efficient SQL joins.

---

## 🛠️ Getting Started

To get the application up and running locally, run:

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Run linting check
pnpm lint

# Build production distribution
pnpm build

# Run production build
pnpm start
```
