/*
    Note: books.js and games.js were merged into a shared mediaShelf.js file.

    Media data is now stored in data.js, while mediaShelf.js contains the
    shared shelf logic. This avoids duplicate code and allows both pages
    to reuse the same functionality with different data sets.
*/


/* Initialize the shelf with the media data provided by the current page (e.g. books.html or games.html) */
function initializeShelf(mediaList) {
    renderShelf(mediaList);
}


/* Select DOM-Elements */
const mediaShelf = document.querySelector("#media-shelf");
const selectedMediaTitle = document.querySelector("#selected-media-title");
const detailMediaTitle = document.querySelector("#detail-media-title");
const selectedMediaImage = document.querySelector("#selected-media-image");
const selectedMediaAuthor = document.querySelector("#selected-media-author");
const selectedMediaComment = document.querySelector("#selected-media-comment");

/* Select filter buttons (only for book-page) */
const allButton = document.querySelector("#all-books");
const novelButton = document.querySelector("#filter-novel");
const mangaButton = document.querySelector("#filter-manga");

/* Detail view section (hidden until a media is selected) */
const mediaDetails = document.querySelector("#media-details");
const moreDetailsLink = document.querySelector("#more-details-link");

/* Track whether the shelf is currently being dragged */
let pointerDown = false;
let shelfIsDragging = false;

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

/* Create media article elements */
function createShelfItem(media) {
    const shelfItem = document.createElement("article");
    shelfItem.classList.add("shelf-item");
    /* Store media ID for automatic selection via URL parameters */
    shelfItem.dataset.id = media.id; 

    /* Improve accessibility with keyboard focus and aria-label */
    shelfItem.tabIndex = 0;
    shelfItem.setAttribute("role", "button");
    shelfItem.setAttribute("aria-label", `Select ${media.title}`);

    /* Generate HTML structure dynamically */
    shelfItem.innerHTML = `
        <div class="spine" style="background-color: ${media.spine};"></div>

        <div class="cover">
            <img src="${media.cover}" alt="${media.title} cover">
        </div>
    `;

    /* Show information of selected media */
    shelfItem.addEventListener("click", function () {

        /* Prevent accidental media selection while dragging */
        if (shelfIsDragging) {
            return;
        }

        /* Reveal detail view when a media is selected */
        mediaDetails.classList.remove("hidden");
        moreDetailsLink.classList.remove("hidden");
        centerShelfItem(shelfItem);

        selectedMediaTitle.textContent = media.title;
        detailMediaTitle.textContent = media.title;
        selectedMediaAuthor.textContent = media.author || media.developer;
        selectedMediaComment.textContent = media.comment;
        selectedMediaImage.src = media.cover;
        selectedMediaImage.alt = media.title + " cover";

        scrollToMediaDetails();
    });

    /* Allow shelf items to be selected using the keyboard  */
    shelfItem.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            shelfItem.click();
        }
    });

    return shelfItem;
}

/* Mark selected shelf item as selected */
function activeShelfItem() {
    const shelfItems = document.querySelectorAll(".shelf-item");

    shelfItems.forEach(function(item) {
        item.addEventListener("click", function() {
            shelfItems.forEach(function (i) {
                i.classList.remove("active")
            });
            item.classList.add("active");
        });
    });
}

/* Render all (filtered) media in the shelf */
function renderShelf(mediaList) {
    mediaShelf.innerHTML = "";

    mediaList.forEach(function (media) {
        const shelfItem = createShelfItem(media);
        mediaShelf.appendChild(shelfItem);
    });

    activeShelfItem();

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

    const selectedShelfItem = document.querySelector(`[data-id="${selectedMediaId}"]`);

    if (selectedShelfItem) {
        selectedShelfItem.click();
        centerShelfItem(selectedShelfItem);
    }
}

/* Filter buttons (only for book-items) */
function initializeBookFilters() {
    if(!novelButton || !mangaButton || !allButton) {
        return;
    }

    allButton.addEventListener("click", function () {
        setActiveFilter(allButton);
        renderShelf(books);
    });

    novelButton.addEventListener("click", function () {
        const novels = books.filter(function (book) {
            return book.category === "novel";
        });

        setActiveFilter(novelButton);
        renderShelf(novels);
    });

    mangaButton.addEventListener("click", function () {
        const mangas = books.filter(function (book) {
            return book.category === "manga";
        });

        setActiveFilter(mangaButton);
        renderShelf(mangas);
    });

     /* "All" is selected when the page loads */
    setActiveFilter(allButton);
}

/* Highlight the currently selected book category filter */
function setActiveFilter(activeButton) {
    [allButton, novelButton, mangaButton].forEach(function (button) {
        button.classList.remove("active");
    });

    activeButton.classList.add("active");
}

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