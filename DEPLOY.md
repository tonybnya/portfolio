# Deploying after an admin-panel edit

Projects and timelines render from static JSON (`public/data/`) that is
re-synced from the Render API on every build. Editing the admin panel only
touches MongoDB; it does **not** update the live site until you deploy.

## Steps

1. Edit projects / timelines in the admin panel (saved to MongoDB).
2. Push to `main`:

   ```sh
   git add -A && git commit -m "..." && git push
   ```

   Render auto-deploys. Its build command runs `npm run sync:data` (rewrites
   the JSON from the API) then `npm run build`.

   No commit handy? Use Render's "Manual Deploy → Clear build cache & deploy".

3. Verify the new entry made it:

   - `https://tonybnya-portfolio.onrender.com/data/projects.json`
   - `https://tonybnya-portfolio.onrender.com/data/timelines.json`

## If the build fails

`sync:data` is strict: an API outage (or non-200) fails the build instead of
shipping stale data. Fix the API first, then redeploy.

## Local preview

```sh
npm run sync:data && npm run dev
```
