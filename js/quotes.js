const quotes = [
{
    quote: "Im not a great programmer. Im just a good programmer with great habits.",
    author: "Kent Beck",
},
{
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
},
{
    quote: "You must do the things you think you cannot do.",
    author: "Eleanor Roosevelt",
},
{
    quote: "Failure is another stepping-stone to greatness.",
    author:"Oprah Winfrey",
},
{
    quote: "Success isn't about how much money you make. It's about the difference you make in people's lives.",
    author: "Michelle Obama",
},
{
    quote: "Be bold, be courageous, be your best.",
    author: "Gabrielle Giffords​",
},
{
    quote:  "Luck is what happens when preparation meets opportunity.",
    author: "Seneca",
},
{
    quote: "If you want the rainbow, you gotta put up with the rain.",
    author:"Dolly Parton",
},
{
    quote: "Every moment wasted looking back keeps us from moving forward.",
    author: "Hillary Clinton",
},
{
    quote: "Miracles happen every day. Change your perception of what a miracle is and you'll see them all around you.",
    author: "Jon Bon Jovi",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;























