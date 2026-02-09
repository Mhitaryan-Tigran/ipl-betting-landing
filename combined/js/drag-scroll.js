/**
 * Drag-to-scroll for horizontally scrollable containers
 * Enables mouse drag scrolling on desktop
 */
function initDragScroll() {
  var scrollables = document.querySelectorAll('.match-slider, .toc__list, .reviews__slider');

  scrollables.forEach(function(el) {
    var isDown = false;
    var startX;
    var scrollLeft;
    var moved = false;

    el.style.cursor = 'grab';

    el.addEventListener('mousedown', function(e) {
      // Ignore right-click
      if (e.button !== 0) return;
      isDown = true;
      moved = false;
      el.style.cursor = 'grabbing';
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      e.preventDefault();
    });

    el.addEventListener('mouseleave', function() {
      if (!isDown) return;
      isDown = false;
      el.style.cursor = 'grab';
    });

    el.addEventListener('mouseup', function() {
      isDown = false;
      el.style.cursor = 'grab';
    });

    el.addEventListener('mousemove', function(e) {
      if (!isDown) return;
      var x = e.pageX - el.offsetLeft;
      var walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
      moved = true;
    });

    // Prevent click on links after drag
    el.addEventListener('click', function(e) {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);
  });
}
