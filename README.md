# Website van Ivan de Jong

Nederlandstalige portfolio, gebouwd met Angular.

## Lokaal starten

Installeer een actuele Node.js LTS-versie en voer daarna uit:

```powershell
npm install
npm start
```

De productiebuild wordt gemaakt met `npm run build` en komt onder `dist/` te staan.

## Project toevoegen

Alle projecten staan in `src/app/projects.ts`. Voeg aan de `PROJECTS`-lijst één object toe met een unieke `id`, `year`, type, titel, beschrijving, afbeelding, alternatieve tekst en tags. Een optionele `link` kan bijvoorbeeld naar een projectpagina of privacybeleid verwijzen.

De component sorteert automatisch op `year`, met het nieuwste project vooraan. De plaats van een object in het bestand heeft dus geen invloed op de weergave. Projectafbeeldingen staan in `public/images/`; plaats een nieuw beeld daar en gebruik in het projectobject een pad zoals `images/mijn-project.webp`.

## Projectafbeeldingen

De drie tijdelijke illustraties staan in `public/images/`. Vervang ze door je eigen beelden en werk het `image`- en `imageAlt`-veld in `src/app/projects.ts` bij.

## Privacybeleid Sudoku

Het openbare privacybeleid staat op `public/sudoku-privacy.html` en wordt door Angular als zelfstandig bestand gepubliceerd. Gebruik de uiteindelijke publieke HTTPS-URL zowel in de app als in de appstore-vermelding. De Unity-app staat buiten deze website-werkruimte (`C:\Users\ivan-\SudokuApp`) en is hier **niet** aangepast. Voeg in het hoofdmenu van die app een knop **Privacybeleid** toe die de gepubliceerde URL met `Application.OpenURL` opent, of toon dezelfde beleidstekst rechtstreeks in de app. Test de knop op het doelplatform.

Controleer voor publicatie of het privacybeleid overeenkomt met alle SDK's en diensten in de definitieve Unity-build (zoals analytics of advertenties); werk de tekst en de gegevensverklaring van de appstore bij wanneer die veranderen. De huidige contactroute is LinkedIn; voeg desgewenst een rechtstreeks bereikbaar privacycontact toe.
