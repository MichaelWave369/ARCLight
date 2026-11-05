# Creative and Interactive Roadmap

## Rung 1 — Foundation (this PR)
- [x] Story bible, continuity ledger and season-one outline
- [x] The Vitalizer / PHB technology constraints
- [x] An original pilot cold open inspired by the cliffside dream
- [x] Responsive React lore portal with Story / Crew / Chronicle / 33 Decks / Archive
- [x] GitHub Pages build/deploy workflow and basic lore tests

## Rung 2A — Cinematic Visual Foundation
- [x] Original source-editable vector designs for Ori, the Vitalizer, the Sentinel, and ARCLight
- [x] Five-scene cinematic prologue and concept vault
- [x] Opt-in playback, manual navigation, keyboard controls, reduced-motion mode
- [x] Design language and continuity-aware art notes
- [x] Scene data regression tests

## Rung 2B — The Living Bible
- [ ] Editable structured lore records with versioning / change history
- [ ] Character relationship network and timeline cross-references
- [ ] Distinguish core canon from speculation across every page
- [ ] Searchable location, vessel, technology and episode indexes
- [ ] Accessibility review and improved keyboard/focus navigation

## Rung 3 — The Habitat
- [ ] Detailed, internally consistent 33-deck architectural model
- [ ] Rotatable 3D ship or readable deck schematics with accessible fallback
- [ ] Energy, life support, population and propulsion assumptions
- [ ] Separate spoiler-safe reader mode from private writer notes

## Rung 4 — Story Production
- [ ] Writers room board, episode beat sheets and scene tracker
- [ ] Script format exports and printable show bible
- [ ] Original key art, soundtrack concepts and animatics
- [ ] Season continuity checklist / spoiler guardrails

## Deployment setup

The included GitHub Actions workflow builds the Vite app and attempts to deploy to GitHub Pages on main. In repository Settings → Pages, set **Build and deployment → Source: GitHub Actions**. Pages deployments may not work until Pages is enabled for the repository.

Expected URL after successful deployment:
https://michaelwave369.github.io/ARCLight/

## Development

```sh
npm install
npm test
npm run dev
npm run build
```

The project is intentionally dependency-light. React, Vite and CSS handle the first prototype. No proprietary assets or backend are required.
