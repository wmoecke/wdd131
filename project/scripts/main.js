const menuButton = document.querySelector("#menu-button");
const siteNav = document.querySelector("#site-nav");
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = `${new Date().getFullYear()}`;
}

if (menuButton && siteNav) {
    menuButton.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", `${isOpen}`);
        menuButton.textContent = isOpen ? "Close" : "Menu";
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "Menu";
        });
    });
}
