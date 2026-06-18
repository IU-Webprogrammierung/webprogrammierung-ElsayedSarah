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
const novelButton = document.querySelector("#filter-novel");
const mangaButton = document.querySelector("#filter-manga");

/* Detail view section (hidden until a media is selected) */
const mediaDetails = document.querySelector("#media-details");

/* Create media article elements */
function createShelfItem(media) {
    const shelfItem = document.createElement("article");
    shelfItem.classList.add("shelf-item");

    /* Generate HTML structure dynamically */
    shelfItem.innerHTML = `
        <div class="spine">
            <p>${media.title}</p>
        </div>

        <div class="cover">
            <img src="${media.cover}" alt="${media.title} cover">
        </div>
    `;

    /* Show information of selected media */
    shelfItem.addEventListener("click", function () {
        /* Reveal detail view when a media is selected */
        mediaDetails.classList.remove("hidden");

        selectedMediaTitle.textContent = media.title;
        detailMediaTitle.textContent = media.title;
        selectedMediaAuthor.textContent = media.author || media.developer;
        selectedMediaComment.textContent = media.comment;
        selectedMediaImage.src = media.cover;
        selectedMediaImage.alt = media.title + " cover";
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
}

/* Filter buttons (only for book-items) */
function initializeBookFilters() {
    if(!novelButton || !mangaButton) {
        return;
    }

    novelButton.addEventListener("click", function () {
        const novels = books.filter(function (book) {
            return book.category === "novel";
        });

        renderShelf(novels);
    });

    mangaButton.addEventListener("click", function () {
        const mangas = books.filter(function (book) {
            return book.category === "manga";
        });

        renderShelf(mangas);
    });
}
