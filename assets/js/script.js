document.addEventListener("DOMContentLoaded", function() {
    console.log("Bookstore website loaded successfully!");

    // Example interaction
    let navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#f2e9e4";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });
});
