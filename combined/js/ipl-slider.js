/**
 * IPL Slider functionality
 * Auto-advances every 5s, supports dots navigation and prev/next buttons
 */
function initIplSlider() {
  const sliders = document.querySelectorAll('[data-slider]');
  sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.slider__slide');
    const dots = slider.querySelectorAll('.slider__dot');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlider(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('slider__slide--active', 'slider__slide--prev', 'slider__slide--next');
        if (i === index) {
          slide.classList.add('slider__slide--active');
        } else if (i === (index - 1 + totalSlides) % totalSlides) {
          slide.classList.add('slider__slide--prev');
        } else if (i === (index + 1) % totalSlides) {
          slide.classList.add('slider__slide--next');
        }
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('slider__dot--active', i === index);
        dot.setAttribute('aria-selected', i === index);
      });

      currentSlide = index;
    }

    prevBtn?.addEventListener('click', () => {
      updateSlider((currentSlide - 1 + totalSlides) % totalSlides);
    });

    nextBtn?.addEventListener('click', () => {
      updateSlider((currentSlide + 1) % totalSlides);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => updateSlider(i));
    });

    setInterval(() => {
      updateSlider((currentSlide + 1) % totalSlides);
    }, 5000);
  });
}
