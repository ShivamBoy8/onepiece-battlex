# 🏴‍☠️ One Piece BattleX

A One Piece themed card-drafting battle game built with React. Draft characters and power cards across 5 rounds, build synergies, and outscore the computer to claim the seas.

**[Play it live → https://onepiece-battlex.vercel.app/ ] **

---

## What it does

You and the computer take turns drafting from a shuffled pool of 51 characters and 27 power cards over 5 rounds. Characters carry raw stats (strength, haki, devil fruit, speed, stamina, mind). Power cards add flat bonuses and synergy bonuses when paired with the right character. Special cards trigger unique abilities — swapping cards, draining enemy score, removing the enemy's weakest card, or skipping their turn entirely.

Highest total bounty after 5 rounds wins.

## Features

- **5-round draft system** with 6 random cards per round
- **Synergy mechanics** — power cards and characters boost each other when paired correctly
- **7 special card abilities**, each with its own custom hook:
  - 🌀 ROOM — swaps your weakest card with a random enemy card
  - 🌑 Dark Gravity Pull — drains 15% of enemy score
  - 👻 Soul Pocus — bleeds enemy score 1% every 2 seconds
  - 🤖 Franky's Cola — removes the enemy's weakest card
  - 🤝 Yonko Alliance Pact — bonus score for Emperor synergy
  - ☠️ SAD Gas Cloud — drains score scaled to enemy card count
  - 🎸 Soul King Concert — skips the enemy's next turn
- **Special card effect previews** — special cards in the catalog show a dedicated effect image, expandable full-screen on click, illustrating what the card does
- **Background music + result-specific win/lose audio**
- **Full card catalog** browsable separately from gameplay

## Tech stack

- React + Vite
- React Router v6
- Tailwind CSS
- Vitest + React Testing Library for unit/integration testing

## Testing

This project has a real test suite, not just a token one:

- **Pure logic tests** — scoring math, synergy calculation, drain percentages
- **Mocked dependency tests** — verifying hooks call each other correctly without running real timers/state
- **Fake timer tests** — `useSoulDrain`'s `setInterval`-based drain effect, tested with `vi.useFakeTimers()`
- **Integration tests** — `useCardSelect` tested end-to-end with all 7 special-effect hooks mocked, covering full game flow including round progression and game-over detection

Run tests:
```bash
npm install
npx vitest run
```

## Running locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Performance notes

Production assets were optimized before deployment — converted oversized PNG card art to WebP and recompressed audio bitrates, reducing total build size from ~110MB to ~21MB (an 81% reduction) for faster load times.

## Known limitations

- The computer opponent currently picks randomly from the visible card pool rather than using a scoring heuristic — a deliberate simplicity tradeoff to keep games fast and unpredictable rather than optimal
- No persistent match history (no backend/localStorage)

---

*Fan-made project. Not affiliated with Toei Animation or Eiichiro Oda.*
