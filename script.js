/**
 * TravelLux Multi-page Interactivity
 */

function handleSearch() {
    const input = document.getElementById('home-search');
    if (input && input.value.trim() !== '') {
        window.location.href = `destinations.html?search=${encodeURIComponent(input.value.trim())}`;
    } else {
        alert('Please enter a destination name.');
    }
}

// Check for search queries passed via URL on destinations page
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');

    if (searchQuery) {
        const cards = document.querySelectorAll('.card');
        const query = searchQuery.toLowerCase();
        
        cards.forEach(card => {
            const title = card.getAttribute('data-title') || '';
            if (!title.includes(query)) {
                card.style.display = 'none';
            }
        });
    }
});
