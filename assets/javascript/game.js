$(document).ready(function () {

    //not sure I need this:
    // var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var words = [
        "themartian",
        "thehumans",
        "hatchet",
        "watchmen",
        "maus",
        "sunstone",
        "fightclub",
        "everyday",
        "saga",
        "sabriel"
    ]

    function game() {

        // var won = 0;
        // var lost= 0;
        // var maxErrors = 15;

        // var wins = document.getElementById("correctAnswersTotal");
        // var incorrect = document.getElementById("totalWrongGuesses");
        // var guessesLeft = document.getElementById("remainingGuesses");

        // var word = words[randNum];
        var rightWord = [];
        var wrongWord = [];
        var blanks = [];



        //randomize words being quessed
        var word = words[Math.floor(Math.random() * words.length)];
        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_ ";
        }
        console.log(word, answerArray);

        //user sees the lines for each of the letters
        document.getElementById("blanks").innerHTML = answerArray.join(" ");


        //get users guess
        document.addEventListener("keypress", (event) => {
            var keyword = String.fromCharCode(event.keyCode);
            console.log("keyword", keyword);
            if (word.indexOf(keyword) > -1) {
                console.log(true);

                rightWord.push(keyword);
                console.log("rightWord", rightWord);
                blanks[word.indexOf(keyword)] = keyword;

                if (blanks.join("") === word) {
                    alert("You Win");
                } else {
                    wrongWord.push(keyword);
                }
                console.log("wrongWord", wrongWord);

                blanks[word.indexOf(keyword)] = keyword;

            }
        });
        // debugger;


    }
    game();





    // $(document).on('keyup', function () {
    //     console.log(currentWordIndex);
    // });

    // var wordLength = word.length;
    // var underscores = "";
    // for (i = 0; i < wordLength; i++) {
    //     underscores = underscores + "_ "
    // }




    // var remainingGuesses = word.length
    // //how many letters they can guess b4 losing
    // var maxGuesses = 15;
    // //need to keep track of what letters they have guessed
    // var guessedLetters = [];
    // //what word are they guessing?
    // var currentWordIndex;

    // var guessingWord = [];
    // //how many guesses left
    // var remainingGuesses = 0;


});