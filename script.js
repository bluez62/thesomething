const VERSION = "0.0.1"

let versioncounter = document.getElementById("wikiVersion");
versioncounter.textContent = VERSION;

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

// 2. Search Functionality
const searchInput = document.getElementById('searchInput');
const searchableCards = document.querySelectorAll('.searchable');

// Submit Changes Modal Handler
const submitModal = document.getElementById('submitModal');
const openSubmitModalBtn = document.getElementById('openSubmitModalBtn');
const closeSubmitModalBtn = document.getElementById('closeSubmitModalBtn');

// Open menu
if (openSubmitModalBtn && submitModal) {
    openSubmitModalBtn.addEventListener('click', () => {
        submitModal.style.display = 'flex';
    });
}

// Close menu on button click
if (closeSubmitModalBtn && submitModal) {
    closeSubmitModalBtn.addEventListener('click', () => {
        submitModal.style.display = 'none';
    });
}

// Close menu if clicking outside the content box
window.addEventListener('click', (e) => {
    if (e.target === submitModal) {
        submitModal.style.display = 'none';
    }
});

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