// Display a dynamic greeting based on the time of day
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();

if (currentHour < 12) {
    greetingElement.textContent = "Good Morning!";
} else if (currentHour < 18) {
    greetingElement.textContent = "Good Afternoon!";
} else {
    greetingElement.textContent = "Good Evening!";
}

// Toggle dark mode
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Smooth scrolling for internal links (optional for navigation links)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
