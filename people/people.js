// Replace section 1 with this revised toggle logic:
const themeToggleBtn = document.getElementById('themeToggle');

// 1. Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
themeToggleBtn.textContent = savedTheme === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode';

// 2. Toggle state & save to localStorage
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    themeToggleBtn.textContent = newTheme === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    localStorage.setItem('theme', newTheme);
});