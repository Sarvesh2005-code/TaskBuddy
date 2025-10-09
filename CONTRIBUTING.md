# Contributing to TaskBuddy

## Roles
- Sarvesh: PM, Frontend, Testing
- Bhushan: UI/UX, Backend

## Branching
- `develop` is integration; `main` is stable
- V2 branches: `frontend/v2/*`, `backend/v2/*`, `docs/v2/*`

## Commit Format
- Frontend[Sarvesh]: short description
- Backend[Bhushan]: short description
- Docs[Sarvesh]: short description
- Testing[Sarvesh]: short description

## Pull Requests
- Target `develop`
- Request a reviewer from the other role
- CI must pass (FE build, BE sanity-check)
- Fill PR template and confirm local run

## Coding Guidelines
- Keep MVP simple; no auth or complex infra
- Frontend: localStorage persistence, native DnD
- Backend: small Express utilities only

