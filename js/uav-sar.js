(() => {
  const copy = {
    pl: {
      kicker: 'UAV SAR',
      title: 'Kiedy liczy się czas, <strong>teren nie powinien być ograniczeniem.</strong>',
      lead: 'Zaginięcie osoby, rozległy lub trudno dostępny teren, ograniczona widoczność — dron może w krótkim czasie dostarczyć obraz obszaru, którego sprawdzenie z ziemi wymaga znacznie większych sił i czasu.',
      panelTitle: 'Potrzebujesz wsparcia w działaniach poszukiwawczych?',
      panelText: 'Fundacja Odporności Cywilnej rozwija zdolność UAV SAR wykorzystującą drony, termowizję i rozpoznanie z powietrza do wsparcia działań poszukiwawczych i zespołów działających w terenie.',
      cta: 'SKONTAKTUJ SIĘ Z NAMI →'
    },
    en: {
      kicker: 'UAV SAR',
      title: 'When time matters, <strong>terrain should not be the limitation.</strong>',
      lead: 'A missing person, difficult terrain or limited visibility — UAV systems can rapidly provide an aerial picture of areas that would require significantly more time and resources to search from the ground.',
      panelTitle: 'Need support during a search operation?',
      panelText: 'Civil Resilience Foundation is developing a UAV SAR capability using drones, thermal imaging and aerial reconnaissance to support search operations and teams working in the field.',
      cta: 'CONTACT US →'
    }
  };

  const applyCopy = () => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'pl';
    const text = copy[lang];
    document.querySelectorAll('[data-uav-copy]').forEach((el) => {
      const key = el.getAttribute('data-uav-copy');
      if (!(key in text)) return;
      if (key === 'title') el.innerHTML = text[key];
      else el.textContent = text[key];
    });
  };

  applyCopy();

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((m) => m.type === 'attributes' && m.attributeName === 'lang')) applyCopy();
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  document.querySelectorAll('a[href="#uav-sar"]').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('.site-nav');
      const toggle = document.querySelector('.nav-toggle');
      if (nav?.classList.contains('is-open')) nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
