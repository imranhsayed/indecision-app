"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Extending the Component class of React, that gives us component feature of react.
 * React component class requires one of its method to be called, called render().
 */
var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: "render",


		/**
   * Whatever is returned by render() here will be available in the JSX expression to <Header /> tag.
   */
		value: function render() {
			console.log(this.props); // result: {title: "test value"}
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					this.props.title
				),
				React.createElement(
					"p",
					null,
					"This is header description"
				)
			);
		}
	}]);

	return Header;
}(React.Component);

/**
 * Extending Component class of React as a child class Action,
 * where we define all the actions required in our site.
 */


var Action = function (_React$Component2) {
	_inherits(Action, _React$Component2);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: "render",

		/**
   * Whatever is returned by render() here will be available in the JSX expression to <Action /> tag.
   */
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					null,
					"What should I do?"
				)
			);
		}
	}]);

	return Action;
}(React.Component);

var Option = function (_React$Component3) {
	_inherits(Option, _React$Component3);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"p",
					null,
					"This is one option"
				)
			);
		}
	}]);

	return Option;
}(React.Component);

/**
 * Extending Component class of React as a child class Options,
 * where we define all the actions required in our site.
 */


var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	function Options() {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
	}

	_createClass(Options, [{
		key: "render",

		/**
   * Whatever is returned by render() here will be available in the JSX expression to <Options /> tag.
   */
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(Option, null)
			);
		}
	}]);

	return Options;
}(React.Component);

/**
 * Extending Component class of React as a child class AddOption,
 * where we define all the actions required in our site.
 */


var AddOption = function (_React$Component5) {
	_inherits(AddOption, _React$Component5);

	function AddOption() {
		_classCallCheck(this, AddOption);

		return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
	}

	_createClass(AddOption, [{
		key: "render",

		/**
   * Whatever is returned by render() here will be available in the JSX expression to <AddOption /> tag.
   */
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"form",
					{ action: "/" },
					React.createElement(
						"label",
						{ htmlFor: "" },
						React.createElement("input", { type: "text" })
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component6) {
	_inherits(IndecisionApp, _React$Component6);

	function IndecisionApp() {
		_classCallCheck(this, IndecisionApp);

		return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
	}

	_createClass(IndecisionApp, [{
		key: "render",
		value: function render() {

			// You can define a title constant and use its value as the title value of header tag below.
			var title = 'My Title';
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { title: title }),
				React.createElement(Action, null),
				React.createElement(Options, null),
				React.createElement(AddOption, null)
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var app = document.getElementById('appId');

ReactDOM.render(React.createElement(IndecisionApp, null), app);
