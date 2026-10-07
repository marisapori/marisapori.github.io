/* ==========================================================
   RESUME SITE — MAIN SCRIPT
   1. Setup (Lucide icons, footer year)
   2. Mobile hamburger menu
   3. Navbar shadow on scroll
   4. Fade-in sections on scroll
   5. Image placeholder slots
   6. Typing effect in the hero label
   7. Skill chips that highlight experience entries
   8. Flip cards on the Skills page
   9. Chat bubbles + copy-email pill on the Contact page
   10. Slide viewer on the Projects page
   11. Road-to-graduation bar on the Education page
   ========================================================== */


/* ---------- 1. SETUP ---------- */

// (The "js" class on <html> is set by a one-line script in the <head>.)

// Replace every <i data-lucide="..."> with its SVG icon.
if (window.lucide) {
  lucide.createIcons();
}

// Keep the copyright year current automatically.
document.getElementById('year').textContent = new Date().getFullYear();


/* ---------- 2. MOBILE HAMBURGER MENU ---------- */

const toggle = document.querySelector('.navbar__toggle');
const navLinks = document.querySelector('.navbar__links');

// Open or close the menu and update the icon + accessibility state.
function setMenu(open) {
  navLinks.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');

  // Swap between the "menu" and "x" icons.
  toggle.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}"></i>`;
  if (window.lucide) lucide.createIcons();
}

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('is-open');
  setMenu(!isOpen);
});

// Close the menu after a link is tapped.
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});


/* ---------- 3. NAVBAR SHADOW ON SCROLL ---------- */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('is-scrolled', window.scrollY > 10);
});


/* ---------- 4. FADE-IN SECTIONS ON SCROLL ----------
   IntersectionObserver watches each .reveal element and adds
   .is-visible the first time it enters the screen. */

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.15 } // trigger when 15% of the element is visible
);

revealItems.forEach((item) => observer.observe(item));


/* ---------- 5. IMAGE PLACEHOLDER SLOTS ----------
   If a photo in /images hasn't been added yet, mark its frame
   as empty so the CSS shows a labelled placeholder box. */

document.querySelectorAll('.img-slot img').forEach((img) => {
  const markEmpty = () => img.parentElement.classList.add('is-empty');

  // The image may have already failed before this script ran...
  if (img.complete && img.naturalWidth === 0) {
    markEmpty();
  }
  // ...or it may fail later.
  img.addEventListener('error', markEmpty);
});


/* ---------- 6. TYPING EFFECT ----------
   Types each phrase in data-words, pauses, deletes it, then
   moves on to the next. Skipped for people who prefer less motion. */

const typed = document.querySelector('.typed');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typed && !reduceMotion) {
  const words = JSON.parse(typed.dataset.words);
  let wordIndex = 0;
  let charCount = words[0].length; // starts fully typed
  let deleting = true;

  function tick() {
    const word = words[wordIndex];
    charCount += deleting ? -1 : 1;
    typed.textContent = word.slice(0, charCount);

    let delay = deleting ? 45 : 90;

    if (!deleting && charCount === word.length) {
      deleting = true;
      delay = 2200; // hold the finished phrase
    } else if (deleting && charCount === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }
    setTimeout(tick, delay);
  }

  setTimeout(tick, 2500);
}


/* ---------- 7. SKILL CHIPS + OPEN ALL ----------
   Experience cards start closed (the first one starts open, to show
   that they expand). Clicking a chip opens and
   highlights every stop whose data-skills includes that skill,
   and fades the rest. Clicking the active chip again clears the
   filter and closes the cards. "Open all" opens or closes every card. */

const chips = document.querySelectorAll('.chip');
const journey = document.querySelector('.journey');
const stops = document.querySelectorAll('.journey__item');
const cards = document.querySelectorAll('.journey__card');
const filterStatus = document.querySelector('.skill-filter__status');
const toggleAll = document.querySelector('.journey-toggle-all');

function setFilter(skill) {
  chips.forEach((chip) => {
    chip.setAttribute('aria-pressed', chip.dataset.skill === skill);
  });

  let matches = 0;
  stops.forEach((stop) => {
    const isMatch = skill !== null && stop.dataset.skills.split(' ').includes(skill);
    stop.classList.toggle('is-match', isMatch);
    stop.querySelector('.journey__card').open = isMatch;
    if (isMatch) matches++;
  });

  journey.classList.toggle('is-filtering', skill !== null);
  filterStatus.textContent = skill === null
    ? ''
    : `${matches} ${matches === 1 ? 'role' : 'roles'} highlighted — click the chip again to clear`;
}

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const isActive = chip.getAttribute('aria-pressed') === 'true';
    setFilter(isActive ? null : chip.dataset.skill);
  });
});

// Keep the button's label in sync: "Close all" only when every card is open
function updateToggleAll() {
  const allOpen = [...cards].every((card) => card.open);
  toggleAll.setAttribute('aria-pressed', allOpen);
  toggleAll.querySelector('span').textContent = allOpen ? 'Close all' : 'Open all';
}

if (toggleAll) {
  toggleAll.addEventListener('click', () => {
    const openThem = toggleAll.getAttribute('aria-pressed') !== 'true';
    setFilter(null);
    cards.forEach((card) => { card.open = openThem; });
    updateToggleAll();
  });
  cards.forEach((card) => card.addEventListener('toggle', updateToggleAll));
}


/* ---------- 8. FLIP CARDS ----------
   Clicking anywhere on a card flips it. The hidden face is made
   inert so keyboard and screen-reader users only reach the side
   that's showing; keyboard focus follows to the new side's button. */

document.querySelectorAll('.flip-card').forEach((card) => {
  const [front, back] = card.querySelectorAll('.flip-card__face');

  function setFlipped(flipped, moveFocus) {
    card.classList.toggle('is-flipped', flipped);
    front.inert = flipped;
    back.inert = !flipped;
    front.setAttribute('aria-hidden', flipped);
    back.setAttribute('aria-hidden', !flipped);
    if (moveFocus) {
      (flipped ? back : front).querySelector('.flip-card__hint').focus();
    }
  }

  setFlipped(false, false);

  card.addEventListener('click', (event) => {
    // event.detail is 0 when the click came from the keyboard (Enter / Space)
    setFlipped(!card.classList.contains('is-flipped'), event.detail === 0);
  });
});


/* ---------- 9. CHAT BUBBLES ----------
   Plays the Contact page conversation in one bubble at a time.
   Mariana's replies get a short "typing…" pill first. People who
   prefer less motion just see the whole conversation. */

const chat = document.querySelector('.chat');

if (chat && !reduceMotion) {
  const bubbles = [...chat.querySelectorAll('.bubble')];
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  chat.classList.add('chat--animate');

  // The message bar's text types itself out once the chat has played
  const composeText = document.querySelector('.compose__text');
  const message = composeText ? composeText.textContent : '';
  if (composeText) composeText.textContent = '';

  async function playChat() {
    await wait(500);
    for (const bubble of bubbles) {
      if (bubble.classList.contains('bubble--me')) {
        bubble.classList.add('is-typing');
        await wait(1000);
        bubble.classList.remove('is-typing');
      }
      bubble.classList.add('is-shown');
      await wait(bubble.classList.contains('bubble--me') ? 600 : 700);
    }
    chat.classList.add('is-done'); // shows "Read" under the last message

    if (composeText) {
      await wait(600);
      for (const letter of message) {
        composeText.textContent += letter;
        await wait(70);
      }
    }
  }

  playChat();
}

// "Copy my email!" pill: copies the address and shows a small "Copied!".
// If the browser blocks copying, the pop-up shows the address instead.
const copyBtn = document.querySelector('[data-copy]');

if (copyBtn) {
  const toast = document.querySelector('.quick-replies__toast');
  let hideTimer;

  copyBtn.addEventListener('click', async () => {
    try {
      // Give up after a second if the browser never answers
      await Promise.race([
        navigator.clipboard.writeText(copyBtn.dataset.copy),
        new Promise((_, reject) => setTimeout(reject, 1000)),
      ]);
      toast.textContent = 'Copied!';
    } catch {
      toast.textContent = copyBtn.dataset.copy;
    }
    toast.classList.add('is-visible');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => toast.classList.remove('is-visible'), 2000);
  });
}


/* ---------- 10. SLIDE VIEWER ----------
   Flips through a project's presentation in place: arrow buttons,
   left/right keys while the viewer has focus, or a sideways swipe.
   Wraps around from the last slide to the first. */

document.querySelectorAll('[data-slides]').forEach((viewer) => {
  const slides = viewer.querySelectorAll('.slides__viewport img');
  const count = viewer.querySelector('.slides__count');
  let current = 0;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((img, i) => { img.hidden = i !== current; });
    count.textContent = `${current + 1} / ${slides.length}`;
  }

  viewer.querySelector('[data-slides-prev]').addEventListener('click', () => show(current - 1));
  viewer.querySelector('[data-slides-next]').addEventListener('click', () => show(current + 1));

  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });

  // Swipe: a mostly-sideways drag of 40px or more changes the slide.
  let startX = null;
  viewer.addEventListener('touchstart', (event) => { startX = event.touches[0].clientX; }, { passive: true });
  viewer.addEventListener('touchend', (event) => {
    if (startX === null) return;
    const dx = event.changedTouches[0].clientX - startX;
    if (Math.abs(dx) >= 40) show(current + (dx < 0 ? 1 : -1));
    startX = null;
  });
});


/* ---------- 11. ROAD-TO-GRADUATION BAR ----------
   Works out how much of the time between the start and end dates
   (data-start / data-end) has passed, and moves the bar to match.
   It's based on time, not credits, so the label says "of the way". */

const gradBar = document.querySelector('.grad-progress');

if (gradBar) {
  const start = new Date(gradBar.dataset.start);
  const end = new Date(gradBar.dataset.end);
  const share = (Date.now() - start) / (end - start);
  const pct = Math.round(Math.min(Math.max(share, 0), 1) * 100);

  const track = gradBar.querySelector('.grad-progress__track');
  track.style.setProperty('--progress', pct + '%');
  track.setAttribute('aria-valuenow', pct);
  gradBar.querySelector('.grad-progress__pct').textContent = pct + '%';
}
