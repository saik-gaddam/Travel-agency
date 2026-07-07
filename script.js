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
