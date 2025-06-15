
window.onload = function() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
};

const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
