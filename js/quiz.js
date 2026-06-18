const quizGame = document.querySelector("#quiz-game");

const answers = {
    mediaType: "",
    includeManga: null,
    genres: []
};

/* Data structure for dynamically generated quiz questions */
const bookQuestions = [
    {
        text: "Dark?",
        genre: "dark"
    },

    {
        text: "Supernatural?",
        genre: "supernatural"
    }
    
];

const gameQuestions = [
    {
        text: "RPG?",
        genre: "rpg"
    }
];

/* Variable to keep count of current Question position */
let currentQuestion = 0;

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
        <p> Do You Want A Book or Game Recommendation </p>
        <button id="book-button">Books</button>
        <button id="game-button">Games</button>
    `;

    document.querySelector("#book-button").addEventListener("click", function () {
        answers.mediaType = "book";
        showMangaInclusionQuestion();
    });

    document.querySelector("#game-button").addEventListener("click", function () {
        answers.mediaType = "game";
        currentQuestion = 0;
        showGameQuestions();
    });

}

/* Only shown when Book is selected. Decides whether manga should be included in the recommendation */
function showMangaInclusionQuestion() {
    quizGame.innerHTML = `
        <p> Do You Want To Include Manga(s) In Your Book Recommendation? </p>
        <button id="manga-yes">Yes</button>
        <button id="manga-no">No</button>
    `;

    document.querySelector("#manga-yes").addEventListener("click", function () {
        answers.includeManga = true;
        currentQuestion = 0;
        showBookQuestions();
    });

    document.querySelector("#manga-no").addEventListener("click", function () {
        answers.includeManga = false;
        currentQuestion = 0;
        showBookQuestions();
    });

}

/* Questions to further specify the book recommendation */
function showBookQuestions() {

    /* Check if all Questions have been asked after each loop */
    if (currentQuestion >= bookQuestions.length) {
        showQuizResults();
        return;
    }

    /* Keep track of current Question */
    const question = bookQuestions[currentQuestion];

    /* Show Question */
    quizGame.innerHTML = `
        <p>${question.text}</p>

        <button id="b-yes">Yes</button>
        <button id="b-no">No</button>
    `;

    document.querySelector("#b-yes").addEventListener("click", function () {
        currentQuestion ++;
        answers.genres.push(question.genre);
        showBookQuestions();
    });

    document.querySelector("#b-no").addEventListener("click", function () {
        currentQuestion ++;
        showBookQuestions();
    });
        
}

/* Questions to further specify the game recommendation */
function showGameQuestions() {

    /* Check if all Questions have been asked after each loop */
    if (currentQuestion >= gameQuestions.length) {
        showQuizResults();
        return;
    }

    /* Keep track of current Question */
    const question = gameQuestions[currentQuestion];

    /* Show Question */
    quizGame.innerHTML = `
        <p>${question.text}</p>

        <button id="b-yes">Yes</button>
        <button id="b-no">No</button>
    `;

    document.querySelector("#b-yes").addEventListener("click", function () {
        currentQuestion ++;
        answers.genres.push(question.genre);
        showGameQuestions();
    });

    document.querySelector("#b-no").addEventListener("click", function () {
        currentQuestion ++;
        showGameQuestions();
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

    /* Render recommendations dynamically */
    quizGame.innerHTML = `
        <h2>Your Recommendation</h2>

        ${recommendations.map(function (recommendation) {
            return `
                <div>
                    <h3>${recommendation.media.title}</h3>
                </div>
            `;

        }).join("")}

        <button id="quiz-restart">Restart</button>
    `;

    document.querySelector("#quiz-restart").addEventListener("click", function (){
        answers.mediaType = "";
        answers.includeManga = null;
        answers.genres = [];
       
        showStartScreen();
    });

}

showStartScreen();