const games = [
    {
        title: "Cult of the Lamb",
        developer: "Massive Monster",

        cover: "assets/covers/cultofthelamb.webp",

        comment: "Add comment here"
    },
    {
        title: "Omori",
        developer: "OMOCAT",

        cover: "assets/covers/omori.webp",

        comment: "Add comment here"
    },
    {
        title: "Undertale",
        developer: "Toby Fox",

        cover: "assets/covers/undertale.webp",
        
        comment: "Add comment here"
    },
    {
        title: "Persona 5 Royal",
        developer: "Atlus",
        
        cover: "assets/covers/persona5.webp",

        comment: "Add comment here"
    },
    {
        title: "Stardew Valley",
        developer: "ConcernedApe",
        
        cover: "assets/covers/stardewvalley.webp",

        comment: "Add comment here"
    },
    {
        title: "Sims 3",
        developer: "Maxis Studio",
        
        cover: "assets/covers/sims3.webp",

        comment: "Add comment here"
    },
    {
        title: "The Legend of Zelda: Breath of the Wild",
        developer: "Nintendo",
        
        cover: "assets/covers/tlozb.webp",

        comment: "Add comment here"
    }

];

/* Select DOM-Elements */
const gameShelf = document.querySelector("#game-shelf");
const selectedGameTitle = document.querySelector("#selected-game-title");
const detailGameTitle = document.querySelector("#detail-game-title");
const selectedGameImage = document.querySelector("#selected-game-image");
const selectedGameDeveloper = document.querySelector("#selected-game-developer");
const selectedGameComment = document.querySelector("#selected-game-comment");

/* Detail view section (hidden until a book is selected) */
const gameDetails = document.querySelector("#game-details");

/* Create book article elements */
function createShelfItem(game) {
    const shelfItem = document.createElement("article");
    shelfItem.classList.add("shelf-item");

    /* Generate HTML structure dynamically */
    shelfItem.innerHTML = `
        <div class="spine">
            <p>${game.title}</p>
        </div>

        <div class="cover">
            <img src="${game.cover}" alt="${game.title} cover">
        </div>
    `;

    /* Show information of selected book */
    shelfItem.addEventListener("click", function () {
        /* Reveal detail view when a book is selected */
        gameDetails.classList.remove("hidden");

        selectedGameTitle.textContent = game.title;
        detailGameTitle.textContent = game.title;
        selectedGameDeveloper.textContent = game.developer;
        selectedGameComment.textContent = game.comment;
        selectedGameImage.src = game.cover;
        selectedGameImage.alt = game.title + " cover";
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
function renderGames(games) {
    gameShelf.innerHTML = "";

    games.forEach(function (game) {
        const shelfItem = createShelfItem(game);
        gameShelf.appendChild(shelfItem);
    });

    activeShelfItem();
}


renderGames(games);
activeShelfItem();