/**
 * TravelLux Website Interactivity - Upgraded Version
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Search Action Handler
    const searchBtn = document.querySelector('.search-box button') || document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-box input') || document.querySelector('#destination-input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const destination = searchInput.value.trim();
            if (destination === "") {
                alert("Please enter a destination to search!");
            } else {
                alert("Searching for: " + destination + "...\nRedirecting to results...");
                // Example redirection logic:
                // window.location.href = `results.html?q=${encodeURIComponent(destination)}`;
            }
        });
    }

    // 2. Smooth Scroll for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 3. Dynamic Title Update for Detail Pages
    const titleElement = document.getElementById("title");
    if (titleElement) {
        const urlParams = new URLSearchParams(window.location.search);
        const place = urlParams.get('place');
        if (place) {
            titleElement.innerText = place.replace('-', ' ').toUpperCase();
        }
    }

    // 4. Carousel Auto-Slide Logic
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        let scrollAmount = 0;
        const slideInterval = setInterval(() => {
            carousel.scrollBy({ left: 320, behavior: 'smooth' });
            scrollAmount += 320;
            
            // Reset to start if it reaches the end
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
                scrollAmount = 0;
            }
        }, 3000);

        // Pause carousel on hover
        carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
    }
});

// 5. City Suggestion Autocomplete Logic
const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Ahmedabad", "Hyderabad", "Pune"];

function showSuggestions() {
    const inputElement = document.getElementById("cityInput");
    const suggestionsBox = document.getElementById("suggestions");
    
    if (!inputElement || !suggestionsBox) return;

    const input = inputElement.value.toLowerCase();
    suggestionsBox.innerHTML = ""; // Clear previous results

    if (input.length > 0) {
        const filtered = cities.filter(city => city.toLowerCase().startsWith(input));
        
        filtered.forEach(city => {
            const div = document.createElement("div");
            div.classList.add("suggestion-item");
            
            // Split the city name into matched and remaining parts for custom styling
            const match = city.substring(0, input.length);
            const rest = city.substring(input.length);
            
            div.innerHTML = `<strong class="match">${match}</strong><span class="rest">${rest}</span>`;
            
            div.onclick = () => {
                inputElement.value = city;
                suggestionsBox.innerHTML = "";
            };
            
            suggestionsBox.appendChild(div);
        });
    }
}

// 6. View Details Handler
function viewDetails(placeId) {
    window.location.href = `details.html?place=${placeId}`;
}
