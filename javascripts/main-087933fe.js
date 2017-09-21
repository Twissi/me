import 'main.css.scss';

import Smoothscroll from 'smooth-scroll';
import quotes from './quotes';
import pattern from './triangle_pattern';

function transitionEndEventName () {
    var i,
        undefined,
        el = document.createElement('div'),
        transitions = {
            'transition':'transitionend',
            'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
        };

    for (i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
            return transitions[i];
        }
    }
}

var scroll = new Smoothscroll('a[href*="#"]', {
	speed: 900, // Integer. How fast to complete the scroll in milliseconds
	easing: 'easeInOutQuart', // Easing pattern to use
});

window.onload = function(){
	pattern.generate("triangleBackground");
	// add animation class for zooming
	document.getElementById('secretMessage').className = "";
	// add quote
	document.getElementById('triangleBackground').className = "fadein";
	// remove animation class for preloading

	// after transition add random text
	setTimeout(function(){document.getElementById('secretMessage').children[0].innerHTML = quotes.randomQuote()}, 2000);

	//transition callback is not working
	var transitionEnd = transitionEndEventName();
	document.getElementById('triangleBackground').addEventListener(transitionEnd, function( event ) {
     	document.getElementById('secretMessage').children[0].innerHTML = quotes.randomQuote();
     }, false);

	// start random animation
    setTimeout(pattern.randomShow, 2000);
};

window.onresize = function() {
	pattern.update("triangleBackground");
};
