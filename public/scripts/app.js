'use strict';

var visibility = false;

var appEl = document.getElementById('appId');
var toggleDescription = function toggleDescription() {

	// This will set the visibility value true if it was false and vice versa.
	visibility = !visibility;
	renderContent();
};

var renderContent = function renderContent() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h2',
			null,
			'Visibility Toggle'
		),
		React.createElement(
			'button',
			{ onClick: toggleDescription },
			visibility ? 'Hide Details' : 'Show Details'
		),
		visibility && React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'This is description'
			)
		)
	);
	ReactDOM.render(template, appEl);
};
renderContent();
