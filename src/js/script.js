window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const menuItem = document.querySelector(".menu__item");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
    });
    window.addEventListener("click", e => {
        const target = e.target;
        if (!target.closest(".menu") && !target.closest(".hamburger")) {
            hamburger.classList.remove("hamburger_active");
            menu.classList.remove("menu_active");
        }
    });
});
