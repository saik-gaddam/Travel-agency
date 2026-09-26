/**
 * TravelLux Complex Interactivity & Modal Data Provider
 */

const destinationDetails = {
    bali: {
        title: "Tropical Bali Getaway",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        price: "$1,299 per person",
        duration: "7 Days / 6 Nights",
        description: "Experience the ultimate tropical retreat in Ubud and Seminyak with luxury villa accommodation and private drivers.",
        itinerary: [
            "Day 1: Arrival, private airport transfer, and welcome dinner.",
            "Day 2: Ubud monkey forest, art markets, and traditional dance show.",
            "Day 3: Sunrise trek at Mount Batur followed by natural hot springs.",
            "Day 4: Beach day at Seminyak with sunset cocktails.",
            "Day 5: Temple tour including Uluwatu and Kecak fire dance.",
            "Day 6: Spa wellness day and leisure shopping.",
            "Day 7: Departure flight back home."
        ]
    },
    paris: {
        title: "Romantic Paris & Alps",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        price: "$2,499 per person",
        duration: "10 Days / 9 Nights",
        description: "A perfect mix of French romance and majestic Swiss Alpine beauty, complete with high-speed rail passes.",
        itinerary: [
            "Day 1: Arrive in Paris, Seine river evening cruise.",
            "Day 2: Louvre Museum private tour and Eiffel Tower dinner.",
            "Day 3: Day trip to the Palace of Versailles.",
            "Day 4: High-speed scenic train to Zurich, Switzerland.",
            "Day 5: Swiss Alps cable car ride and glacier panoramic views.",
            "Day 6-9: Interlaken outdoor adventures and luxury alpine chalet stay.",
            "Day 10: Departure from Zurich."
        ]
    },
    dubai: {
        title: "Dubai Luxury Escape",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        price: "$1,699 per person",
        duration: "5 Days / 4 Nights",
        description: "Indulge in futuristic skyscrapers, high-end shopping experiences, and thrilling golden dune safaris.",
        itinerary: [
            "Day 1: Check-in to 5-star downtown hotel, Dubai Mall fountain show.",
            "Day 2: Burj Khalifa At The Top VIP observation deck access.",
            "Day 3: Luxury Marina Yacht Cruise with gourmet buffet.",
            "Day 4: 4x4 Desert Dune Safari, camel riding, and BBQ under the stars.",
            "Day 5: Souk shopping and departure."
        ]
    },
    tokyo: {
        title: "Tokyo Neon & Tradition",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        price: "$2,199 per person",
        duration: "8 Days / 7 Nights",
        description: "Discover the captivating contrast of high-tech futuristic neon cityscapes and ancient serene shrines.",
        itinerary: [
            "Day 1: Arrival in Tokyo, evening walk through Shibuya Crossing.",
            "Day 2: Asakusa Senso-ji temple and Tokyo Skytree view.",
            "Day 3: Authentic Japanese sushi making masterclass.",
            "Day 4: Day trip to Hakone hot springs with Mt. Fuji views.",
            "Day 5-7: Akihabara tech tour, teamLab Planets digital art museum.",
            "Day 8: Souvenir shopping and departure."
        ]
    }
};

function handleHomeSearch() {
    const input = document.getElementById('home-search');
    if (input && input.value.trim() !== '') {
        window.location.href = `destinations.html?search=${encodeURIComponent(input.value.trim())}`;
    } else {
        alert('Please enter a destination name.');
    }
}

// Open modal and populate dynamic destination info
function openDetails(destinationKey) {
    const data = destinationDetails[destinationKey];
    const modalBody = document.getElementById('modal-body-content');
    const modal = document.getElementById('detail-modal');

    if (data && modalBody && modal) {
        let itineraryHtml = data.itinerary.map(item => `<li>${item}</li>`).join('');
        
        modalBody.innerHTML = `
            <h2>${data.title}</h2>
            <img src="${data.image}" alt="${data.title}" style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:1rem;">
            <p><strong>Duration:</strong> ${data.duration}</p>
            <p><strong>Price:</strong> ${data.price}</p>
            <p style="margin: 1rem 0;">${data.description}</p>
            <h4 style="color: var(--primary-dark); margin-top: 1rem;">Daily Itinerary:</h4>
            <ul style="margin: 0.5rem 0 1rem 1.2rem; color: var(--text-muted);">${itineraryHtml}</ul>
            <button class="btn" style="width: 100%; margin-top: 1rem;" onclick="alert('Booking confirmed for ${data.title}! Our team will contact you shortly.')">Book This Package Now</button>
        `;
        
        modal.classList.add('active');
    }
}

function closeModalBtn() {
    const modal = document.getElementById('detail-modal');
    if (modal) modal.classList.remove('active');
}

function closeDetails(event) {
    if (event.target.id === 'detail-modal') {
        event.target.classList.remove('active');
    }
}

// Filter cards based on URL search query if navigated from home
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');

    if (searchQuery) {
        const cards = document.querySelectorAll('.card');
        const query = searchQuery.toLowerCase();
        
        cards.forEach(card => {
            const titleText = card.querySelector('h3').innerText.toLowerCase();
            const descText = card.querySelector('p').innerText.toLowerCase();
            if (!titleText.includes(query) && !descText.includes(query)) {
                card.style.display = 'none';
            }
        });
    }
});
