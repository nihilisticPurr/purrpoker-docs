# Purr Poker Documentation Replica

A static Next.js documentation site rebuilt from the publicly accessible `docs.purrpoker.xyz` pages.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a new GitHub repository and push this folder.
2. Import the repo into Vercel.
3. Set the production domain to `docs.purrpoker.xyz`.
4. Update DNS in your domain registrar:
   - `docs` CNAME → `cname.vercel-dns.com`

## Notes

- This is not a GitBook export; it is a clean static replica.
- Images from the original GitBook were replaced with styled placeholders.
- Review the Legal & Compliance page with counsel before publishing.
