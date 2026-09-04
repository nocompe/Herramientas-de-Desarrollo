const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const yearEl = document.getElementById('year');
const messageBtn = document.getElementById('messageBtn');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light');
  themeToggle.textContent = '☀️';
}

const updateYear = () => {
  yearEl.textContent = new Date().getFullYear();
};

const toggleTheme = () => {
  body.classList.toggle('light');
  const isLight = body.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
};

themeToggle.addEventListener('click', toggleTheme);
messageBtn.addEventListener('click', () => {
  alert('¡Hola! Esta es una web estática simple en HTML, CSS y JavaScript.');
});

updateYear();
