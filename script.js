/**
 * TravelLux Website Interactivity
 */

// Function to handle the search button action
function book() {
    const input = document.querySelector('.search-box input');
    const destination = input.value;

    if (destination === "") {
        alert("Please enter a destination to search!");
    } else {
        // In a real project, this would call an API or redirect to a results page
        alert("Searching for: " + destination + "... \nThis feature is under construction!");
    }
}

// Optional: Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Ahmedabad", "Hyderabad", "Pune"];

function showSuggestions() {
    const input = document.getElementById("cityInput").value.toLowerCase();
    const suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = ""; // Clear previous results

    if (input.length > 0) {
        const filtered = cities.filter(city => city.toLowerCase().startsWith(input));
        
        filtered.forEach(city => {
            const div = document.createElement("div");
            div.classList.add("suggestion-item");
            div.textContent = city;
            div.onclick = () => {
                document.getElementById("cityInput").value = city;
                suggestionsBox.innerHTML = ""; // Close box after selection
            };
            suggestionsBox.appendChild(div);
        });
    }
}
