/* Lucky Dog homepage motion layer: GSAP + ScrollTrigger.
   Animates existing elements only (transforms, opacity, clip-path); never builds or removes markup. */
(function () {
  var tries = 0;
  var iv = setInterval(function () {
    var root = document.querySelector('.ld');
    var ready = root && root.querySelector('.rcard') && root.querySelector('.state') && window.gsap && window.ScrollTrigger;
    if (ready) { clearInterval(iv); init(root); }
    else if (++tries > 120) clearInterval(iv);
  }, 100);

  function init(root) {
    if (root.__ldMotion) return;
    root.__ldMotion = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var g = window.gsap, ST = window.ScrollTrigger;
    g.registerPlugin(ST);
    var off = [];
    function on(t, e, f, o) { t.addEventListener(e, f, o); off.push(function () { t.removeEventListener(e, f, o); }); }
    function q(s, scope) { return Array.prototype.slice.call((scope || root).querySelectorAll(s)); }
    var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var E = 'expo.out', B = 'back.out(1.8)';

    var ctx = g.context(function () {
      /* ---------- HERO ---------- */
      // Buttons carry a CSS transform transition (hover lift); it fights GSAP, so switch it off while they animate in.
      g.set(q('.btn'), { transition: 'none' });
      var tl = g.timeline({ defaults: { ease: E, duration: 1.1 } });
      tl.from('.nav', { y: -40, autoAlpha: 0, duration: 0.9 })
        .from('.hero h1', { clipPath: 'inset(0 0 100% 0)', y: 60, duration: 1.3, clearProps: 'clipPath' }, '-=0.5')
        .from('.hero-txt .bone', { y: -120, rotation: -40, autoAlpha: 0, ease: 'bounce.out', duration: 1.2 }, '-=1.0')
        .from('.hero .lead', { y: 24, autoAlpha: 0 }, '-=0.9')
        .from('.cta-paw', { y: 30, scale: 0.9, autoAlpha: 0, ease: B, duration: 0.9, clearProps: 'transform,transition' }, '-=0.8')
        .from('.cta-paw img', { rotation: -180, scale: 0, ease: B, duration: 0.9 }, '-=0.6')
        .from('.proof', { y: 20, autoAlpha: 0 }, '-=0.7')
        .from('.hero-img', { scale: 0.82, rotation: -4, autoAlpha: 0, ease: 'elastic.out(1, 0.6)', duration: 1.8 }, 0.25);

      /* ---------- SECTION HEADINGS + BADGES ---------- */
      q('.sec-head, .day-in').forEach(function (h) {
        var t = g.timeline({ scrollTrigger: { trigger: h, start: 'top 85%', once: true } });
        var badge = h.querySelector('.badge');
        var h2 = h.querySelector('h2');
        var rest = q(':scope > p, :scope > div, :scope > .btn', h);
        if (badge) t.from(badge, { y: -60, rotation: -25, scale: 0.6, autoAlpha: 0, ease: 'elastic.out(1, 0.5)', duration: 1.3 });
        if (h2) t.from(h2, { clipPath: 'inset(0 0 100% 0)', y: 50, ease: E, duration: 1.1, clearProps: 'clipPath' }, badge ? '-=1.0' : 0);
        if (rest.length) t.from(rest, { y: 24, autoAlpha: 0, ease: E, duration: 0.9, stagger: 0.08, clearProps: 'transform,transition' }, '-=0.7');
      });
      q('.board-card h2, .promo-txt h2').forEach(function (h2) {
        g.from(h2, { clipPath: 'inset(0 0 100% 0)', y: 40, ease: E, duration: 1.1, clearProps: 'clipPath',
          scrollTrigger: { trigger: h2, start: 'top 88%', once: true } });
      });

      /* ---------- CARD GROUPS: tossed in with a little spin ---------- */
      function toss(sel, opts) {
        var els = q(sel);
        if (!els.length) return;
        g.set(els, { y: 80, rotation: function (i) { return (i % 2 ? 1 : -1) * (opts && opts.rot != null ? opts.rot : 3); }, autoAlpha: 0 });
        ST.batch(els, { start: 'top 90%', once: true, onEnter: function (b) {
          g.to(b, { y: 0, rotation: 0, autoAlpha: 1, ease: 'back.out(1.4)', duration: 1, stagger: 0.09, overwrite: true });
        } });
      }
      toss('.rcard'); toss('.reel', { rot: 6 }); toss('.scard'); toss('.state', { rot: 1.5 });
      toss('.step'); toss('.q', { rot: 1 }); toss('.wcard'); toss('.exp img', { rot: 5 });
      g.from('.arrow', { scale: 0, ease: B, duration: 0.7, stagger: 0.1, scrollTrigger: { trigger: '.rev-row', start: 'top 85%', once: true } });

      /* ---------- HANGING STATS SIGN: swings in, numbers count up ---------- */
      var board = root.querySelector('.board-card');
      if (board) {
        g.set(board, { transformOrigin: '50% -110px' });
        g.from(board, { rotation: -14, ease: 'elastic.out(1, 0.35)', duration: 2.4,
          scrollTrigger: { trigger: '.board', start: 'top 80%', once: true } });
        g.from('.string', { scaleY: 0, transformOrigin: '50% 0%', ease: E, duration: 0.8,
          scrollTrigger: { trigger: '.board', start: 'top 80%', once: true } });
        if (fine) {
          on(board, 'mouseenter', function () { g.to(board, { rotation: 2.5, ease: 'power2.out', duration: 0.4, onComplete: function () {
            g.to(board, { rotation: 0, ease: 'elastic.out(1, 0.3)', duration: 1.6 }); } }); });
        }
      }
      q('.stat b').forEach(function (b) {
        var raw = b.textContent.trim();
        var m = raw.match(/^([\d,.]+)(.*)$/);
        if (!m) return;
        var target = parseFloat(m[1].replace(/,/g, '')), suffix = m[2], comma = m[1].indexOf(',') > -1;
        var o = { v: 0 };
        g.to(o, { v: target, duration: 2, ease: 'power3.out',
          scrollTrigger: { trigger: b, start: 'top 90%', once: true },
          onUpdate: function () { var n = Math.round(o.v); b.textContent = (comma ? n.toLocaleString('en-US') : n) + suffix; },
          onComplete: function () { b.textContent = raw; } });
      });
      g.from('.stat img', { scale: 0, rotation: -30, ease: B, duration: 0.9, stagger: 0.12,
        scrollTrigger: { trigger: '.stats', start: 'top 88%', once: true } });

      /* ---------- SERVICES extras ---------- */
      g.from('.ears', { yPercent: 70, autoAlpha: 0, ease: B, duration: 0.8, delay: 0.5,
        scrollTrigger: { trigger: '.svc-grid', start: 'top 80%', once: true } });
      g.from('.pawpular', { scale: 0, rotation: 30, ease: 'elastic.out(1, 0.5)', duration: 1.4, delay: 0.7,
        scrollTrigger: { trigger: '.svc-grid', start: 'top 80%', once: true } });

      /* ---------- STEPS: dashed path draws as you scroll ---------- */
      g.from('.dash', { scaleX: 0, transformOrigin: '0% 50%', ease: 'none',
        scrollTrigger: { trigger: '.steps', start: 'top 80%', end: 'top 40%', scrub: true } });
      g.from('.num', { scale: 0, ease: 'back.out(3)', duration: 0.7, stagger: 0.25,
        scrollTrigger: { trigger: '.steps', start: 'top 80%', once: true } });

      /* ---------- PROMO + RACE: parallax and drive-ins ---------- */
      g.from('.promo-card', { y: 100, scale: 0.94, autoAlpha: 0, ease: E, duration: 1.3,
        scrollTrigger: { trigger: '.promo', start: 'top 85%', once: true } });
      g.from('.promo-art img', { xPercent: 30, autoAlpha: 0, ease: 'power4.out', duration: 1.4, delay: 0.25,
        scrollTrigger: { trigger: '.promo', start: 'top 85%', once: true } });
      g.from('.promo .tail', { scaleY: 0, transformOrigin: '50% 100%', ease: 'elastic.out(1, 0.4)', duration: 1.6, delay: 0.5,
        scrollTrigger: { trigger: '.promo', start: 'top 85%', once: true } });
      g.fromTo('.promo-art img', { y: 30 }, { y: -30, ease: 'none',
        scrollTrigger: { trigger: '.promo', start: 'top bottom', end: 'bottom top', scrub: true } });
      g.from('.car', { xPercent: -60, autoAlpha: 0, ease: 'power4.out', duration: 1.6,
        scrollTrigger: { trigger: '.car', start: 'top 92%', once: true } });
      g.fromTo('.day', { backgroundPosition: '50% 0%' }, { backgroundPosition: '50% 100%', ease: 'none',
        scrollTrigger: { trigger: '.day', start: 'top bottom', end: 'bottom top', scrub: true } });

      /* ---------- FOOTER ---------- */
      g.from(q('.foot-in > *').slice(0, 5), { y: 30, autoAlpha: 0, ease: E, duration: 1, stagger: 0.08,
        scrollTrigger: { trigger: '.foot', start: 'top 85%', once: true } });
      g.from('.dogs', { yPercent: 40, autoAlpha: 0, ease: 'back.out(1.2)', duration: 1.2,
        scrollTrigger: { trigger: '.dogs-wrap', start: 'top 95%', once: true } });
      g.from('.bubbles', { scale: 0, transformOrigin: '50% 100%', ease: 'elastic.out(1, 0.5)', duration: 1.4, delay: 0.5,
        scrollTrigger: { trigger: '.dogs-wrap', start: 'top 95%', once: true } });

      /* ---------- POINTER-ONLY INTERACTIONS ---------- */
      if (!fine) return;

      // hero art follows the mouse a little
      var hi = root.querySelector('.hero-img');
      if (hi) {
        var hx = g.quickTo(hi, 'x', { duration: 1.2, ease: 'power3.out' }), hy = g.quickTo(hi, 'y', { duration: 1.2, ease: 'power3.out' });
        on(root.querySelector('.hero'), 'mousemove', function (e) { hx((e.clientX / innerWidth - 0.5) * -28); hy((e.clientY / innerHeight - 0.5) * -18); });
      }

      // 3D tilt on cards
      q('.scard, .wcard, .rcard').forEach(function (c) {
        g.set(c, { transformPerspective: 900 });
        var rx = g.quickTo(c, 'rotationX', { duration: 0.6, ease: 'power3.out' }), ry = g.quickTo(c, 'rotationY', { duration: 0.6, ease: 'power3.out' });
        on(c, 'mousemove', function (e) { var r = c.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - 0.5) * 10); rx(((e.clientY - r.top) / r.height - 0.5) * -10); });
        on(c, 'mouseleave', function () { rx(0); ry(0); });
      });

      // badges wiggle, icons hop
      q('.badge, .bone').forEach(function (b) {
        on(b, 'mouseenter', function () { g.fromTo(b, { rotation: -8 }, { rotation: 0, ease: 'elastic.out(1.2, 0.3)', duration: 1.2 }); });
      });
      q('.wcard, .stat').forEach(function (c) {
        var img = c.querySelector('img');
        if (!img) return;
        on(c, 'mouseenter', function () { g.fromTo(img, { y: 0 }, { y: -14, yoyo: true, repeat: 1, ease: 'power2.out', duration: 0.25 }); });
      });

      // reels lean toward the pointer
      q('.reel').forEach(function (r) {
        on(r, 'mouseenter', function () { g.to(r, { scale: 1.04, rotation: (Math.random() - 0.5) * 6, ease: B, duration: 0.6 }); });
        on(r, 'mouseleave', function () { g.to(r, { scale: 1, rotation: 0, ease: 'power3.out', duration: 0.6 }); });
      });

      // paw cursor
      var cur = root.querySelector('.cur'), dot = root.querySelector('.cur-dot');
      if (cur && dot) {
        root.classList.add('has-cur');
        var cx = g.quickTo(cur, 'x', { duration: 0.45, ease: 'power3.out' }), cy = g.quickTo(cur, 'y', { duration: 0.45, ease: 'power3.out' });
        var dx = g.quickTo(dot, 'x', { duration: 0.08 }), dy = g.quickTo(dot, 'y', { duration: 0.08 });
        g.set([cur, dot], { autoAlpha: 0 });
        on(window, 'mousemove', function (e) {
          cx(e.clientX); cy(e.clientY); dx(e.clientX); dy(e.clientY);
          g.to([cur, dot], { autoAlpha: 1, duration: 0.2, overwrite: 'auto' });
        });
        on(document.documentElement, 'mouseleave', function () { g.to([cur, dot], { autoAlpha: 0, duration: 0.2 }); });
        on(root, 'mouseover', function (e) {
          var t = e.target.closest && e.target.closest('a, button, .reel, .scard, .wcard, .rcard');
          g.to(cur, { scale: t ? 1.8 : 1, rotation: t ? -20 : 0, ease: B, duration: 0.4, overwrite: 'auto' });
        });
        on(window, 'mousedown', function () { g.to(cur, { scale: 0.7, duration: 0.1 }); });
        on(window, 'mouseup', function () { g.to(cur, { scale: 1, ease: B, duration: 0.4 }); });
      }
      g.set(q('.btn').filter(function (b) { return !b.parentElement.matches('.sec-head, .day-in') && !b.classList.contains('cta-paw'); }), { clearProps: 'transition' });
    }, root);

    on(window, 'load', function () { ST.refresh(); });
    var t1 = setTimeout(function () {
      ST.refresh();
      // Shown inside a frame that never scrolls (e.g. a zoomed-out canvas)? Then scroll reveals can't fire: show everything.
      if (document.documentElement.scrollHeight <= window.innerHeight + 40) {
        ST.getAll().forEach(function (s) { if (s.animation) s.animation.progress(1); s.kill(); });
        g.set(q('.rcard, .reel, .scard, .state, .step, .q, .wcard, .exp img'), { y: 0, rotation: 0, autoAlpha: 1 });
      }
    }, 1500);
    on(window, 'pagehide', function () { clearTimeout(t1); off.forEach(function (f) { f(); }); ctx.revert(); root.__ldMotion = false; });
  }
})();
