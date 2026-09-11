        // 1. Dark / Light Mode Toggle
        const themeToggleBtn = document.getElementById('themeToggle');
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.body.removeAttribute('data-theme');
                themeToggleBtn.textContent = 'Toggle Dark Mode';
            } else {
                document.body.setAttribute('data-theme', 'dark');
                themeToggleBtn.textContent = 'Toggle Light Mode';
            }
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