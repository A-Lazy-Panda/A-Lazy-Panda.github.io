# Deploying

The site builds to static HTML, so it can be hosted anywhere. The recommended home is a **GitHub Pages user site** at `https://shivanshpandey.github.io` — free, permanent, and independent of any employer or university.

## Option A — GitHub Pages (recommended)

You're already signed in to the `gh` CLI, so from the project folder:

```bash
# 1. create the repo (must be named <your-username>.github.io for a user site)
gh repo create shivanshpandey.github.io --public --source=. --remote=origin --push
```

If your GitHub username isn't `shivanshpandey`, use `<username>.github.io` instead and update `site:` in `astro.config.mjs` to match.

```bash
# 2. turn on Pages with GitHub Actions as the source
gh api -X POST repos/{owner}/shivanshpandey.github.io/pages \
  -f build_type=workflow 2>/dev/null || \
echo "If that failed: repo Settings → Pages → Build and deployment → Source: GitHub Actions"
```

The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`. First deploy takes ~1–2 minutes; the URL is `https://<username>.github.io`.

To update the site later:

```bash
git add -A && git commit -m "update" && git push
```

## Custom domain (optional, later)

1. Buy a domain (e.g. `shivpandey.com`).
2. Add a `public/CNAME` file containing just the domain.
3. In your DNS, add the four GitHub Pages `A` records (185.199.108–111.153) and a `CNAME` for `www` → `<username>.github.io`.
4. Set `site:` in `astro.config.mjs` to `https://yourdomain.com`.
5. Repo Settings → Pages → set the custom domain and enable HTTPS.

## Option B — Netlify / Vercel

Import the repo; build command `npm run build`, publish directory `dist`. No config change needed.

## Option C — any static host (SRCF, S3, etc.)

`npm run build`, then upload the contents of `dist/` to the web root. Because the site uses root-relative paths and no external dependencies, it works as-is.

## Before you publish — checklist

- [ ] Set your real GitHub and LinkedIn URLs in `src/consts.ts` (currently placeholders).
- [ ] Decide on the two draft pitches: `DUOL` (confirm your role / team's OK) and `GRMN` (confirm you're cleared to share Rothschild work). Set `status: published` and add the `pdf:` when ready.
- [ ] Add your own compiled notes to the papers in `src/content/notes/` (your work only — no textbooks/handouts).
- [ ] Skim each pitch write-up: I drafted them from your own summaries, but you own the final word on every number.
