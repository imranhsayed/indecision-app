"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Indecision App
 */

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
					this.props.subtitle
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
					{ disabled: !this.props.hasOptions, onClick: this.props.handlePick },
					"What should I do?"
				)
			);
		}
	}]);

	return Action;
}(React.Component);

/**
 * Extending Component class of React as a child class Options,
 * where we define all the actions required in our site.
 */


var Options = function (_React$Component3) {
	_inherits(Options, _React$Component3);

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
			console.log(this.props.options);
			return React.createElement(
				"div",
				null,
				this.props.options.map(function (item) {
					return React.createElement(Option, { key: item, optionText: item });
				}),
				React.createElement(
					"button",
					{ onClick: this.props.handleDeleteOptions },
					"Remove All"
				)
			);
		}
	}]);

	return Options;
}(React.Component);

var Option = function (_React$Component4) {
	_inherits(Option, _React$Component4);

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
					this.props.optionText
				)
			);
		}
	}]);

	return Option;
}(React.Component);

/**
 * Extending Component class of React as a child class AddOption,
 * where we define all the actions required in our site.
 */


var AddOption = function (_React$Component5) {
	_inherits(AddOption, _React$Component5);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this5.handleAddOption = _this5.handleAddOption.bind(_this5);
		// Add the error property inside the state object and set its default value to undefined
		_this5.state = {
			error: undefined
		};
		return _this5;
	}

	_createClass(AddOption, [{
		key: "handleAddOption",
		value: function handleAddOption(event) {
			event.preventDefault();

			/**
    * event.target.elements contains the form values submitted as an object.
    * The form input elements can be accessed by their name as their properties in this object.
    * @type {string}
    */
			var inputVal = event.target.elements.name.value.trim();

			/**
    * Calling the handleAddOption() of IndecisionApp class set as property value of handleAddOption in AddOption tag.
    * Also store if the error value if returned by handleAddOption() of IndecisionApp
    * @type {*|void|string}
    */
			var error = this.props.handleAddOption(inputVal);

			// If there is error change the state of error property to the value of the error.
			this.setState(function () {
				return {
					error: error
				};
			});
		}

		/**
   * Whatever is returned by render() here will be available in the JSX expression to <AddOption /> tag.
   */

	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				this.state.error && React.createElement(
					"p",
					null,
					this.state.error
				),
				React.createElement(
					"form",
					{ action: "/", method: "POST", onSubmit: this.handleAddOption },
					React.createElement(
						"label",
						{ htmlFor: "name-input" },
						"Enter Name",
						React.createElement("input", { type: "text", id: "name-input", name: "name" })
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

/**
 * Create a custom Indecision class component that extends react's component class.
 * Here we define variables like title,subtitle and options and pass it to the Header and Options classes by
 * defining keys title and subtitle and setting their values to these constants, key value pairs will be converted
 * into object key value pairs by react and will be available to Header and Options classes as this.props.title and this.props.subtitle.
 */


var IndecisionApp = function (_React$Component6) {
	_inherits(IndecisionApp, _React$Component6);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this6 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this6.handleDeleteOptions = _this6.handleDeleteOptions.bind(_this6);
		_this6.handlePick = _this6.handlePick.bind(_this6);
		_this6.handleAddOption = _this6.handleAddOption.bind(_this6);
		_this6.state = {
			options: []
		};
		return _this6;
	}

	_createClass(IndecisionApp, [{
		key: "handleDeleteOptions",
		value: function handleDeleteOptions() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: "handlePick",
		value: function handlePick() {
			var arrayLength = this.state.options.length;
			var randomNum = Math.floor(Math.random() * arrayLength);
			alert(this.state.options[randomNum]);
		}
	}, {
		key: "handleAddOption",
		value: function handleAddOption(option) {

			// Set validation : If user has not entered any value return an error string.
			if (!option) {
				return 'Please enter a value';
				// if the option value entered already exists in the option array
			} else if (this.state.options.indexOf(option) > -1) {
				return 'Option already exists';
			}

			this.setState(function (prevState) {
				return {
					options: prevState.options.concat(option)
				};
			});
		}
	}, {
		key: "render",
		value: function render() {

			// You can define a title constant and use its value as the title value of header tag below.
			var title = 'My Title';
			var subTitle = 'This is sub title';
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { title: title, subtitle: subTitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.length,
					handlePick: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options
					// This will give access to handleDeleteOptions() inside Options component
					, handleDeleteOptions: this.handleDeleteOptions
				}),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var app = document.getElementById('appId');

ReactDOM.render(React.createElement(IndecisionApp, null), app);
