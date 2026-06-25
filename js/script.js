/* Global Navigation ============================ */

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

/* Books Page ============================ */

/* Toggle the collapsible filter menu on mobile */
document.addEventListener("click", function (event) {
    const filterToggle = event.target.closest("#filter-toggle");

    if (!filterToggle) {
        return;
    }

    const filterOptions = document.querySelector("#filter-options");

    if (!filterOptions) {
        return;
    }

    filterOptions.classList.toggle("open");
});