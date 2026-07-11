/* ---- Configuration ---- */
const libraryConfig = {
    books: {
        title: "Books",
        description: "Explore my favorite novels and manga.",
        media: books,
        shelfLabel: "Book shelf",
        emptySelectionText: "Select a book"
    },

    games: {
        title: "Games",
        description: "Explore my favorite games across different genres.",
        media: games,
        shelfLabel: "Game shelf",
        emptySelectionText: "Select a game"
    }
};

/* ---- DOM references ---- */
const libraryTitle = document.querySelector("#library-title");
const libraryDescription = document.querySelector("#library-description");
const libraryStatus = document.querySelector("#library-status");

const booksButton = document.querySelector("#show-books");
const gamesButton = document.querySelector("#show-games");

const bookFilters = document.querySelector("#book-filters");

let activeMediaType = getMediaTypeFromUrl();

/* ---- URL ---- */
/* Use books as the default media type when no valid URL parameter exists */
function getMediaTypeFromUrl() {
    const params = new URLSearchParams(window.location.search);

    return params.get("type") === "games"
        ? "games"
        : "books";
}

/* Keep the selected library type in the URL */
function updateLibraryUrl() {
    const url = new URL(window.location.href);

    url.searchParams.set("type", activeMediaType);

    /* A media selection from the previous type is no longer valid after switching between books and games.*/
    url.searchParams.delete("media");

    window.history.replaceState({}, "", url);
}

/* ---- Rendering ---- */
/* Update the hero content to match the selected media type */
function updateLibraryHero() {
    const config = libraryConfig[activeMediaType];

    libraryTitle.textContent = config.title;
    libraryDescription.textContent = config.description;

    libraryStatus.textContent =
        `Showing ${config.title.toLowerCase()}.`;
}

/* Update the visual and accessible state of the Books/Games switch */
function updateMediaTypeButtons() {
    const showingBooks = activeMediaType === "books";
    const activeButton = showingBooks ? booksButton : gamesButton;

    booksButton.classList.toggle("active", showingBooks);
    gamesButton.classList.toggle("active", !showingBooks);

    booksButton.setAttribute("aria-pressed", String(showingBooks));
    gamesButton.setAttribute("aria-pressed", String(!showingBooks));

    moveLibraryIndicator(activeButton);
}

/* Only books use category filters */
function updateFilterVisibility() {
    const showingBooks = activeMediaType === "books";

    bookFilters.classList.toggle("hidden", !showingBooks);

    if (showingBooks) {
        resetBookFilters();
    }
}

/* Render the selected library type and reset the previous selection */
function renderActiveLibrary() {
    const config = libraryConfig[activeMediaType];

    resetMediaSelection(config.emptySelectionText);

    mediaShelf.setAttribute(
        "aria-label",
        config.shelfLabel
    );

    renderShelf(config.media);

    updateLibraryHero();
    updateMediaTypeButtons();
    updateFilterVisibility();
}

/* ---- Library Type Switch  ---- */
/* Switch between books and games */
function setMediaType(type) {
    if (!libraryConfig[type] || type === activeMediaType) {
        return;
    }

    activeMediaType = type;

    updateLibraryUrl();
    renderActiveLibrary();
}

booksButton.addEventListener("click", function () {
    setMediaType("books");
});

gamesButton.addEventListener("click", function () {
    setMediaType("games");
});

/* GSAP: Animate the active library-type indicator to the selected button */
function moveLibraryIndicator(activeButton) {
    const libraryIndicator = document.querySelector(".library-type-indicator");
    const librarySwitch = document.querySelector(".library-type-switch");

    if (!libraryIndicator || !librarySwitch || !activeButton) {
        return;
    }

    const containerPadding = parseFloat(
        getComputedStyle(librarySwitch).paddingLeft
    );

    gsap.to(libraryIndicator, {
        x: activeButton.offsetLeft - containerPadding,
        width: activeButton.offsetWidth,
        duration: 0.35,
        ease: "power2.out"
    });
}

/* Initialize the page from the current URL */
initializeBookFilters();
renderActiveLibrary();