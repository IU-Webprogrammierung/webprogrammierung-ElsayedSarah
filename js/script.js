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

/* Keyboard Navigation ============================ */
/* Enable keyboard navigation with the left and right arrow keys */
function setupKeyboardNavigation(container, itemSelector) {
    const items = Array.from(
        container.querySelectorAll(itemSelector)
    );

    if (!items.length) {
        return;
    }

    items.forEach(function (item, index) {
        if (index > 0) {
            item.tabIndex = -1;
        }

        item.addEventListener("keydown", function (event) {
            let nextIndex = index;

            if (event.key === "ArrowRight") {
                nextIndex = Math.min(index + 1, items.length - 1);
            }

            if (event.key === "ArrowLeft") {
                nextIndex = Math.max(index - 1, 0);
            }

            if (nextIndex === index) {
                return;
            }

            event.preventDefault();

            items[index].tabIndex = -1;
            items[nextIndex].tabIndex = 0;
            items[nextIndex].focus();
        });
    });
}