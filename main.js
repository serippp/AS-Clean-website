(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const contactMessage = 'Olá! Gostaria de pedir um orçamento para um serviço de limpeza.';
  document.querySelectorAll('[data-whatsapp], [data-service]').forEach(link => {
    const message = link.dataset.service ? `Olá! Gostaria de pedir um orçamento para ${link.dataset.service}.` : contactMessage;
    link.href = `https://wa.me/351934417216?text=${encodeURIComponent(message)}`;
  });
  document.getElementById('year').textContent = new Date().getFullYear();

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  function setMenu(open, restoreFocus = false) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menu.hidden = !open;
    menu.inert = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) menu.querySelector('a').focus();
    else if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false, true)));
  document.addEventListener('keydown', event => {
    if (menu.hidden) return;
    if (event.key === 'Escape') setMenu(false, true);
    if (event.key === 'Tab') {
      const items = [menuButton, ...menu.querySelectorAll('a')];
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    document.body.classList.add('motion-ready');
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pending');
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal, .care-art').forEach(element => { element.classList.add('pending'); revealObserver.observe(element); });
    reducedMotion.addEventListener('change', event => {
      if (event.matches) document.querySelectorAll('.pending').forEach(element => element.classList.remove('pending'));
    });
  }

  const videos = [...document.querySelectorAll('.real-video')];
  const userPaused = new WeakSet();
  function loadVideo(video) {
    const source = video.querySelector('source[data-src]');
    if (source) { source.src = source.dataset.src; source.removeAttribute('data-src'); video.load(); }
  }
  function syncVideoControl(video) {
    const button = document.querySelector(`[data-video="${video.id}"]`);
    const playing = !video.paused;
    button.setAttribute('aria-label', `${playing ? 'Pausar' : 'Reproduzir'} vídeo ${video.id === 'hero-video' ? 'principal' : 'do processo'}`);
    button.querySelector('use').setAttribute('href', playing ? '#pause' : '#play');
  }
  videos.forEach(video => {
    if (reducedMotion.matches) { video.autoplay = false; video.pause(); }
    video.addEventListener('play', () => syncVideoControl(video));
    video.addEventListener('pause', () => syncVideoControl(video));
    syncVideoControl(video);
    document.querySelector(`[data-video="${video.id}"]`).addEventListener('click', async () => {
      loadVideo(video);
      if (video.paused) { userPaused.delete(video); try { await video.play(); } catch { syncVideoControl(video); } }
      else { userPaused.add(video); video.pause(); }
    });
  });
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          loadVideo(video);
          if (!reducedMotion.matches && !userPaused.has(video)) video.play().catch(() => syncVideoControl(video));
        } else video.pause();
      });
    }, { threshold: 0.15 });
    videos.forEach(video => videoObserver.observe(video));
  }
  reducedMotion.addEventListener('change', event => { if (event.matches) videos.forEach(video => video.pause()); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) videos.forEach(video => video.pause()); });

  const photoDialog = document.querySelector('.photo-dialog');
  document.querySelector('.photo-open').addEventListener('click', () => photoDialog.showModal());
  document.querySelector('.dialog-close').addEventListener('click', () => photoDialog.close());
  photoDialog.addEventListener('click', event => { if (event.target === photoDialog) photoDialog.close(); });

  const floating = document.querySelector('.floating-contact');
  let contactVisible = false;
  const updateFloating = () => {
    const visible = window.scrollY > 420 && !contactVisible;
    floating.classList.toggle('visible', visible);
    floating.inert = !visible;
    floating.setAttribute('aria-hidden', String(!visible));
  };
  window.addEventListener('scroll', updateFloating, { passive: true });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { contactVisible = entries[0].isIntersecting; updateFloating(); }, { threshold: 0.05 }).observe(document.getElementById('contactos'));
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) document.querySelectorAll('.desktop-nav a').forEach(a => a.classList.toggle('active', a.hash === `#${entry.target.id}`));
      });
    }, { rootMargin: '-20% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => navObserver.observe(section));
  }
  updateFloating();
})();
