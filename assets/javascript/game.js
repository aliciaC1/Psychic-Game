
    //array of letter choices for computer //
    // var computerChoices = ["a", "b", "c"]; (test)
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y","z"]

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //variables set to starting values //
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guesses = [];
  



         document.onkeyup = function(event) {
          //  var userText = document.getElementById("user-text");
          //  userText.textContent = event.key;
            var userText = event.key;
            guesses.push(userText);
           var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
           

           
           if ((userText == computerGuess) && (guessesLeft >0)) {
             wins++;
             alert('Yay, you won!');
             guessesLeft = 10;
             computerGuess.length = 0;
             guesses.length = 0;

           }

           else if (guessesLeft < 1) {
             alert('Sorry, you lost! Play again!');
             losses ++;
             guesses.length = 0; 
             guessesLeft = 10;

           }

           else (userText !== computerGuess); {
             guessesLeft--;
             
           }

           var html =
           "<p>Wins: " + wins + "</p>" +
           "<p>Losses: " + losses + "</p>" +
           "<p>Guesses left: " + guessesLeft + "</p>" +
           "<p>Your guesses so far: " + guesses + "</p>";
  
            document.querySelector("#game").innerHTML = html;

    }
  


  




