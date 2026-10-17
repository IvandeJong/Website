# Website van Ivan de Jong

Nederlandstalige portfolio, gebouwd met Angular.

## Lokaal starten

Installeer een actuele Node.js LTS-versie en voer daarna uit:

```powershell
npm install
npm start
```

De productiebuild wordt gemaakt met `npm run build`. De publiceerbare bestanden komen in `dist/portfolio/browser/` te staan.

## Publiceren op Cloudflare Pages

Deze repository is voorbereid voor automatische deployments vanuit GitHub:

1. Push de wijzigingen naar de `master`-branch van `IvandeJong/Website`.
2. Open in Cloudflare **Workers & Pages** en kies **Create application → Pages → Connect to Git**.
3. Autoriseer GitHub en selecteer de repository `IvandeJong/Website`.
4. Gebruik de volgende buildinstellingen:
   - Production branch: `master`
   - Framework preset: `Angular`
   - Build command: `npm run build`
   - Build output directory: `dist/portfolio/browser`
   - Root directory: `/`
5. Voeg, als Cloudflare de versie niet automatisch uit `.nvmrc` leest, de environment variable `NODE_VERSION` met waarde `22.12.0` toe.
6. Start de eerste deployment. Cloudflare geeft eerst een tijdelijk `*.pages.dev`-adres.

### Eigen domein

Open na een geslaagde deployment het Pages-project en kies **Custom domains → Set up a custom domain**. Vul `www.ivandejong.nl` in. Kopieer daarna het toegewezen Pages-adres, bijvoorbeeld `projectnaam.pages.dev`, en maak bij de huidige DNS-provider dit record aan:

- Type: `CNAME`
- Naam/host: `www`
- Waarde/target: het toegewezen `*.pages.dev`-adres, zonder `https://` of pad

Voeg het aangepaste domein eerst in Cloudflare Pages toe en pas daarna DNS aan. Cloudflare controleert het record en verzorgt vervolgens automatisch het TLS-certificaat. DNS-propagatie kan enige tijd duren.

Een apex-domein zoals `ivandejong.nl` vereist voor Cloudflare Pages normaal Cloudflare-nameservers. Laat daarom bij de huidige provider desgewenst een permanente webforward instellen van `https://ivandejong.nl` naar `https://www.ivandejong.nl`. Als de provider geen HTTPS-forwarding ondersteunt, gebruik dan alleen het `www`-adres of verplaats later het DNS-beheer.

Na activering zijn de website en het Sudoku-privacybeleid bereikbaar via:

- `https://www.ivandejong.nl/`
- `https://www.ivandejong.nl/sudoku-privacy.html`

Cloudflare bouwt na deze koppeling iedere nieuwe push naar `master` automatisch opnieuw en publiceert de wijziging.

## Project toevoegen

Alle projecten staan in `src/app/projects.ts`. Voeg aan de `PROJECTS`-lijst één object toe met een unieke `id`, `year`, type, titel, beschrijving, afbeelding, alternatieve tekst en tags. Een optionele `link` kan bijvoorbeeld naar een projectpagina of privacybeleid verwijzen.

De component sorteert automatisch op `year`, met het nieuwste project vooraan. De plaats van een object in het bestand heeft dus geen invloed op de weergave. Projectafbeeldingen staan in `public/images/`; plaats een nieuw beeld daar en gebruik in het projectobject een pad zoals `images/mijn-project.webp`.

## Projectafbeeldingen

De drie tijdelijke illustraties staan in `public/images/`. Vervang ze door je eigen beelden en werk het `image`- en `imageAlt`-veld in `src/app/projects.ts` bij.

## Privacybeleid Sudoku

Het openbare privacybeleid staat op `public/sudoku-privacy.html` en wordt door Angular als zelfstandig bestand gepubliceerd. Gebruik de uiteindelijke publieke HTTPS-URL zowel in de app als in de appstore-vermelding. De Unity-app staat buiten deze website-werkruimte (`C:\Users\ivan-\SudokuApp`) en is hier **niet** aangepast. Voeg in het hoofdmenu van die app een knop **Privacybeleid** toe die de gepubliceerde URL met `Application.OpenURL` opent, of toon dezelfde beleidstekst rechtstreeks in de app. Test de knop op het doelplatform.

Controleer voor publicatie of het privacybeleid overeenkomt met alle SDK's en diensten in de definitieve Unity-build (zoals analytics of advertenties); werk de tekst en de gegevensverklaring van de appstore bij wanneer die veranderen. De huidige contactroute is LinkedIn; voeg desgewenst een rechtstreeks bereikbaar privacycontact toe.
