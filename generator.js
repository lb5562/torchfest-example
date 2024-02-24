// Define an array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  // Add more quotes here...
];

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = document.getElementById('quoteText');
  quoteText.textContent = quotes[randomIndex];
}
