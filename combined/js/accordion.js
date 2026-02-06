/**
 * Accordion functionality
 * Click anywhere on item to toggle, uses CSS class accordion__item--closed
 */
function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion__item');
  const faqFirstItem = document.querySelector('.faq .accordion__item');

  accordionItems.forEach((item) => {
    // Close all by default, except first FAQ item
    if (item === faqFirstItem) {
      const btn = item.querySelector('.accordion__icon');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    } else {
      item.classList.add('accordion__item--closed');
      const btn = item.querySelector('.accordion__icon');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    // Click anywhere on item to toggle
    item.addEventListener('click', () => {
      const isOpen = !item.classList.contains('accordion__item--closed');
      const btn = item.querySelector('.accordion__icon');
      const parentSection = item.closest('.accordion');

      if (isOpen) {
        item.classList.add('accordion__item--closed');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      } else {
        // Close other items in the same accordion
        if (parentSection) {
          parentSection.querySelectorAll('.accordion__item').forEach((sibling) => {
            if (sibling !== item) {
              sibling.classList.add('accordion__item--closed');
              const sibBtn = sibling.querySelector('.accordion__icon');
              if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
            }
          });
        }
        item.classList.remove('accordion__item--closed');
        if (btn) btn.setAttribute('aria-expanded', 'true');
      }
    });

    // Make item clickable with cursor pointer
    item.style.cursor = 'pointer';
  });
}
