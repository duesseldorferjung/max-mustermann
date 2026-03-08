
# Max Mustermann – Portfolio (Design v2, Light/Dark)

Neue, leichte Portfolio‑Vorlage mit Light/Dark‑Toggle, Services‑Sektion und klarer Typografie.

## Inhalte anpassen
- `index.html`: Texte, E‑Mail, Social‑Links, Projektkarten
- `assets/hero.jpg`, `assets/profile.jpg`, `assets/thumb-*.jpg`: Bilder ersetzen
- `assets/lebenslauf.pdf`: optionaler Lebenslauf

## Warum funktioniert das gut auf GitHub Pages?
- **Relative Pfade** (z. B. `styles.css`, `assets/...`) – wichtig für Projekt‑Seiten unter
  `https://USER.github.io/REPO/`.
- Kein Build‑Step, keine Abhängigkeiten – einfach hochladen.

## Veröffentlichung ohne Git (Browser‑Upload)
1. Neues öffentliches Repo erstellen (z. B. `max-portfolio`)
2. **Add file → Upload files** und *Inhalt des entpackten Ordners* hochladen
3. **Settings → Pages → Deploy from a branch → main / (root)**
4. Warten (30–120 s) → Seite unter `https://USER.github.io/REPO/`

## Entwicklungshinweise
- Farben/Theme via CSS‑Variablen in `styles.css`
- Dark‑Mode via `data-theme="dark"` am `<html>` Root
- Barrierefreiheit: sichtbare Fokus‑Ringe, semantische Struktur
