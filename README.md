# Ascent

Guided learning paths from first encounters to expert level. Planned home: https://wasiulbahar.com/ascent/

## Folders

| Folder | What it holds |
|---|---|
| `index.html`, `styles.css`, `src/` | The web app (plain HTML, CSS and JavaScript modules, no build step) |
| `paths/` | One Markdown file per path. The app reads these directly; editing a path means editing its file. |
| `media/` | Images used in paths, with sources in `media/CREDITS.md` |
| `docs/` | The rules every path follows (`depth-framework.md`, `discipline-templates.md`) |
| `supabase/schema.sql` | The database: accounts, progress, quizzes, reports, reviews |
| `review/` | The review page for editors and experts |
| `mockup/` | The clickable design mockup |

## Run it locally

```
python -m http.server 8796
```

Then open http://localhost:8796/.

## Switch on accounts (email-link sign-in)

1. Create a free project at supabase.com.
2. In the SQL editor, run `supabase/schema.sql`.
3. Under Authentication > URL Configuration, set the Site URL to `https://wasiulbahar.com/ascent/` and add `http://localhost:8796/` to the redirect URLs.
4. Copy the Project URL and the anon public key into `src/config.js`.
5. Sign in once, then make yourself admin with the line at the end of `schema.sql`.

## Releasing

Bump the `?v=N` on the script and stylesheet links in `index.html` and on the imports in `src/app.js`, so browsers don't mix old and new files.

## Adding a path

1. Write `paths/<slug>.md` following `docs/depth-framework.md`.
2. Add one line to `src/paths.js`.
