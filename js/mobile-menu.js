(() => {
  const body = document.body;
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const links = mobileMenuRef.querySelectorAll('a');

  const toggleMenu = () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-active');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  };

  menuBtnRef.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenuRef.classList.contains('is-open')) {
        toggleMenu();
      }
    });
  });
})();
