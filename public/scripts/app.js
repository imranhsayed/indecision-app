'use strict';

var count = 0;
var addOne = function addOne() {
	count++;
	// Each time addOne function is called renderCounterApp() creates a new template with current count values and adds to the dom
	renderCounterApp();
};
var minusOne = function minusOne() {
	count--;
	renderCounterApp();
};
var reset = function reset() {
	count = 0;
	renderCounterApp();
};

var divEl = document.getElementById('appId');

var renderCounterApp = function renderCounterApp() {
	var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Count: ',
			count
		),
		React.createElement(
			'button',
			{ onClick: addOne },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: minusOne },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: reset },
			'Reset'
		)
	);
	ReactDOM.render(templateTwo, divEl);
};
// Called this so that our template gets rendered when the page is loaded
renderCounterApp();
