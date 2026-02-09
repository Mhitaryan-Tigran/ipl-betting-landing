/**
 * Reviews Slider functionality
 * Transform-based sliding, 2 cards visible at a time
 */
function initReviewsSlider() {
  const reviewsSlider = document.querySelector('[data-reviews-slider]');
  if (reviewsSlider) {
    const track = reviewsSlider.querySelector('.reviews__track');
    const cards = reviewsSlider.querySelectorAll('.review-card');
    const section = reviewsSlider.closest('.reviews');
    const prevBtn = section.querySelector('.reviews__nav-btn:first-child');
    const nextBtn = section.querySelector('.reviews__nav-btn:last-child');

    const cardWidth = 658;
    const gap = 20;
    const totalCards = cards.length;
    let currentIndex = 0;
    const maxIndex = Math.ceil(totalCards / 2) - 1;

    function updateSlider() {
      const offset = currentIndex * (cardWidth + gap) * 2;
      track.style.transform = `translateX(-${offset}px)`;

      if (prevBtn) prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
      if (nextBtn) nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }

    prevBtn?.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    nextBtn?.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
      }
    });

    // Swipe support (touch + mouse drag)
    let startX = 0;
    let dragging = false;

    function onStart(x) {
      startX = x;
      dragging = true;
    }

    function onEnd(x) {
      if (!dragging) return;
      dragging = false;
      const diff = startX - x;
      if (Math.abs(diff) > 40) {
        if (diff > 0 && currentIndex < maxIndex) {
          currentIndex++;
        } else if (diff < 0 && currentIndex > 0) {
          currentIndex--;
        }
        updateSlider();
      }
    }

    reviewsSlider.addEventListener('touchstart', e => onStart(e.touches[0].clientX), { passive: true });
    reviewsSlider.addEventListener('touchend', e => onEnd(e.changedTouches[0].clientX));
    reviewsSlider.addEventListener('mousedown', e => { e.preventDefault(); onStart(e.clientX); });
    reviewsSlider.addEventListener('mouseup', e => onEnd(e.clientX));
    reviewsSlider.addEventListener('mouseleave', () => { dragging = false; });

    updateSlider();
  }
}
