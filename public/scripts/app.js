"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Indecision App
 */

var Header = function Header(props) {
	console.log(props); // result: {title: "test value"}
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			props.title
		),
		props.subtitle && React.createElement(
			"p",
			null,
			props.subtitle
		)
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
var Action = function Action(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"button",
			{ disabled: !props.hasOptions, onClick: props.handlePick },
			"What should I do?"
		)
	);
};

/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
var Options = function Options(props) {
	console.log(props.options);
	return React.createElement(
		"div",
		null,
		props.options.map(function (item) {
			return React.createElement(Option, {
				handleDeleteOption: props.handleDeleteOption,
				key: item,
				optionText: item
			});
		}),
		React.createElement(
			"button",
			{ onClick: props.handleDeleteOptions },
			"Remove All"
		)
	);
};

/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
var Option = function Option(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"p",
			null,
			props.optionText
		),
		React.createElement(
			"button",
			{
				onClick: function onClick(event) {
					props.handleDeleteOption(props.optionText);
				}
			},
			"Remove"
		)
	);
};

/**
 * Extending Component class of React as a child class AddOption,
 * where we define all the actions required in our site.
 */

var AddOption = function (_React$Component) {
	_inherits(AddOption, _React$Component);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this.handleAddOption = _this.handleAddOption.bind(_this);
		// Add the error property inside the state object and set its default value to undefined
		_this.state = {
			error: undefined
		};
		return _this;
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
				return { error: error };
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


var IndecisionApp = function (_React$Component2) {
	_inherits(IndecisionApp, _React$Component2);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this2.handleDeleteOptions = _this2.handleDeleteOptions.bind(_this2);
		_this2.handlePick = _this2.handlePick.bind(_this2);
		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		_this2.handleDeleteOption = _this2.handleDeleteOption.bind(_this2);
		_this2.state = {
			options: props.options
		};
		return _this2;
	}

	// Life cycle method


	_createClass(IndecisionApp, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			console.log('component did mount');
		}

		// Deletes all items.

	}, {
		key: "handleDeleteOptions",
		value: function handleDeleteOptions() {
			this.setState(function () {
				return { options: [] };
			});
		}

		// Deletes a single item.

	}, {
		key: "handleDeleteOption",
		value: function handleDeleteOption(optionToRemove) {

			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {

						/**
       * If the optionToRemove clicked by user is not the item in the array then return true,
       * meaning keep  the item, otherwise return false and remove the item.
       */
						return optionToRemove !== option;
					})
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
				return { options: prevState.options.concat(option) };
			});
		}
	}, {
		key: "render",
		value: function render() {

			// You can define a title constant and use its value as the title value of header tag below.
			var subTitle = 'This is sub title';
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { subtitle: subTitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.length,
					handlePick: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options
					// This will give access to handleDeleteOptions() inside Options component
					, handleDeleteOptions: this.handleDeleteOptions,
					handleDeleteOption: this.handleDeleteOption
				}),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
	options: ['Amy', 'Jacky']
};

var app = document.getElementById('appId');

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Neha', 'Smita'] }), app);
