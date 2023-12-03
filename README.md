<div align="center">
  <h1>Advanced Scryfall</h1>
  <img src="public/banner.png" alt="screenshot of the advanced search form"/>
</div>

## Table of Contents

- [Usage](#usage)
- [Development](#dev)
- [Tech Docs](#tech)
- [Contributing](#contributing)

## Usage <a name="usage"></a>

1. Download the zip from Releases.
2. Unzip the extension.
3. Load Extension in Chrome.
   1. Open - Chrome browser.
   2. Access - chrome://extensions.
   3. Tick - Developer mode.
   4. Find - Load unpacked extension.
   5. Choose the folder you unpacked.

## Development <a name="dev"></a>

1. Clone this repository.
2. Run `pnpm i` or `npm i` (if using npm, delete pnpm-lock.yaml first).
3. Run `yarn dev` or `npm run dev`.
4. Load Extension in Chrome.
   1. Open - Chrome browser.
   2. Access - chrome://extensions.
   3. Tick - Developer mode.
   4. Find - Load unpacked extension.
   5. Select - `dist` folder in this project (after dev or build).
5. If you want to build in production, Just run `pnpm build` or `npm run build`.

## Tech Docs <a name="tech"></a>

- [Vite](https://vitejs.dev/)
- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [Chrome Extension with manifest 3](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [@crxjs/vite-plugin](https://crxjs.dev/vite-plugin)
- [Tailwind CSS](https://tailwindcss.com/docs/configuration)

## Contributing <a name="contributing"></a>

Feel free to open PRs or raise issues!
