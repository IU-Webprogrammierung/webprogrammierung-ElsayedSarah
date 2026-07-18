/* Shared rendering and interaction logic for the Library media shelf */

/* ---- DOM references ---- */
const mediaShelf = document.querySelector("#media-shelf");
const selectedMediaTitle = document.querySelector("#selected-media-title");
const detailMediaTitle = document.querySelector("#detail-media-title");
const selectedMediaImage = document.querySelector("#selected-media-image");
const selectedMediaAuthor = document.querySelector("#selected-media-author");
const selectedMediaComment = document.querySelector("#selected-media-comment");

/* Book category filter */
const allButton = document.querySelector('[data-filter="all"]');
const novelButton = document.querySelector('[data-filter="novel"]');
const mangaButton = document.querySelector('[data-filter="manga"]');

/* Detail view section (hidden until a media is selected) */
const mediaDetails = document.querySelector("#media-details");
const moreDetailsLink = document.querySelector("#more-details-link");

/* Track whether the shelf is currently being dragged */
let pointerDown = false;
let shelfIsDragging = false;

/* ---- Shelf ---- */
/*Center the selected shelf item inside the shelf */
function centerShelfItem(shelfItem) {
    shelfItem.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
    });
}

/* Scroll to detail view after selecting a media item (desktop/tablet only) */
function scrollToMediaDetails() {
    if (window.innerWidth > 767) {
        mediaDetails.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

/* Allow the "More Details" link to scroll to a more centered position on mobile */
if (moreDetailsLink) {
    moreDetailsLink.addEventListener("click", function (event) {
        event.preventDefault();

        mediaDetails.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}

/* Reset the selected media and hide the detail view */
function resetMediaSelection(emptySelectionText) {
    selectedMediaTitle.textContent = emptySelectionText;

    detailMediaTitle.textContent = "";
    selectedMediaAuthor.textContent = "";
    selectedMediaComment.textContent = "";

    selectedMediaImage.removeAttribute("src");
    selectedMediaImage.alt = "Cover of the selected media item";

    mediaDetails.style.backgroundImage = "";

    mediaDetails.classList.add("hidden");
    moreDetailsLink.classList.add("hidden");
}

/* ---- Shelf Rendering ---- */
/* Create one interactive shelf item */
function createShelfItem(media) {
    const shelfItem = document.createElement("li");

    shelfItem.classList.add("shelf-item");
    /* Store media ID for automatic selection via URL parameters */
    shelfItem.dataset.id = media.id; 

    /* Improve accessibility with keyboard focus and aria-label */
    shelfItem.tabIndex = 0;
    shelfItem.setAttribute("role", "button");
    shelfItem.setAttribute("aria-pressed", "false");
    shelfItem.setAttribute("aria-label", `Select ${media.title}`);

    /* Generate HTML structure dynamically */
    shelfItem.innerHTML = `
        <div class="spine" style="background-color: ${media.spine};" aria-hidden="true"></div>

        <div class="cover">
            <img src="${media.cover}" alt="${media.title} cover">
        </div>
    `;

    /* Show information of selected media */
    shelfItem.addEventListener("click", function () {
        selectShelfItem(shelfItem, media);

    });

    /* Allow keyboard users to select the item */
    shelfItem.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectShelfItem(shelfItem, media);
        }
    });

    return shelfItem;
}

/* Select one shelf item and update the detail view */
function selectShelfItem(shelfItem, media) {
    /* Prevent accidental media selection while dragging */
    if (shelfIsDragging) {
        return;
    }

    const shelfItems = mediaShelf.querySelectorAll(".shelf-item");

    /* Mark selected shelf item as selected */
    shelfItems.forEach(function (item) {
        const isSelected = item === shelfItem;

        item.classList.toggle("active", isSelected);
        item.setAttribute("aria-pressed", String(isSelected));
    });


    /* Remove the one-time quiz recommendation URL parameter after it has been processed */
    const url = new URL(window.location.href);

    if (url.searchParams.has("media")) {
        url.searchParams.delete("media");
        window.history.replaceState({}, "", url);
    }
        
    /* Reveal detail view when a media is selected */
    mediaDetails.classList.remove("hidden");
    moreDetailsLink.classList.remove("hidden");
    

    selectedMediaTitle.textContent = media.title;
    detailMediaTitle.textContent = media.title;
    selectedMediaAuthor.textContent = media.author || media.developer || "";
    selectedMediaComment.textContent = media.comment || "";
    selectedMediaImage.src = media.cover;
    selectedMediaImage.alt = media.title + " cover";
    /* Future enhancement: Display a platform-specific external link (e.g. Goodreads, MyAnimeList, Steam) */

    mediaDetails.style.backgroundImage =
    `url("${selectedMediaImage.src}")`;

    centerShelfItem(shelfItem);
    scrollToMediaDetails();
}

/* Render all (filtered) media in the shelf */
function renderShelf(mediaList) {
    mediaShelf.innerHTML = "";

    mediaList.forEach(function (media) {
        const shelfItem = createShelfItem(media);
        mediaShelf.appendChild(shelfItem);
    });

    /*
    If a media ID is present in the URL, find the matching shelf item and
    trigger its click event automatically.

    This is used when navigating from a quiz recommendation to a media page.
    */

    const params = new URLSearchParams(window.location.search);
    const selectedMediaId = params.get("media");

    if (!selectedMediaId) {
        return;
    }

    const selectedShelfItem = Array.from(
        mediaShelf.querySelectorAll(".shelf-item")
    ).find(function (item) {
        return item.dataset.id === selectedMediaId;
    });

    if (selectedShelfItem) {
        selectedShelfItem.click();
    }
}

/* ---- Filter  ---- */

/* GSAP: Animate the shelf when changing filters */
function animateShelfFilterChange(filteredMedia, activeButton) {
    setActiveFilter(activeButton);
    resetMediaSelection("Select a book");

        gsap.to(mediaShelf, {
        x: -40,
        opacity: 0,
        duration: .2,
        ease: "power2.in",
        onComplete() {

            renderShelf(filteredMedia);
            mediaShelf.scrollLeft = 0;

            gsap.fromTo(mediaShelf,
                {
                    x: 40,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: .35,
                    ease: "power2.out"
                });
        }
    });
}


/* Filter buttons (only for book-items) */
function initializeBookFilters() {
    if(!novelButton || !mangaButton || !allButton) {
        return;
    }

    allButton.addEventListener("click", function () {
        animateShelfFilterChange(books, allButton);
    });

    novelButton.addEventListener("click", function () {
        const novels = books.filter(function (book) {
            return book.category === "novel";
        });

        animateShelfFilterChange(novels, novelButton);
    });

    mangaButton.addEventListener("click", function () {
        const mangas = books.filter(function (book) {
            return book.category === "manga";
        });

        animateShelfFilterChange(mangas, mangaButton);
    });

    resetBookFilters();
}

/* Highlight the currently selected book category filter */
function setActiveFilter(activeButton) {
    const filterButtons = [
        allButton,
        novelButton,
        mangaButton
    ].filter(Boolean);

    filterButtons.forEach(function (button) {
        const isActive = button === activeButton;

        button.classList.toggle("active", isActive);
        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );
    });

    moveFilterIndicator(activeButton);
}

/* Restore the default book filter when returning to Books */
function resetBookFilters() {
    if (!allButton || !novelButton || !mangaButton) {
        return;
    }

    setActiveFilter(allButton);
}

/* GSAP: Animate the active filter indicator to the selected filter button */
function moveFilterIndicator(activeButton) {
    const indicator = document.querySelector(".filter-indicator");
    const filterOptions = document.querySelector(".filter-options");

    if (!indicator || !filterOptions || !activeButton) {
        return;
    }

    const containerPadding = parseFloat(getComputedStyle(filterOptions).paddingLeft);

    gsap.to(indicator, {
        x: activeButton.offsetLeft - containerPadding,
        width: activeButton.offsetWidth,
        duration: 0.35,
        ease: "power2.out"
    });
}

/* ---- Drag-to-Scroll ---- */
/* Enable drag-to-scroll for desktop users */
function initializeShelfDragging() {

    /* Touch devices already support native horizontal scrolling; so no drag-to-scroll needed */
    if (!window.matchMedia("(pointer: fine)").matches) {
        return;
    }

    let startX = 0;
    let startScrollLeft = 0;

    /* Start drag tracking and store current scroll position */
    mediaShelf.addEventListener("pointerdown", function (event) {
        pointerDown = true;
        shelfIsDragging = false;

        startX = event.clientX;
        startScrollLeft = mediaShelf.scrollLeft;
    });

    /* Move the shelf horizontally while dragging */
    document.addEventListener("pointermove", function (event) {
        if (!pointerDown) {
            return;
        }

        /* Slightly reduce drag speed for smoother movement */
        const distance = (event.clientX - startX) * 0.9;

        if (Math.abs(distance) > 8) {
            shelfIsDragging = true;
            mediaShelf.classList.add("dragging");

            event.preventDefault();
            mediaShelf.scrollLeft = startScrollLeft - distance;
        }
    });

    /* Stop dragging and re-activate normal click behavior */
    document.addEventListener("pointerup", function () {
        pointerDown = false;
        mediaShelf.classList.remove("dragging");

        setTimeout(function () {
            shelfIsDragging = false;
        }, 0);
    });
}

initializeShelfDragging();