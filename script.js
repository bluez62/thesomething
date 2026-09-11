// 1. Dark / Light Mode Toggle
const themeToggleBtn = document.getElementById('themeToggle');

// 1. Check saved preference on page load (default to dark if none saved)
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
themeToggleBtn.textContent = savedTheme === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode';

// 2. Toggle and save preference on click
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Toggle Light Mode';
    } else {
        document.body.removeAttribute('data-theme'); // 'light' is the default CSS state without the attribute
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    }
    
    localStorage.setItem('theme', newTheme);
});

// 2. Search Functionality
const searchInput = document.getElementById('searchInput');
const searchableCards = document.querySelectorAll('.searchable');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    searchableCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 3. Modal Popup Logic
const modal = document.getElementById('profileModal');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBio = document.getElementById('modalBio');

function openModal(name, bio, role) {
    modalName.textContent = name;
    modalRole.textContent = role;
    modalBio.textContent = bio;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside the content box
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});