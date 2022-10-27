# Prerequisites

Run MongoDB in Docker

```
docker-compose -f docker-compose.yml up --force-recreate --build
```

Rename `.env.example` to `.env`

# 4Dev

```
npm i
npm run dev
```

# 4Prod

To build:

```
npm i
npm run build
```

To run:

```
npm run i-prod
npm start
```
