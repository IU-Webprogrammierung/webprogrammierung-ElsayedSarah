/* Data structure for shelf items (books) */

const books = [
    {
        title: "Book 1",
        category: "novel"
    },
    {
        title: "Book 2",
        category: "manga"
    },
    {
        title: "Book 3",
        category: "novel"
    },
    {
        title: "Book 4",
        category: "manga"
    },
    {
        title: "Book 5",
        category: "novel"
    },
    {
        title: "Book 6",
        category: "manga"
    },
    {
        title: "Book 7",
        category: "novel"
    }

];

/* Select DOM-Elements */
const bookShelf = document.querySelector("#book-shelf");
const selectedBookTitle = document.querySelector("#selected-book-title");

/* Create book article elements */
function createShelfItem(book) {
    const shelfItem = document.createElement("article");
    shelfItem.classList.add("shelf-item");

    /* Generate HTML structure dynamically */
    shelfItem.innerHTML = `
        <div class="spine">
            <p>${book.title}</p>
        </div>

        <div class="cover"></div>
    `;

    /* Show title of selected book */
    shelfItem.addEventListener("click", function () {
        selectedBookTitle.textContent = book.title;
    });

    return shelfItem;
}

/* Render all books in the shelf */
function renderBooks() {
    bookShelf.innerHTML = "";

    books.forEach(function (book) {
        const shelfItem = createShelfItem(book);
        bookShelf.appendChild(shelfItem);
    });
}

/* Initial render on page load */
renderBooks();