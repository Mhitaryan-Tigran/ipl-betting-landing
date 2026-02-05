/**
 * Match Slider functionality
 * Horizontal scroll with prev/next buttons
 */
function initMatchSlider() {
  const matchSliders = document.querySelectorAll('[data-match-slider]');
  matchSliders.forEach(slider => {
    const track = slider.querySelector('.match-slider');
    const prevBtn = slider.querySelector('.match-prev');
    const nextBtn = slider.querySelector('.match-next');
    const cardWidth = 424;

    prevBtn?.addEventListener('click', () => {
      track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });

    nextBtn?.addEventListener('click', () => {
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    function updateButtons() {
      if (prevBtn) prevBtn.style.opacity = track.scrollLeft <= 0 ? '0.5' : '1';
      if (nextBtn) nextBtn.style.opacity = track.scrollLeft >= track.scrollWidth - track.clientWidth - 10 ? '0.5' : '1';
    }

    track?.addEventListener('scroll', updateButtons);
    updateButtons();
  });
}
