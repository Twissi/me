var quotes = (function () {

	var quotes;

	quotes = [
      "Don't be afraid to give up the good for the great.<br/>John D. Rockefeller",
      "Become friends with people who arent't your age. Hang out with people whose first language isn't the same as yours. Get to know someone who doesn't come from your social class. This is how you see the world. This is how you grow.<br/>Unknown",
      "The greatest prison people live in, is the fear of what other people think.<br/>Unknown",
      "The shortes way to yourself is around the world.<br/>Richard Hoffman",
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.<br/>Thomas A. Edison",
      "Start where you are. Use what you have. Do what you can.<br/>Arthur Ashe",
      "Things do not happen. Things are made to happen.<br/>John F. Kennedy",
    ]

    return {
    	randomQuote: function(){
    		random = Math.floor(0 + Math.random() * quotes.length);
    		return quotes[random];
    	}
    }
})();