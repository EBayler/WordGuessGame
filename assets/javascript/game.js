$(document).ready(function () {


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

        var GamesWon = 0;
       // var lettersGuessedIncorrectly = 0;
        var maxErrors = 15;
        var rightLetters = [];
        var wrongLetters = [];
        var blanks = [];
        


        //randomize words being guessed
        var computerGuess = words[Math.floor(Math.random() * words.length)];
        console.log("this is our word ", computerGuess);

        //convert a string to array

        var answerArray = [];

        for (var i = 0; i < computerGuess.length; i++) {
            answerArray[i] = "_ ";
        }
        console.log("computerGuess", answerArray);

        var remainingLetters = computerGuess.length;

        //user sees the lines for each of the letters
        document.getElementById("blanks").innerHTML = answerArray.join(" ");



        function matchGuessToAnswer(userGuess) {
            var computerGuessArray = computerGuess.split("");
            for (var i = 0; i < computerGuessArray.length; i++) {
                if (userGuess === computerGuessArray[i]) {
                    answerArray[i] = userGuess;
                }
              
            }
              if (computerGuess.indexOf(userGuess) === -1) {
                  maxErrors--;
                  console.log('maxErrors', maxErrors);
                  

            }
            //will only record one letter...
            $("#wrongGuesses").html("Incorrect:" + event.key);

            //Is working!!
            $("#remainingGuesses").html("Guesses Left:" + maxErrors);
        }

       // function 
        //get users guess
        document.onkeyup = function (event) {
            console.log(event)
            // Determines which key was pressed.

            var userGuess = event.key;
            console.log("userGuessEventKey", event.key);

            matchGuessToAnswer(userGuess);

           // does not work: document.getElementById('wrongGuess').innerText = event.key;
            
            
            //userGuess needs to populate in the answer if it is correct and replace dashes 

            //need answer to mark a space when the title answer has more than one word in it

            // || lists letter used that are not in the computerGuess (in Incorrect?) && takes away i-- from number of guesses left 

            //need to mark when a letter has already been selected or rather is removed from possible answers so it doesn't count against their guessing 
            //and also removes all possible dash occurrences of that letter

            //display full word at the end so they can see the title...either because they guessed it correctly or it shows the right answer if they used all of their guesses

            //move to next random word after they have lost or won w/o reloading the page


        }

    }



    game();

    // var wins = document.getElementById("correctAnswersTotal");
    // var incorrect = document.getElementById("totalWrongGuesses");
    // var guessesLeft = document.getElementById("remainingGuesses");

    // var word = words[randNum];
});


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




// //randomize words being quessed
// var randomWord = words[Math.floor(Math.random() * words.length)];
// var chosenWord = words[randomWord]
// var rightWord = [];
// var wrongWord = [];
// var answerArray = [];

// for (var i = 0; i < chosenWord.length; i++) {
//     answerArray[i] = "_ ";
// }
// console.log(word,
//     answerArray); //user
// sees
// the
// lines
// for
// each
//     of
//     the
// letters
// document.getElementById("blanks").innerHTML = answerArray.join(" ");

// //get users guess
// document.addEventListener("
//     keypress ",
//     (event) => {
//         var keyword = String.fromCharCode(event.keyCode);
//         console.log("keyword", keyword);

//         if (chosenWord.indexOf(keyword) > -1) {
//             console.log(true);

//             rightWord.push(keyword);
//             console.log("rightWord", rightWord);

//             blanks[chosenWord.indexOf(keyword)] = keyword;

//             if (blanks.join("") === word) {
//                 alert("You Win");
//             }

//             wrongWord.push(keyword);
//             console.log("wrongWord", wrongWord);

//             blanks[chosenWord.indexOf(keyword)] = keyword;

//             // if ( )
//             // }
//         }



//     });