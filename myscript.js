const quote = [{quote:`"It's not about how hard you fall, it's about how you get back up."`,
                author:'- Unknown'},
            {quote:`"A loss is just an opportunity to learn and grow."`,
            author: '- Unknown'},
            {quote:`"Failure is not the end, but rather the beginning of a new journey."`,
            author: '- Unknown'},
            {quote:`"If you want to achieve greatness stop asking for permission."`,
                author: '- Unknown'},
            {quote:`"It's not over until it's over."`,
                author: '- Yogi Berra'},
            {quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        author:'- Nelson Mandela'},
        {quote:`"The only way to do great work is to love what you do."`,
    author:'- Steve Jobs' },
    {quote:`"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
    author:'- Winston Churchill' },
{quote:`"The only time you really lose is when you don't learn anything from the experience."`,
    author:'- Chuck Norris'},
    {quote:`"The road to success is paved with obstacles, but the journey is worth it in the end."`,
    author:'- Unknown'},
{quote:`"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."`,
    author:'- Christian D. Larson'},
    {quote:`"Success is not measured by what you accomplish, but by the obstacles you overcome."`,
author:' - Unknown' },
    {quote:`"It's not the size of the dog in the fight, it's the size of the fight in the dog."`,
    author:'- Mark Twain' },
    {quote:`"You have to expect things of yourself before you can do them."`,
    author:'- Michael Jordan' },
    {quote:`"Sometimes you win, and sometimes you learn."`,
    author:'- Robert T. Kiyosaki ' }]

  // Select the Reload button element
const reloadButton = document.querySelector('button');

reloadButton.addEventListener('click', function() {
  // Select a random quote from the array
  const randomNumber = Math.floor(Math.random() * quote.length);
  const randomQuote = quote[randomNumber];

  // Update the text content of the blockquote element
  const blockquote = document.querySelector('blockquote');
  blockquote.querySelector('p').textContent = randomQuote.quote;
  blockquote.querySelector('footer').textContent = randomQuote.author;

   // Change the background color of the page
   const body = document.querySelector('body');
   const colors = ['aqua','blue','fuchsia','gray','green','lime','maroon','navy','olive','orange','purple','red','silver','teal','yellow'];
   const randomColor = colors[Math.floor(Math.random() * colors.length)];
   body.style.backgroundColor = randomColor;
});