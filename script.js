// Dark Mode Logic
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const bodyElement = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    bodyElement.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    bodyElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = bodyElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    bodyElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Mobile Hamburger Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('active');
    }
});

// Functional Live Search Logic
const searchInput = document.getElementById('searchInput');
const shortcutCards = document.querySelectorAll('.shortcut-card');
const resultCount = document.getElementById('resultCount');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    shortcutCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        
        if (title.includes(query)) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    resultCount.textContent = `Showing ${visibleCount} item${visibleCount === 1 ? '' : 's'}`;
});
