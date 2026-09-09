// Deval Den LinkTree — page behaviour (external file for strict CSP compatibility).
(function () {
  'use strict';
  var yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  var btn = document.getElementById('toggleStoryBtn');
  var content = document.getElementById('storyContent');
  var arrow = document.getElementById('storyArrow');
  if (btn && content) {
    btn.addEventListener('click', function () {
      var isOpen = content.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (arrow) arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }
})();
