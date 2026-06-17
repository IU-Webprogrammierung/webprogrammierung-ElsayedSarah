const quizGame = document.querySelector("#quiz-game");

const answers = {
    mediaType: "",
    includeManga: null
};

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
        showBookQuestions();
    });

    document.querySelector("#manga-no").addEventListener("click", function () {
        answers.includeManga = false;
        showBookQuestions();
    });

}

/* Questions to further specify the recommendation */
function showBookQuestions() {
    /* Question 1 */

    showQuizResults();
}

function showGameQuestions() {
    /* Question 1 */

    showQuizResults();
}

/* Filter quiz answers to determine a recommendation */
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

    /* Recommendation logic still needs to be added.
    For now, a random book or game is selected. */

    const randomIndex = Math.floor(Math.random() * recommendationList.length);
    return recommendationList[randomIndex];
    
}

/* Display quiz result and allow restart */
function showQuizResults () {
    const recommendation = getRecommendation();

    quizGame.innerHTML = `
        <h2>Your Recommendation</h2>
        <h3>${recommendation.title}</h3> 

        <button id="quiz-restart">Restart</button>
    `;

    document.querySelector("#quiz-restart").addEventListener("click", function (){
        answers.mediaType = "";
        answers.includeManga = null;
       
        showStartScreen();
    });

}

showStartScreen();