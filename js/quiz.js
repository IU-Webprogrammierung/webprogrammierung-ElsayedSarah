/*
    Note: Quiz answers are based on genre choices instead of yes/no answers.

    This ensures that every answer contributes to the recommendation and
    prevents empty results when all questions are answered with "no".
*/

const quizGame = document.querySelector("#quiz-game");
const quizResults = document.querySelector("#quiz-results");

const answers = {
    mediaType: "",
    includeManga: null,
    genres: []
};

/* Data structure for dynamically generated quiz questions */
const bookQuestions = [
    {
        text: "Do you want something dark or romantic?",
        genreA: "dark",
        genreB: "romance"
    },

    {
        text: "Do you prefer psychological themes or fantasy elements?",
        genreA: "psychological",
        genreB: "fantasy"
    },

    {
        text: "Do you want mystery or supernatural elements?",
        genreA: "supernatural",
        genreB: "mystery"
    },

    {
        text: "Do you prefer adventure/action or slice of life?",
        genreA: "action",
        genreB: "slice of life"
    }
    
];

const gameQuestions = [
    {
        text: "Do you want an RPG or a simulation game?",
        genreA: "rpg",
        genreB: "simulation"
    },

    {
        text: "Do you want something dark or romantic/cozy?",
        genreA: "dark",
        genreB: "romance"
    },

    {
        text: "Do you want mystery or exploration?",
        genreA: "mystery",
        genreB: "adventure"
    },

    {
        text: "Do you prefer fantasy or action?",
        genreA: "action",
        genreB: "fantasy"
    }
];

/* Variable to keep count of current Question position */
let currentQuestion = 0;
/* Tracks which question set is currently active */
let activeQuestions = [];

/* Starting screen for the quiz */
function showStartScreen () {
    quizGame.innerHTML = `
        <button id="start-quiz">Start Quiz</button>
    `;

    document.querySelector("#start-quiz").addEventListener("click", function () {
        showMediaTypeQuestions();

    });
}

/* Select whether book or game recommendations should be used*/
function showMediaTypeQuestions () {
    quizGame.innerHTML = `
        <p class="quiz-question">
            Do You Want A Book or Game Recommendation?
        </p>

        <div class="quiz-options">
            <button class="quiz-card" id="book-button">
                <span class="quiz-card-icon">✦</span>
                <span class="quiz-card-title">Books</span>
            </button>

            <button class="quiz-card" id="game-button">
                <span class="quiz-card-icon">✦</span>
                <span class="quiz-card-title">Games</span>
            </button>
        </div>
    `;

    document.querySelector("#book-button").addEventListener("click", function () {
        answers.mediaType = "book";
        activeQuestions = bookQuestions;
        showMangaInclusionQuestion();
    });

    document.querySelector("#game-button").addEventListener("click", function () {
        answers.mediaType = "game";
        activeQuestions = gameQuestions;
        currentQuestion = 0;
        showQuestions();
    });

}

/* Only shown when Book is selected. Decides whether manga should be included in the recommendation */
function showMangaInclusionQuestion() {
    quizGame.innerHTML = `
        <p class="quiz-question">
            Do You Want To Include Manga In Your Book Recommendation?
        </p>

        <div class="quiz-options">
            <button class="quiz-card" id="manga-yes">
                <span class="quiz-card-icon">✓</span>
                <span class="quiz-card-title">Yes</span>
            </button>

            <button class="quiz-card" id="manga-no">
                <span class="quiz-card-icon">×</span>
                <span class="quiz-card-title">No</span>
            </button>
        </div>
    `;

    document.querySelector("#manga-yes").addEventListener("click", function () {
        answers.includeManga = true;
        currentQuestion = 0;
        showQuestions();
    });

    document.querySelector("#manga-no").addEventListener("click", function () {
        answers.includeManga = false;
        currentQuestion = 0;
        showQuestions();
    });

}

/* Questions to further specify the book/game recommendation */
function showQuestions() {

    /* Check if all Questions have been asked after each loop */
    if (currentQuestion >= activeQuestions.length) {
        showQuizResults();
        return;
    }

    /* Keep track of current Question */
    const question = activeQuestions[currentQuestion];

    /* Show Question */
    quizGame.innerHTML = `
        <p class="quiz-question">${question.text}</p>

        <div class="quiz-options">
            <button class="quiz-card" id="option-a">
                <span class="quiz-card-icon">✦</span>
                <span class="quiz-card-title">${question.genreA}</span>
            </button>

            <button class="quiz-card" id="option-b">
                <span class="quiz-card-icon">✦</span>
                <span class="quiz-card-title">${question.genreB}</span>
            </button>
        </div>
    `;

    document.querySelector("#option-a").addEventListener("click", function () {
        answers.genres.push(question.genreA);
        currentQuestion ++;
        showQuestions();
    });

    document.querySelector("#option-b").addEventListener("click", function () {
        answers.genres.push(question.genreB);
        currentQuestion ++;
        showQuestions();
    });
         
}

/* 
    Build a list of possible recommendations based on previous quiz answers.

    1. Select the correct data structure (books or games) depending on the chosen media type. 
    If books are selected and manga should be excluded,
    the recommendation pool is filtered so only novels remain.

    2. Each remaining media entry is then compared against the genres collected throughout the quiz (answers.genres). 
    Every matching genre increases the recommendation's score by one point.

    3. All recommendations are sorted by score in descending order and
    the two highest-ranked results are returned.
 */
function getRecommendation () {
    
    let recommendationList = [];

    if (answers.mediaType === "game") {
        recommendationList = games;
    }

    if (answers.mediaType === "book") {
        recommendationList = books;

        if (answers.includeManga === false) {
            recommendationList = books.filter(function (book) {
                return book.category === "novel";
            });
        }
    }

    const scoredRecommendations = recommendationList.map(function (media) {
        let score = 0;

        answers.genres.forEach(function(answerGenre) {

            if (media.genre.includes(answerGenre)) {
                score++;
            }
        });

        return {
            media: media,
            score: score
        };
    });

    scoredRecommendations.sort(function (a, b) {
        return b.score - a.score;
    });

    return scoredRecommendations.slice(0, 2);
}

/* Display quiz recommendation and allow restart */
function showQuizResults () {
    const recommendations = getRecommendation();

    /*Determine which media page should be linked from the recommendation depending on the selected media type.*/
    const targetType =
        answers.mediaType === "book"
            ? "books"
            : "games";

    document.querySelector(".quiz-section").classList.add("hidden");
    quizResults.classList.remove("hidden");

    /* Render recommendations dynamically */
    quizResults.innerHTML = `
        <h2>Your Recommendation</h2>

        <div class="quiz-results_list">
             ${recommendations.map(function (recommendation) {
                const mediaUrl =
                    `library.html?type=${targetType}&media=${encodeURIComponent(recommendation.media.id)}`;

                return `
                    <article class="quiz-result-card">
                        <div>
                            <h3>${recommendation.media.title}</h3>
                            <p>${recommendation.media.author || recommendation.media.developer}</p>
                            <a href="${mediaUrl}">View Details</a>
                        </div>
                    </article>
                `;

            }).join("")}
        </div>

        <button id="quiz-restart">Restart</button>
    `;

    document.querySelector("#quiz-restart").addEventListener("click", function (){

        quizResults.classList.add("hidden");
        document.querySelector(".quiz-section").classList.remove("hidden");

        answers.mediaType = "";
        answers.includeManga = null;
        answers.genres = [];
        currentQuestion = 0;
        activeQuestions = [];
       
        showStartScreen();
    });

}

showStartScreen();