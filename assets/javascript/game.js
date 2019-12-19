
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




// Setting inital variables for game start.
var guessesRemaining = 3;
var lettersGuessedArray = [];
var losses = 0;
var wins = 0;

// Setting array to ensure userGuess is a valid choice.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "S", "t", "u", "v", "w", "x", "y", "z"]


// Sets starting game message. 
document.getElementById("current-game-message").textContent = "Click New Version to Get Started!";


// Creates a function that will set and display all global variables as initial values and changes the starting game message.
function setupGame() {


        lettersGuessedArray = [];
        guessesReamining = 3
        computerChooseVersion = androidVersions[Math.floor(Math.random() * androidVersions.length)];
        computerChooseVersionArray = computerChooseVersion.split("")
        versionAsDashes = computerChooseVersion.replace(/[a-zA-Z]/g, '-')
        versionAsDashesArray = versionAsDashes.split("")
        return computerChooseVersionArray, versionAsDashesArray, currentVersionText.innerText = versionAsDashesArray.join("  "),
                guessesRemainingText.textContent = guessesRemaining = 3,
                lettersGuessed.innerText = lettersGuessedArray.join("  "),
                lossesText.textContent = losses,
                winsText.textContent = wins,
                document.getElementById("current-game-message").textContent = "Android is an open source operating system beta released in 2007."
}


// Creates a click event for the button new version that will run the function setupGame
//  to set up/display the global variables and sets up an "onkeyup" function to start looking for user input when New Version is clicked. 
document.getElementById("reset").onclick = function () {
        setupGame(),


                // Creating an event that will be executed when the user presses any key.
                document.onkeyup = function (event) {
                        // storing the user's input ket as a variable to be utilized.
                        var userGuess = event.key.toLowerCase();


                        if (guessesRemaining === 1) {

                                // Pushes userGuess to letters already guessed array to ensure last letter guessed will display. 
                                //  sets guesses remainng to 0 (rather than 1), changes game message to reflect loss has occured, 
                                // adds one to losses. Also, ensures now pressing any key will not do anything.
                                lettersGuessedArray.push(userGuess);
                                guessesRemaining = 0
                                document.getElementById("current-game-message").textContent = "YOU HAVE GAINED A LOSS. CLICK NEW VERSION TO PLAY AGAIN"
                                losses++;
                                document.onkeyup = function () { }

                        }


                        // if the userGuess is a letter, and the Android Version the computer chose for the user to guess does not contain the
                        //  letter the user guesses AND the letter has not already been guessed, this code will run.
                        else if (letters.indexOf(userGuess) > -1 && computerChooseVersionArray.includes(userGuess) == false && lettersGuessedArray.includes(userGuess) == false) {

                                // adds the usersGuess into the lettersGuessedArray and decrements guesses remaining by one.
                                lettersGuessedArray.push(userGuess);
                                guessesRemaining--;

                        }


                        // If none of the other above conditions are met, this code will run.

                        // this code iterates through the Android Version the computer has chosen, 
                        // checking if the user guessed letter is inside the Android Version the computer selected.
                        // If this is the case, the index of the matching index of the dashes array is set to userGuess (filled in in the word).

                        else {

                                for (var i = 0; i < computerChooseVersionArray.length; i++) {

                                        if (userGuess === computerChooseVersionArray[i]) {

                                                versionAsDashesArray[i] = userGuess;
                                        }

                                }

                                // This code will run each time a letter is filled in, checking to see if any dashes reamin in the word the user is Guessing. 
                                // Once this is no longer true (all letters are filled in), the current game message will update, 
                                // wins will increase by one, and pressing any key will not do anything.
                                if (versionAsDashesArray.includes("-") == false) {
                                        document.getElementById("current-game-message").textContent = "YAY! YOU HAVE GAINED A WIN! CLICK NEW VERSION TO PLAY AGAIN."
                                        wins++;
                                        document.onkeyup = function () { }

                                }
                        }

                        // Udates the HTML elements inside of the onkeyup function ensuring content changes as game is played. 
                        currentVersionText.textContent = versionAsDashesArray.join("  ")
                        guessesRemainingText.textContent = guessesRemaining;
                        lettersGuessed.innerText = lettersGuessedArray.join("  ");
                        lossesText.textContent = losses;
                        winsText.textContent = wins;

                }


}