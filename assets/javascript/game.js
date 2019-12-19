
// var wordGuessGame = {


// Sets up elements in the HTML to be dynamically changed using Javascript
var directionsText = document.getElementById("directions-text")
var currentVersionText = document.getElementById("current-version");
var lettersGuessed = document.getElementById("letters-guessed");
var guessesRemainingText = document.getElementById("guesses-remaining");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");


// An array holding all of the Android Versions we are providing for the user to guess.
var androidVersions = ["cupcake", "donut", "eclair", "froyo", "gingerbread", "honeycomb", "icecreamsandwich", "jellybean", "kitkat", "lollipop", "marshmallow", "nougat", "oreo", "pie"];

// Allowing the computer to randomly choose the version the user will try to guess.
var computerChooseVersion = androidVersions[Math.floor(Math.random() * androidVersions.length)]



// Storing the version chosen by the computer into an array for easier comparisons later.
var computerChooseVersionArray = computerChooseVersion.split("");

// Storing the verison chosen by the computer as a string of dashes.
var versionAsDashes = computerChooseVersion.replace(/[a-zA-Z]/g, '-');

// Storing the string of dashes as an array.
var versionAsDashesArray = versionAsDashes.split("")

// A function that resets the word/version the user is guessing, sets guesses remaining to 3, and set 



console.log(computerChooseVersion)



// Setting inital variables for game start.
var guessesRemaining = 3;
var lettersGuessedArray = [];
var losses = 0;
var wins = 0;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "S", "t", "u", "v", "w", "x", "y", "z"]


function resetGame () {
        lettersGuessedArray = [];
        guessesReamining = 3
        versionAsDashesArray = versionAsDashes.split("")
}


// Setting message user will be paying attention to at game start.
document.getElementById("current-game-message").textContent = "Press any Letter to Get Started!";

// Creating an event that will be executed when the user presses any key.
document.onkeyup = function (event) {

        // Hiding the message user first saw providing directions for the game.
        document.getElementById("current-game-message").textContent = "";

        // storying the user's input ket as a variable to be utilized.
        var userGuess = event.key.toLowerCase();

       
        if (guessesRemaining === 0) {
                    
                // Adds one to losses, resets guessesRemaining to 3, resets the Letters Already Guessed,
                //  alerts the user they have lost and to try again.
                document.getElementById("current-game-message").textContent = "YOU ARE OUT OF GUESSES. PRESS ANY KEY TO PLAY AGAIN"
                losses++;
                document.onkeyup = resetGame()

                }
       
        // if the userGuess is a letter, and the Android Version the computer chose for the user to guess does not contain the
        //  letter the user guesses AND the letter has not already been guessed, this code will run.
        else if (letters.indexOf(userGuess) > -1 && computerChooseVersionArray.includes(userGuess) == false && lettersGuessedArray.includes(userGuess) == false) {
              
                // adds the usersGuess into the lettersGuessedArray and decrements guesses remaining by one.
                lettersGuessedArray.push(userGuess);
                guessesRemaining--;

        }


//         console.log(userGuess);
//         // console.log(letters);
//         // console.log(letters.test(userGuess));
//         console.log(computerChooseVersionArray.includes(userGuess));
//         console.log(lettersGuessedArray.includes(userGuess));
//         console.log(lettersGuessedArray);

//                 // if the above conditions are met and guessesRemaining = 0, this code will run.
//                 // if (guessesRemaining === 0) {
                    
//                 //         // Adds one to losses, resets guessesRemaining to 3, resets the Letters Already Guessed,
//                 //         //  alerts the user they have lost and to try again.
//                 //         document.getElementById("current-game-message").textContent = "YOU ARE OUT OF GUESSES. PRESS ANY KEY TO PLAY AGAIN"
//                 //         losses++;
//                 //         resetGame ()

//                 //         }




// // }








        // If none of the other above conditions are met, this code will run.
        else {

                // this code iterates through the Android Version the computer has chosen, 
                // checking if the user guessed letter is inside the Android Version the computer selected.
                // If this is the case, the index of the matching index of the dashes array is set to userGuess, or filled in in the word.
                for (var i = 0; i < computerChooseVersionArray.length; i++) {
                        if (computerChooseVersionArray[i] === userGuess) {
                                versionAsDashesArray[i] = userGuess;

                                
                                console.log(versionAsDashesArray)
                                console.log(versionAsDashesArray.includes("-"))
                                console.log(computerChooseVersion)
                                console.log(androidVersions)


                                if (versionAsDashesArray.includes("-") == false) {
                                        wins++;
                                        computerChooseVersion = androidVersions[Math.floor(Math.random() * androidVersions.length)]
                                        guessesRemaining = 3;
                                       
                                       
                                        console.log(versionAsDashesArray)
                                        console.log(versionAsDashesArray.includes("-"))
                                        console.log(computerChooseVersion)
                                        console.log(androidVersions)
                                }

                        }

                }
        }




        currentVersionText.textContent = versionAsDashesArray.join("  ")
        guessesRemainingText.textContent = guessesRemaining;
        lettersGuessed.innerText = lettersGuessedArray.join("  ");
        lossesText.textContent = losses;
        winsText.textContent = wins;
}






currentVersionText.textContent = versionAsDashesArray.join("  ")
guessesRemainingText.textContent = guessesRemaining;
lossesText.textContent = losses;
winsText.textContent = wins;










//         }
// console.log(computerChooseVersion)
// console.log(computerChooseVersionArray)

// console.log(userGuess);

// console.log(computerChooseVersion.indexOf(userGuess));

// console.log(computerChooseVersionArray.indexOf(userGuess));

// console.log(lettersGuessed);
// console.log(lettersGuessed.textContent); 

// }

// lettersGuessed.textContent = lettersGuessed;




// This function is run whenever the user presses a key.
// document.onkeyup = function(event) { 

    // current word is checked for selected key. 

    //If selected key is in current string/word, letter is revealed at correct place in word. 

    //If selected key is not in current string/word, number of guesses goes down by one. 

    //If user gets all the correct letters, guessing the movie title/string, wins goes up by one, a movie clip/image plays or is shown, song plays, and a new string is selected by the computer. 

    // If guesses reaches 0, player loses and a new string is selected by the computer