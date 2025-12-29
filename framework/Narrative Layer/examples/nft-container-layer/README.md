# NFT Example — Container Layer

<img width="400" height="400" alt="Gemini_Generated_Image_vwd1fxvwd1fxvwd1" src="https://github.com/user-attachments/assets/9d559ee2-11ba-443e-a2fd-0443ae0247e7" />

This example defines an NFT as a **post-story existence container**.

This does a few important things:
- **Hard-locks canon** (`locked: true, canonMutable: false`)
- Enforces **only three post-story states**
- Separates **observation from authority**
- Allows unlockables **without narrative control**
- Makes revisit ≠ repeat a first-class concept (`driftSeed`)

Is compatible with:
- ERC-721
- ERC-1155
- Solana metadata
- Off-chain mirrors / viewers

---

## Concept

The NFT does not *contain the story*.

It contains:
- state
- observations
- continuity

---

## Required Metadata Concepts

- Story Boundary reference
- Existence state
- Observations
- Drift seed
- Unlockable “rooms”

---

## Viewer Rules

- always-on continuity
- interaction reveals, never directs
- no play/reset semantics

---

## Forbidden

- mutable canon
- owner-controlled outcomes
- pay-to-authority mechanics
