/* Data structure for shelf items (books) */

const books = [
    {
        title: "Book 1",
        category: "novel",
        author: "name",

        cover: "assets/testcover.jpg",

        comment: "Add comment here"
    },
    {
        title: "Book 2",
        category: "novel",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 3",
        category: "novel",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 4",
        category: "novel",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 5",
        category: "novel",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 6",
        category: "novel",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 7",
        category: "novel",
        author: "name",
        
        comment: "Add comment here"
    },
       {
        title: "Book 8",
        category: "manga",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 9",
        category: "manga",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 10",
        category: "manga",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 11",
        category: "manga",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 12",
        category: "manga",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 13",
        category: "manga",
        author: "name",
        
        comment: "Add comment here"
    },
    {
        title: "Book 14",
        category: "manga",
        author: "name",

        comment: "Add comment here"
    }

];

/* Select DOM-Elements */
const bookShelf = document.querySelector("#book-shelf");
const selectedBookTitle = document.querySelector("#selected-book-title");
const detailBookTitle = document.querySelector("#detail-book-title");
const selectedBookImage = document.querySelector("#selected-book-image");
const selectedBookAuthor = document.querySelector("#selected-book-author");
const selectedBookComment = document.querySelector("#selected-book-comment");

/* Select filter buttons */
const novelButton = document.querySelector("#filter-novel");
const mangaButton = document.querySelector("#filter-manga");

/* Create book article elements */
function createShelfItem(book) {
    const shelfItem = document.createElement("article");
    shelfItem.classList.add("shelf-item");

    /* Generate HTML structure dynamically */
    shelfItem.innerHTML = `
        <div class="spine">
            <p>${book.title}</p>
        </div>

        <div class="cover">
            <img src="${book.cover}" alt="${book.title} cover">
        </div>
    `;

    /* Show information of selected book */
    shelfItem.addEventListener("click", function () {
        selectedBookTitle.textContent = book.title;
        detailBookTitle.textContent = book.title;
        selectedBookAuthor.textContent = book.author;
        selectedBookComment.textContent = book.comment;
        selectedBookImage.src = book.cover;
    });

    return shelfItem;
}

/* Render all (filtered) books in the shelf */
function renderBooks(filteredBooks) {
    bookShelf.innerHTML = "";

    filteredBooks.forEach(function (book) {
        const shelfItem = createShelfItem(book);
        bookShelf.appendChild(shelfItem);
    });
}

/* Filter buttons */
novelButton.addEventListener("click", function () {
    const novels = books.filter(function (book) {
        return book.category === "novel";
    });

    renderBooks(novels);
});

mangaButton.addEventListener("click", function () {
    const mangas = books.filter(function (book) {
        return book.category === "manga";
    });

    renderBooks(mangas);
});

/* Initial render on page load (default: novel) */
const novels = books.filter(function (book) {
    return book.category === "novel";
});

renderBooks(novels);