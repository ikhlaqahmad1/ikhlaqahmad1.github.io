// Highlight the nav link for the section currently in view
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('nav ul a');

function setActiveLink() {
  let currentId = '';
  const scrollPos = window.scrollY + window.innerHeight * 0.35;

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.style.color = isActive ? '#fff' : '';
    link.style.background = isActive ? 'rgba(255,255,255,0.08)' : '';
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('load', setActiveLink);
