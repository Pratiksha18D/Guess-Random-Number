const max = prompt("Enter any number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess === "quit") {
        document.getElementById("result").innerText = "🚪 You quit the game!";
        break;
    }
    if (parseInt(guess) === random) {
        document.getElementById("result").innerText = 
            `You are right! Congrats!! The random number was ${random}`;
        break;
    } else if (guess < random) {
        guess = prompt("Your guess was too small. Please try again");
    } else {
        guess = prompt("Your guess was too large. Please try again");
    }
}
