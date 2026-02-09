/**
 * Mobile Menu functionality
 * Burger toggle for mobile navigation
 */
function initMobileMenu() {
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      mobileNav.classList.toggle('mobile-nav--open');
      const isOpen = mobileNav.classList.contains('mobile-nav--open');
      burger.setAttribute('aria-expanded', isOpen);
      document.documentElement.style.overflow = isOpen ? 'hidden' : '';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('burger--active');
        mobileNav.classList.remove('mobile-nav--open');
        burger.setAttribute('aria-expanded', 'false');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      });
    });
  }
}
