// Guest segment from the shared link, e.g. ?inv=all | reception-muhurtham | reception
// Used later by sections that need to show/hide per-segment content.
const validSegments = ['all', 'reception-muhurtham', 'reception'];
const requested = (params_get('inv') || 'all').toLowerCase();
const segment = validSegments.includes(requested) ? requested : 'all';
document.body.dataset.segment = segment;

function params_get(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// Show only the events this guest's link is invited to.
document.querySelectorAll('[data-segments]').forEach((el) => {
  const allowed = el.dataset.segments.split(',').map((s) => s.trim());
  if (!allowed.includes(segment)) {
    el.hidden = true;
  }
});

// Hide a whole day group if none of its events are visible for this segment.
document.querySelectorAll('.day-group').forEach((group) => {
  const anyVisible = [...group.querySelectorAll('.event-block')].some((b) => !b.hidden);
  if (!anyVisible) group.hidden = true;
});

// Show the decorative side margins only after the hero has scrolled out of view.
const hero = document.getElementById('home');
const sideMargins = document.querySelectorAll('.side-margin');

if (hero && sideMargins.length && 'IntersectionObserver' in window) {
  const heroObserver = new IntersectionObserver((entries) => {
    const heroVisible = entries[0].isIntersecting;
    sideMargins.forEach((m) => m.classList.toggle('is-visible', !heroVisible));
  }, { threshold: 0 });
  heroObserver.observe(hero);
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
