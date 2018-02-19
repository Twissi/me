var quotes = (function () {

	var quotes, random;

	quotes = [
    "Don't be afraid to give up the good for the great.<br/>John D. Rockefeller",
    "Become friends with people who arent't your age. Hang out with people whose first language isn't the same as yours. Get to know someone who doesn't come from your social class. This is how you see the world. This is how you grow.<br/>Unknown",
    "The greatest prison people live in, is the fear of what other people think.<br/>Unknown",
    "The shortes way to yourself is around the world.<br/>Richard Hoffman",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.<br/>Thomas A. Edison",
    "Start where you are. Use what you have. Do what you can.<br/>Arthur Ashe",
    "Things do not happen. Things are made to happen.<br/>John F. Kennedy",
    "My biggest motivation? Just to keep challenging myself. I see life almost like one long University education that I never had — everyday I’m learning something new.<br/>Richard Branson",
    "If you cannot do great things, do small things in a great way.<br/>Napoleon Hill",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.</br>Albert Schweitzer",
    "Choose a job that you like, and you will never have to work a day in your life.<br/>Confucius",
    "They alwayss say time changes things, but you actually have to change them yourself<br/>Andy Warhol",
    "The Way Get Started Is To Quit Talking And Begin Doing.<br/>Walt Disney",
    "Don't let yesterday take up too much of today.<br/>Will Rogers"
  ]

  return {
    randomQuote: function(){
      random = Math.floor(0 + Math.random() * quotes.length);
      return quotes[random];
    }
  }
})();

export default quotes;