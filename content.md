# Site Content Map

Where each piece of text lives, so it's quick to find and change.

## Home — `index.html`
- **Typing label** (above the name): the `data-words` list on `.typed`
  — currently ICT Student / Tech Outreach Intern / Project Management
- **Intro**: `.lead` ("Welcome! I'm a junior…") and `.hero__about` (long paragraph)
- **Social links** under the headshot: `.socials` (email, GitHub, LinkedIn)
- **Download resume** button: `.btn-row`
- **Career objective**: `.band__quote`

## Skills — `skills.html`
- **Intro paragraph** next to the "Skills" headline
- **Flip cards**: Technical, Tools & Platforms, Soft Skills
  - Front: title + "N skills" count
  - Back: skill list; Technical and Tools show 1–3 proficiency dots

## Experience — `experience.html`
- **Download resume** button under the headline
- Entries start open (`<details open>`); visitors can close them
- **Skill chips**: `.skill-filter__chips` (each chip's `data-skill` matches
  the words in each entry's `data-skills`)
- **Work**: Outreach Intern · Psychiatrist's Office Intern ·
  Occupational Safety and Healthcare Department Intern · Code Sensei
- **Leadership**: CCI Student Leadership Council · IT Leadership Program ·
  WISE · Connecting Girls to STEM

## Education — `education.html`
- **Intro line** under the headline (major + minors)
- **Awards & Recognition**: always-visible list, at the top
- **Education**: Florida State University · Marjory Stoneman Douglas High School

## Projects — `projects.html` (career portfolio)
- One `<article class="project">` per project: screenshot, date/team line,
  tool tags, **Goals & scope**, **My role**, link buttons
- **CCI Course-to-Career Skill Gap Dashboard** (`images/skill-gap-dashboard.webp`)

## Contact — `contact.html`
- **Chat bubbles**: `.chat` — `bubble--them` = visitor, `bubble--me` = Mariana
- **Send an email** button

## Images — `images/`
- `portrait.webp` — framed headshot (Home)
- `skills.webp` — framed coding-lab photo (Skills)
- `contact.webp` — framed Connecting Girls to STEM photo (Contact)
- `skill-gap-dashboard.webp` — dashboard screenshot (Projects)
