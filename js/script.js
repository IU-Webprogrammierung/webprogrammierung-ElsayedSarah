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

/* Highlight the current page in the global navigation */
document.body.addEventListener("htmx:afterSwap", function () {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".desktop-nav a, .mobile-menu a").forEach(function (link) {

        const isCurrentPage = link.getAttribute("href") === currentPage;

        link.classList.toggle("active", isCurrentPage);

        if (isCurrentPage) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
});

/* Library Page ============================ */

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
    filterToggle.classList.toggle("open"); /* Update the visual state of the mobile filter toggle (CSS) */

    /* Keep the accessible expanded state in sync */
    filterToggle.setAttribute(
        "aria-expanded",
        String(filterOptions.classList.contains("open"))
    );

    /*
        After the opening transition has finished, reposition the animated
        filter indicator so it matches the currently active filter button.

        Waiting for the transition to finish prevents incorrect positioning
        while the filter menu is still collapsed.
    */

    if (filterOptions.classList.contains("open")) {
        filterOptions.addEventListener("transitionend", function () {
            moveFilterIndicator(document.querySelector(".filter-options button.active"));
        }, { once: true });
    }
});