// Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

// Guess that OS! Android OS's

// Use key events to listen for the letters that your players will type.



// Display the following on the page:


// Press any key to get started!


// Wins: (# of times user guessed the word correctly).


// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.


// As the user guesses the correct letters, reveal them: m a d o _ _ a.




// Number of Guesses Remaining: (# of guesses remaining for the user).


// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).


// After the user wins/loses the game should automatically choose another word and make the user play it.

// 
// 
// 
// 
var directionsText = document.getElementById("directions-Text");
var currentVersionText = document.getElementById("current-Version");
var guessesRemainingText = document.getElementById("guesses-Remaining");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");


// var wordGuessGame = {
var androidVersions = ["cupcake", "donut", "eclair", "froyo", "gingerbread", "honeycomb", "icecreamsandwich", "jellybean", "kitkat", "lollipop", "marshmallow", "nougat", "oreo", "pie"];
var computerChooseVersion = androidVersions[Math.floor(Math.random() * androidVersions.length)];
var versionAsDashes = computerChooseVersion.replace(/[a-zA-Z]/g , '-');

currentVersionText.textContent = "Version: " + versionAsDashes;

document.onkeyup = function(event) {

        var userGuess = event.key


        


console.log(userGuess);

}

console.log(computerChooseVersion);
console.log(versionAsDashes);




// This function is run whenever the user presses a key.
// document.onkeyup = function(event) { 

    // current word is checked for selected key. 

    //If selected key is in current string/word, letter is revealed at correct place in word. 

    //If selected key is not in current string/word, number of guesses goes down by one. 

    //If user gets all the correct letters, guessing the movie title/string, wins goes up by one, a movie clip/image plays or is shown, song plays, and a new string is selected by the computer. 

    // If guesses reaches 0, player loses and a new string is selected by the computer.
