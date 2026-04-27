# Coach Serges — Site premium + application métier coach sportif

Ce dépôt contient le socle initial du projet **Coach Serges**.

Objectif : créer un site internet professionnel pour un coach sportif indépendant avec une vitrine premium, un espace d’inscription, une connexion email/mot de passe et sociale, un espace client, un cockpit coach / super administrateur, un calendrier, une messagerie interne, des actualités, des événements, des programmes de coaching et une base de données PostgreSQL.

## Fonctionnalités prévues dans ce socle

- Site public moderne.
- Pages : accueil, programmes, actualités, événements, calendrier.
- Inscription et connexion email / mot de passe.
- Préparation OAuth Google, Facebook et TikTok.
- Rôles : `CLIENT`, `COACH`, `SUPER_ADMIN`.
- Espace utilisateur.
- Cockpit coach / super administrateur.
- Messagerie interne.
- Calendrier et réservations.
- Gestion des programmes / formations.
- Base PostgreSQL via Prisma.
- Dockerfile et docker-compose pour VPS Ionos.

## Stack technique

- Next.js App Router
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM
- NextAuth
- Docker

## Installation locale

```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run seed
npm run dev
```

Puis ouvrir :

```text
http://localhost:3000
```

## Comptes de démonstration créés par le seed

```text
Coach / super admin :
coach@coach-serges.fr
CoachSerges2026!

Client :
maya@example.com
ClientSerges2026!
```

## Déploiement VPS Ionos

```bash
docker compose up -d --build
docker compose exec app npx prisma migrate deploy
docker compose exec app npm run seed
```

## Note Canvas

Le fichier `canvas/CoachSergesCanvasSafePrototype.tsx` est une version spécialement prévue pour Canvas. Elle ne dépend pas de `lucide-react` ni de `framer-motion`, afin d’éviter l’erreur de chargement CDN `cdn.jsdelivr.net/npm/lucide-react/...` visible dans la console Canvas.
