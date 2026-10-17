# Portfolio van Ivan de Jong

De broncode van mijn persoonlijke portfolio op [ivandejong.nl](https://ivandejong.nl). De website geeft een korte introductie en toont een selectie van projecten waaraan ik werk.

## Functionaliteit

- Responsive portfolio voor desktop en mobiel
- Projectoverzicht dat automatisch op jaar wordt gesorteerd
- Links naar LinkedIn en GitHub
- Zelfstandige privacypagina voor mijn Sudoku-app

## Gebouwd met

- Angular 20
- TypeScript
- HTML en CSS
- Cloudflare Workers met Static Assets

## Lokaal ontwikkelen

Voor dit project is Node.js 22.12 of nieuwer nodig.

```powershell
npm install
npm start
```

De ontwikkelserver is daarna beschikbaar op `http://localhost:4200`.

## Productiebuild

```powershell
npm run build
```

De gebouwde website komt in `dist/portfolio/browser/` te staan. Met `npm run deploy` kan de productiebuild via Wrangler naar Cloudflare Workers worden gepubliceerd.

## Projectstructuur

- `src/app/` bevat de Angular-component en projectgegevens.
- `src/styles.css` bevat de globale vormgeving.
- `public/images/` bevat het portret en de projectillustraties.
- `public/sudoku-privacy.html` bevat het privacybeleid van de Sudoku-app.

Projecten worden beheerd in `src/app/projects.ts`. Elk project bevat onder andere een titel, jaar, beschrijving, afbeelding en tags. De website sorteert deze projecten automatisch met het nieuwste jaar vooraan.
