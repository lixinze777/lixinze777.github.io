// Keep the mobile overflow menu accessible and close it after navigation.
(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  var button = nav.querySelector('button');
  var overflow = nav.querySelector('.hidden-links');
  if (!button || !overflow) return;

  function closeMenu() {
    overflow.classList.add('hidden');
    button.classList.remove('close');
    button.setAttribute('aria-expanded', 'false');
  }

  button.addEventListener('click', function () {
    button.setAttribute('aria-expanded', String(!overflow.classList.contains('hidden')));
  });
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });
  nav.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
      button.focus();
    }
  });
}());
