// Theme toggle
const body = document.body;
const toggle = document.querySelector('.theme-toggle');
const saved = localStorage.getItem('theme');

if (saved) {
  body.setAttribute('data-theme', saved);
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  body.setAttribute('data-theme', 'light');
}

toggle.addEventListener('click', () => {
  const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('open');
});

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
