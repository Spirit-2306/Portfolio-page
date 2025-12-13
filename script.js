document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    
    // Check for previously saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        
        // Save theme preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Smooth Scroll Effect
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
