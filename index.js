function startGame() {
    let firstCard = Math.floor(Math.random() * 12 + 1);
    console.log(firstCard);
    let secondCard = Math.floor(Math.random() * 12 + 1);
    console.log(secondCard);
    let thirdCard = Math.floor(Math.random() * 12 + 1);
    console.log(thirdCard);
    let hasBlackJack = false;
    let isAlive = true;
    let message = "";

    let sum = firstCard + secondCard + thirdCard;

    if (sum < 21 && sum >= 0) {
        message = "Do you want to draw again?";
        document.getElementById("cards").textContent =
            "The cards you picked : " +
            firstCard +
            " " +
            secondCard +
            " " +
            thirdCard;
    } else if (sum === 21) {
        message = "Congrats! You've got blackjack";
        document.getElementById("cards").textContent =
            "The cards you picked : " +
            firstCard +
            " " +
            secondCard +
            " " +
            thirdCard;
        hasBlackJack = true;
        console.log(hasBlackJack);
    } else {
        message = "Bad news bud, your money is mine";
        document.getElementById("cards").textContent =
            "The cards you picked : " +
            firstCard +
            " " +
            secondCard +
            " " +
            thirdCard;
        isAlive = false;
        console.log(isAlive);
    }

    document.getElementById("sum").textContent = message;
}

//the code below demonstrates the use of another way to interact with the dom
//Queryselector
// This method is more dynamic and general

function test() {
    let s = document.querySelector("#testBody");
    s.textContent = "Hellow, it worked!";
}

//document.querySelector can also be used with classes and whole elements, not just ids. It makes way for many other kinds of selectors to be used as opposed to the getElementBy method, which requires specification of the kind of element being used.

let sent = ["Hello", "my", "name", "is", "Joey"];
let greet = document.getElementById("greet");
for (let i = 0; i < sent.length; i++) {
    greet.textContent += " " + sent[i];
}

//this is unrelated code due to lack of another workplace at the time.
let fruit = ["orange", "apple", "orange", "apple", "orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

let newApple = fruit.filter((num) => num === "apple");

let newOrange = fruit.filter((num) => num === "orange");
console.log(newOrange);
console.log(newApple);

console.log("apple");
console.log("mango");

let pack = [1, 2, 3, 4, 5];

let evenNumbers = pack.filter((num) => num % 2 === 0);
console.log(evenNumbers);