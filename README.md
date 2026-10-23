# Oppussingsplan – rekkehus 1961

Et lite, statisk planleggingsverktøy for oppussing av et rekkehus fra 1961 i Trondheim
(140 m² over kjeller, 1. og 2. etasje). Kjøpet er ikke gjennomført ennå (bud inne), og
oppussingsrammen er antatt til 1,2 MNOK.

Siden har tre faner:

- **Tidslinje** – Gantt-diagram med én stolpe per oppgave på en ukeakse, der uke 0 er overtakelsen.
  Stolpene kan dras (flyttes) og strekkes i begge ender med mus, touch eller tastatur
  (piltaster flytter, Shift + piltaster endrer varighet, Enter åpner redigering).
  Avhengigheter tegnes som linjer, og en oppgave som starter før forgjengeren er ferdig får rød kant
  og rød linje. En rød linje markerer i dag.
- **Budsjett** – tiltak med lav, typisk og høy pris og kilde. «Valgt» kan redigeres og summeres,
  med påslag for uforutsett (standard 20 %) og sammenligning mot rammen (standard 1 200 000 kr).
  Gruppen «Senere» er ikke med i summen før du huker den av.
- **Oppgaver** – liste per fase der status kan hukes av. Filteret «Hva må gjøres nå» viser uferdige
  oppgaver som starter innen fire uker fra dagens dato, inkludert de som skulle ha startet allerede.

Overtakelsesdatoen settes øverst på siden. Alle datoer regnes ut fra den.

Ingen byggesteg, ingen rammeverk og ingen eksterne avhengigheter: ren HTML, CSS og JavaScript.

## Forutsetninger i startplanen

- Huset står tomt i uke 0–12 mens rør, el, bad og kjøkken gjøres. «Tidligst innflytting» ligger i uke 12, og «Alt ferdig» i uke 18.
- Rørlegger og elektriker gjør jobben i ett samlet anbud.
- Oppussingsrammen er 1,2 MNOK. Hvis bad og rør sprenger rammen, er det kjøkkenet som skyves.

## Filer

| Fil | Innhold |
| --- | --- |
| `index.html` | Hele siden, inkludert CSS og JavaScript |
| `data/tidslinje.json` | Faser, oppgaver og standard overtakelsesdato |
| `data/budsjett.json` | Budsjettposter, ramme og påslag for uforutsett |
| `data/tidslinje.js`, `data/budsjett.js` | Genererte kopier av JSON-filene (se under) |
| `scripts/sync-data.sh` | Lager `.js`-filene fra `.json`-filene |

## Hvordan dataene lagres

1. Siden laster `data/*.json` med `fetch`.
2. Hvis det feiler – typisk når `index.html` åpnes direkte fra disk (`file://`) – lastes
   `data/*.js`, som inneholder nøyaktig samme data som `window.__DATA`.
3. Endringer du gjør i nettleseren (flytte stolper, endre status, endre budsjett) lagres i
   nettleserens `localStorage` og overstyrer filene. De er altså bare synlige i den nettleseren.
   Statuslinjen under verktøylinjen viser om du ser lokale endringer eller data fra fil.
4. **Tilbakestill til fil** forkaster de lokale endringene og laster filen på nytt.
5. **Eksporter JSON** laster ned dataene i samme format som filene i `data/`. **Importer JSON**
   leser en slik fil inn igjen. Slik flytter du endringer mellom enheter, eller gjør dem permanente.

## Redigere data

Rediger `data/tidslinje.json` eller `data/budsjett.json` i en teksteditor, og kjør deretter:

```sh
./scripts/sync-data.sh
```

Skriptet sjekker at JSON-en er gyldig (med `python3` hvis det finnes) og skriver `data/tidslinje.js`
og `data/budsjett.js` på nytt. Rediger aldri `.js`-filene for hånd. Glemmer du å kjøre skriptet,
virker siden fortsatt på GitHub Pages, men den kan vise gamle data når den åpnes som fil.

For å gjøre endringer fra nettleseren permanente: trykk **Eksporter JSON**, erstatt filen i `data/`
med den nedlastede filen (gi den navnet `tidslinje.json` eller `budsjett.json`), kjør skriptet og
trykk **Tilbakestill til fil**.

Husk at nettleseren viser lokale endringer foran filen. Har du endret filen og ikke ser endringen,
trykk **Tilbakestill til fil**.

### Tidslinje (`data/tidslinje.json`)

```json
{
  "overtakelse": "2027-01-04",
  "faser": [{ "id": "bad", "navn": "Bad" }],
  "oppgaver": [
    {
      "id": "t20",
      "navn": "Bad: vegger, gulv med fall og sluk",
      "fase": "bad",
      "startUke": 4,
      "varighetUker": 2,
      "avhengerAv": ["t12", "t13"],
      "ansvarlig": "tømrer",
      "status": "planlagt",
      "notat": ""
    }
  ]
}
```

- `startUke` regnes fra overtakelsen (uke 0). Negative tall er uker før overtakelse.
- `status` er `planlagt`, `pågår` eller `ferdig`.
- `avhengerAv` er en liste med id-er til oppgaver som må være ferdige før denne starter.
- Fasene får farge etter rekkefølgen i listen (opptil åtte farger). En fase med `"senere": true`
  kan skjules i tidslinjen med «Vis «Senere»».
- `overtakelse` er standarddatoen. Datoen du velger på siden, lagres i nettleseren og går foran.
- `ansvarlige` er forslagene som vises i redigeringsdialogen.

### Budsjett (`data/budsjett.json`)

- `ramme` og `uforutsettProsent` er standardverdier.
- Hver post har `id`, `gruppe`, `tiltak`, `lav`, `typisk`, `hoy`, `valgt`, `medISum`, `kilde`
  (liste) og `notat`. Bruk `null` for ukjente beløp.
- Beløp er i NOK inkl. mva, prisnivå 2026.

## Publisere på GitHub Pages

1. Opprett et repository på GitHub og legg inn filene i denne mappen.
   `.gitignore` holder `document.pdf` (selgers personopplysninger) og `.DS_Store` utenfor.
   Sjekk med `git status` før første commit at `document.pdf` ikke er med.
2. Push til grenen `main`.
3. Gå til **Settings → Pages**, velg **Deploy from a branch**, grenen **main** og mappen
   **/ (root)**, og lagre.
4. Etter et minutt eller to ligger siden på `https://<brukernavn>.github.io/<repo>/`.

Alle stier er relative, så siden virker både fra rotmappen og fra en undermappe.
Siden har `noindex`, men et offentlig repository og en offentlig Pages-side kan likevel leses av
alle som har lenken. Lokale endringer i nettleseren publiseres ikke.

## Kjøre lokalt

```sh
python3 -m http.server
```

Åpne <http://localhost:8000/>. Du kan også åpne `index.html` direkte. Da brukes `data/*.js`.
