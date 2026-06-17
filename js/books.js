/* Data structure for shelf items (books) */

const books = [
    {
        title: "No Longer Human",
        category: "novel",
        author: "Dazai Osamu",

        cover: "assets/covers/nolongerhuman.webp",

        comment: "Add comment here"
    },
    {
        title: "Howl's Moving Castle",
        category: "novel",
        author: "Diana Wynne Jones",

        cover: "assets/covers/howlsmovingcastle.webp",

        comment: "Add comment here"
    },
    {
        title: "Lapvona",
        category: "novel",
        author: "Ottessa Moshfegh",

        cover: "assets/covers/lapvona.webp",
        
        comment: "Add comment here"
    },
    {
        title: "The Salt Grows Heavy",
        category: "novel",
        author: "Cassandra Khaw",
        
        cover: "assets/covers/thesaltgrowsheavy.webp",

        comment: "Add comment here"
    },
    {
        title: "Heaven Official's Blessing",
        category: "novel",
        author: "Moxiangtongxiu",
        
        cover: "assets/covers/heavenofficalsblessing.webp",

        comment: "Add comment here"
    },
    {
        title: "Butter",
        category: "novel",
        author: "Asako Yuzuki",
        
        cover: "assets/covers/butter.webp",

        comment: "Add comment here"
    },
    {
        title: "The Secret History",
        category: "novel",
        author: "Donna Tartt",
        
        cover: "assets/covers/thesecrethistory.webp",

        comment: "Add comment here"
    },
       {
        title: "Jibaku Shounen Hanako-kun",
        category: "manga",
        author: "AidaIro",
        
        cover: "assets/covers/tbhk.webp",

        comment: "Add comment here"
    },
    {
        title: "Bungo Stray Dogs",
        category: "manga",
        author: "Kafka Asagiri",
        
        cover: "assets/covers/bungostraydogs.webp",

        comment: "Add comment here"
    },
    {
        title: "Bungo Stray Dogs: Beast",
        category: "manga",
        author: "Kafka Asagiri",
        
        cover: "assets/covers/bungostraydogsbeast.webp",

        comment: "Add comment here"
    },
    {
        title: "Black Butler",
        category: "manga",
        author: "Yana Toboso",
        
        cover: "assets/covers/blackbutler.webp",

        comment: "Add comment here"
    },
    {
        title: "One Piece",
        category: "manga",
        author: "Eiichirō Oda",
        
        cover: "assets/covers/onepiece.webp",

        comment: "Add comment here"
    },
    {
        title: "Death Note",
        category: "manga",
        author: "Tsugumi Ōba",
        
        cover: "assets/covers/deathnote.webp",

        comment: "Add comment here"
    },
    {
        title: "Ouran Highschool Host Club",
        category: "manga",
        author: "Bisco Hatori",

        cover: "assets/covers/ohshc.webp",

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

/* Detail view section (hidden until a book is selected) */
const bookDetails = document.querySelector("#book-details");

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
        /* Reveal detail view when a book is selected */
        bookDetails.classList.remove("hidden");

        selectedBookTitle.textContent = book.title;
        detailBookTitle.textContent = book.title;
        selectedBookAuthor.textContent = book.author;
        selectedBookComment.textContent = book.comment;
        selectedBookImage.src = book.cover;
        selectedBookImage.alt = book.title + " cover";
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

/* Render all (filtered) books in the shelf */
function renderBooks(filteredBooks) {
    bookShelf.innerHTML = "";

    filteredBooks.forEach(function (book) {
        const shelfItem = createShelfItem(book);
        bookShelf.appendChild(shelfItem);
    });

    activeShelfItem();
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
activeShelfItem();