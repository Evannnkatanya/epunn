// hamburger
  document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
  function closeMobile() {
    document.getElementById('mobileMenu').classList.remove('open');
  }

  // scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.08 });
  reveals.forEach(el => observer.observe(el));

  // active nav link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--text)' : '';
    });
  });

  // form
  function handleSubmit() {
    alert('Terima kasih! Pesan kamu sudah diterima. (Ini placeholder — sambungkan ke backend atau Formspree ya!)');
  }