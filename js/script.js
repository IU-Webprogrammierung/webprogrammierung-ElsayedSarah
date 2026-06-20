/* Show or hide the mobile navigation menu when the hamburger button is clicked. */

document.addEventListener("click", function (event) {
    const menuButton = event.target.closest("#menu-button");

    if (!menuButton) {
        return;
    }

    const mobileMenu = document.querySelector("#mobile-menu");

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.toggle("hidden");
});