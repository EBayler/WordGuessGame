$(document).ready(function () {


    var words = [
        "the martian",
        "the humans",
        "hatchet",
        "watchmen",
        "maus",
        "sunstone",
        "fight club",
        "every day",
        "saga",
        "sabriel"
    ]



    function game() {

        var GamesWon = 0;
        // var lettersGuessedIncorrectly = 0;
        var maxErrors = 15;
        var lettersOfWord = [];
        var wrongLetters = [];
        var blanks = [];



        //randomize words being guessed
        var computerGuess = words[Math.floor(Math.random() * words.length)];
        console.log("this is our word ", computerGuess);

        lettersOfWord = computerGuess.split("");
        blanks = lettersOfWord.length;

        //convert a string to array

        var answerArray = [];

        for (var i = 0; i < computerGuess.length; i++) {
            answerArray[i] = "_ ";
        }
        console.log("computerGuess", answerArray);

        var remainingLetters = computerGuess.length;

        //user sees the lines for each of the letters
        



        function matchGuessToAnswer(userGuess) {
            var computerGuessArray = computerGuess.split("");
            for (var i = 0; i < computerGuessArray.length; i++) {
                if (userGuess === computerGuessArray[i]) {
                    answerArray[i] = userGuess;
                    document.getElementById("blanks").innerHTML = answerArray.join(" ");
                }

            }
            if (computerGuess.indexOf(userGuess) === -1) {
                maxErrors--;
                console.log('maxErrors', maxErrors);
                wrongLetters.push(userGuess);
                $("#wrongGuesses").html("Incorrect: " + wrongLetters.join(""));
             
            }            

            //Is working!!
            $("#remainingGuesses").html("Guesses Left: " + maxErrors);
        }
        

        // function 
        //get users guess
        document.onkeyup = function (event) {
            console.log(event)
            // Determines which key was pressed.

            var userGuess = event.key;
            console.log("userGuessEventKey", event.key);

            matchGuessToAnswer(userGuess);
        }


        //userGuess needs to populate in the answer if it is correct and replace dashes 

        //need answer to mark a space when the title answer has more than one word in it

        // || lists letter used that are not in the computerGuess (in Incorrect?) && takes away i-- from number of guesses left 

        //need to mark when a letter has already been selected or rather is removed from possible answers so it doesn't count against their guessing 
        //and also removes all possible dash occurrences of that letter

        //display full word at the end so they can see the title...either because they guessed it correctly or it shows the right answer if they used all of their guesses

        //move to next random word after they have lost or won w/o reloading the page
    }



    game();


  
});