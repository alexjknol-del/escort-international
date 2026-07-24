(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav.main');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Cookie notice (in-memory + localStorage; site is not an artifact)
  var bar = document.querySelector('.cookiebar');
  if (bar) {
    var seen = null;
    try { seen = window.localStorage.getItem('ei_cookie_ack'); } catch (e) {}
    if (!seen) {
      bar.classList.remove('hidden');
    }
    var btn = bar.querySelector('[data-accept]');
    if (btn) {
      btn.addEventListener('click', function () {
        bar.classList.add('hidden');
        try { window.localStorage.setItem('ei_cookie_ack', '1'); } catch (e) {}
      });
    }
  }
})();
