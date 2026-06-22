const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const logoLink = document.querySelector('.site-logo, .logo, .header-logo');


if (logoLink) {
  logoLink.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (siteNav && siteNav.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (siteNav && siteNav.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});
