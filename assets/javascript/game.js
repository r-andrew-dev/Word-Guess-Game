
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

console.log(computerChooseVersion)

// Storing the version chosen by the computer into an array for easier comparisons later.
var computerChooseVersionArray = computerChooseVersion.split("");

console.log(computerChooseVersionArray)

// Storing the verison chosen by the computer as a string of dashes.
var versionAsDashes = computerChooseVersion.replace(/[a-zA-Z]/g, '-');

console.log(versionAsDashes)

// Storing the string of dashes as an array.
var versionAsDashesArray = versionAsDashes.split("")

console.log(versionAsDashesArray)



// Setting inital variables for game start.
var guessesRemaining = 3;
var lettersGuessedArray = [];
var losses = 0;
var wins = 0;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "S", "t", "u", "v", "w", "x", "y", "z"]

var inProgress = false;

function setupGame () {

        lettersGuessedArray = [];
        guessesReamining = 3
        computerChooseVersion = androidVersions[Math.floor(Math.random() * androidVersions.length)];
        computerChooseVersionArray = computerChooseVersion.split("")
        versionAsDashes = computerChooseVersion.replace(/[a-zA-Z]/g, '-')
        versionAsDashesArray = versionAsDashes.split("")
        return computerChooseVersionArray, versionAsDashesArray, currentVersionText.textContent = versionAsDashesArray.join("  "),
        guessesRemainingText.textContent = guessesRemaining = 3,
        lettersGuessed.innerText = lettersGuessedArray.join("  "),
        lossesText.textContent = losses,
        winsText.textContent = wins,
        document.getElementById("current-game-message").textContent = "Android is an open source operating system beta released in 2007."
}



document.getElementById("current-game-message").textContent = "Click New Version to Get Started!";
document.getElementById("reset").onclick = function () {setupGame()};


// Creating an event that will be executed when the user presses any key.
document.onkeyup = function (event) {

        // storying the user's input ket as a variable to be utilized.
        var userGuess = event.key.toLowerCase();

       
        if (guessesRemaining === 1) {
                    
                // Adds one to losses, resets guessesRemaining to 3, resets the Letters Already Guessed,
                //  alerts the user they have lost and to try again.
                guessesRemaining = 0
                document.getElementById("current-game-message").textContent = "YOU HAVE GAINED A LOSS. CLICK NEW VERSION TO PLAY AGAIN"
                losses++;
                // document.onkeyup = function () {
                // }

        }

       
        // if the userGuess is a letter, and the Android Version the computer chose for the user to guess does not contain the
        //  letter the user guesses AND the letter has not already been guessed, this code will run.
        else if (letters.indexOf(userGuess) > -1 && computerChooseVersionArray.includes(userGuess) == false && lettersGuessedArray.includes(userGuess) == false) {
              
                // adds the usersGuess into the lettersGuessedArray and decrements guesses remaining by one.
                lettersGuessedArray.push(userGuess);
                guessesRemaining--;

        }


        // console.log(userGuess);
        // console.log(letters);
        // console.log(letters.test(userGuess));
        // console.log(computerChooseVersionArray.includes(userGuess));
        // console.log(lettersGuessedArray.includes(userGuess));
        // console.log(lettersGuessedArray)

        // If none of the other above conditions are met, this code will run.
        
                 // this code iterates through the Android Version the computer has chosen, 
                // checking if the user guessed letter is inside the Android Version the computer selected.
                // If this is the case, the index of the matching index of the dashes array is set to userGuess, or filled in in the word.
        
        
        else {    
               
                for (var i = 0; i < computerChooseVersionArray.length; i++) {
     
                   if (userGuess === computerChooseVersionArray[i]) {
    
                                versionAsDashesArray[i] = userGuess;
                                }

                        }
        
                        
                   if (versionAsDashesArray.includes("-") == false) {
                                 document.getElementById("current-game-message").textContent = "YAY! YOU HAVE GAINED A WIN! CLICK NEW VERSION TO PLAY AGAIN."
                                  wins++;
                                //  document.onkeyup = function () { }

                        }


                console.log(versionAsDashesArray);
                console.log(versionAsDashesArray.includes("-"));
                console.log(computerChooseVersionArray);
                }

        currentVersionText.textContent = versionAsDashesArray.join("  ")
        guessesRemainingText.textContent = guessesRemaining;
        lettersGuessed.innerText = lettersGuessedArray.join("  ");
        lossesText.textContent = losses;
        winsText.textContent = wins;

        }







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