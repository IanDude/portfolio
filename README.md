# Portfolio (Dark/Techy — HTML/CSS/JS)

Plain static site — no build step needed.

## Preview locally
Open `index.html` directly in your browser, or run:
```
python3 -m http.server 8000
```
Then visit http://localhost:8000

## Deploy to GitHub Pages
1. Create a new GitHub repo.
2. Push these files to it.
3. Settings → Pages → source = `main` branch, root folder.
4. Live at `https://your-username.github.io/repo-name`.

## To customize
- Edit text directly in `index.html`.
- Replace `[ dates ]` under Worldbex with your actual dates.
- Add your real LinkedIn URL (currently `#`).
- Add your D-Crypt Battle demo and source code links (currently `#`).
- Swap the `[ screenshot.png ]` placeholder in `.project-thumb` for a real `<img>`.
- Add a `resume.pdf` file in this folder so the "$ ./resume.pdf" link works.
- Add a `profile.jpg` (or `.png`) file in this folder for your hero photo. If it's missing, a glowing "[ photo ]" placeholder shows automatically instead.

## Theme notes
- Built around a terminal aesthetic: monospace throughout, a fake terminal
  window in the hero (`whoami` / `cat role.txt`), bracket accents (`<tag/>`)
  on headings, and a soft green glow (`--accent-glow`) on interactive elements.
- All theme colors are CSS variables at the top of `style.css` — change
  `--accent` to restyle the whole glow color in one place (e.g. swap green
  for cyan or purple if you want a different techy feel).
- Respects `prefers-reduced-motion` (disables the blinking cursor) for
  accessibility.
