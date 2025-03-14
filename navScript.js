document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) return console.error("Menu button or nav links not found!");

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        navLinks.classList.toggle("show");
    });

    document.addEventListener("click", ({ target }) => {
        if (!menuToggle.contains(target) && !navLinks.contains(target)) {
            navLinks.classList.remove("show");
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link =>
        link.addEventListener("click", () => navLinks.classList.remove("show"))
    );
});
