// Array of random quotes
const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Act as if what you do makes a difference. It does. - William James",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

// Event listener for the button
document.getElementById('generate-btn').addEventListener('click', generateQuote);
