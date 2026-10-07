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

## Education — `education.html`
- **Intro line** under the headline ("Part tech, part people, fully caffeinated…")
- **Number strip**: `.stat-strip` (GPA · President's List · Minors · Graduation)
- **Road to graduation bar**: `.grad-progress` (dates in `data-start` / `data-end`;
  js/main.js section 11 works out today's %)
- **Awards & Recognition**: `.award-tiles`, one `<li>` per award
- **University**: one `.school-feature` card for FSU: degree info on the left,
  tag groups (Major, Minors, Relevant coursework, Campus involvement) on the right

## Experience — `experience.html`
- **View resume** button under the headline
- **Skill chips** + **Open all** button: `.skill-filter` (each chip's `data-skill`
  matches the words in each card's `data-skills`)
- Two lanes, newest first, cards start closed with "See details +":
  - **Work**: Outreach Intern · Psychiatrist's Office Intern ·
    Occupational Safety & Healthcare Intern · Code Sensei
  - **Leadership**: WISE · Connecting Girls to STEM ·
    CCI Student Leadership Council · IT Leadership Program
- The first Work card (Outreach Intern) starts open (`<details open>`) so visitors see that cards expand

## Projects — `projects.html` (career portfolio)
- One `<article class="project">` per project: screenshot, date/team line,
  tool tags, **Goals & scope**, **My role**, link buttons
- **CCI Course-to-Career Skill Gap Dashboard** (`images/skill-gap-dashboard.webp`)
- **IT Leadership Social Media Marketing** (slide viewer: `images/smm-slides/slide-1..7.webp`,
  full PDF: `IT-Leadership-Social-Media-Marketing.pdf`, posts: `images/smm-posts/`,
  account links + "managed Jan 19 – Apr 18, 2026" note under the tags)

## Contact — `contact.html`
- **Message window**: `.messenger`
- **Chat bubbles**: `.chat` — `bubble--them` = visitor, `bubble--me` = Mariana
- **Copy my email!** pill: `.quick-replies` (copies the address; js/main.js section 9)

## Images — `images/`
- `portrait.webp` — framed headshot (Home)
- `skills.webp` — framed coding-lab photo (Skills)
- `contact.webp` — framed Connecting Girls to STEM photo (Education header)
- `skill-gap-dashboard.webp` — dashboard screenshot (Projects)
- `smm-slides/` — the 7 LIS 4480 presentation slides for the slide viewer (Projects)
- `smm-posts/` — phone screenshots of posts on @getinvolvedcci_fsu: status bar cropped,
  "Liked by" usernames blurred; shown in CSS phone frames (Projects)
