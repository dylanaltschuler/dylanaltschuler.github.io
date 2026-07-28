# Dylan Altschuler — academic website

This repository contains the source for `dylanaltschuler.github.io`.

## Publish on GitHub Pages

1. Back up or download the current `dylanaltschuler.github.io` repository.
2. Replace its contents with the contents of this folder.
3. Commit and push the changes to the repository's `main` or `master` branch.
4. In the repository on GitHub, open **Settings → Pages** and set **Source** to
   **GitHub Actions**.

The included workflow builds and publishes the site automatically. The existing
`https://dylanaltschuler.github.io` address will stay the same.

## Edit locally

Install Node.js 22 or newer, then run:

```sh
npm install
npm run dev
```

The site content and publication metadata are in `src/App.tsx`. Appearance and
mobile layout are in `src/styles.css`. After editing, run `npm run build` to
check that the production version still builds.
