const quotes = [
  {
    quote: 'When you have faults, do not fear to abandon them.',
    author: 'Confucius'
  },
  {
    quote: 'This too shall pass.',
    author: 'Et hoc transibit'
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller'
  },
  {
    quote: 'All you need in this life is ignorance and confidence, then success is sure.',
    author: 'Mark Twain'
  },
  {
    quote: 'Life is a mountain. Your goal is to find your path, not to reach the top.',
    author: 'Maxime Lagacé'
  },
  {
    quote: 'Despite the forecast, live like it’s spring.',
    author: 'Lilly Pulitzer'
  },
  {
    quote: 'Change the world by being yourself.',
    author: 'Amy Poehler'
  }
];

const quote = document.querySelector('#quote p:first-child');
const author = document.querySelector('#quote p:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
