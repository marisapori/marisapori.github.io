# Resume Website

A responsive personal resume site built with plain HTML, CSS and JavaScript.

## Folder structure

```
resume-site/
├── index.html      Home: intro, typing label, headshot + social links, career objective
├── skills.html     Skills: flip cards with proficiency dots
├── education.html  Education: number strip, award tiles, FSU card with tag groups
├── experience.html Experience: skill chips, Work | Leadership lanes of icon cards
├── projects.html   Projects (career portfolio): screenshot, goals & scope, my role
├── contact.html    Contact: message window with animated chat + Copy my email! pill
├── css/style.css   All styling, organised in numbered sections
├── js/main.js      Menu, fade-ins, typing label, skill chips + Open all, flip cards, chat
├── fonts/          RoxboroughCF.ttf (headline font)
├── images/         portrait.webp, skills.webp, contact.webp (framed photos)
├── favicon.svg     Browser-tab icon
├── Mariana-Neri-Sapori-Resume.pdf   File behind the "Download resume" buttons
├── content.md      Where each piece of text lives, for quick edits
└── .nojekyll       Tells GitHub Pages to serve files as-is
```

## Editing
- **Text:** edit it straight in the `.html` pages; `content.md` says which file
  and section each piece is in.
- **Photos:** export at about 1000px wide, then convert to `.webp` to keep the
  site fast. Keep the same filenames, or update the `src` in the page.
- **Resume:** save the new PDF over `Mariana-Neri-Sapori-Resume.pdf`.
- **Skills:** each card's back is a list; add an `<li>` and update the
  "N skills" count on the card's front. Proficiency = how many dots have `is-on`.
- **Experience cards:** each role is an `<li class="journey__item">` in the
  Work or Leadership lane, with its skills in `data-skills` (for the chips),
  a Lucide icon name, and an optional `.journey__highlight` (real numbers only).
- **Projects:** copy an `<article class="project">` block in `projects.html`.
- **Menu / footer:** they're repeated at the top and bottom of every page, so
  change all six pages when you edit them.
- **Colours / fonts:** change the variables at the top of `css/style.css`.

## Preview locally
Open `index.html` in a browser, or run a small server from this folder:

```
python -m http.server 8000
```

then visit http://localhost:8000.

## Deploy to GitHub Pages
1. Create a new repository on GitHub and push this folder's contents to it.
2. In the repository go to **Settings → Pages**.
3. Under **Source** choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

All paths are relative, so the site works from a repository subfolder URL.
