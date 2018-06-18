/**
 * Extending the Component class of React, that gives us component feature of react.
 * React component class requires one of its method to be called, called render().
 */
class Header extends React.Component {

	/**
	 * Whatever is returned by render() here will be available in the JSX expression to <Header /> tag.
	 */
	render() {
		console.log( this.props ); // result: {title: "test value"}
		return (
			<div>
				<h1>{ this.props.title }</h1>
				<p>{ this.props.subtitle }</p>
			</div>
		);
	}
}

/**
 * Extending Component class of React as a child class Action,
 * where we define all the actions required in our site.
 */
class Action extends React.Component {
	/**
	 * Whatever is returned by render() here will be available in the JSX expression to <Action /> tag.
	 */
	render() {
		return (
			<div>
				<button>What should I do?</button>
			</div>
		);
	}
}

class Option extends React.Component {
	render () {
		return (
			<div>
				<p>This is one option</p>
			</div>
		);
	}
}

/**
 * Extending Component class of React as a child class Options,
 * where we define all the actions required in our site.
 */
class Options extends React.Component {
	/**
	 * Whatever is returned by render() here will be available in the JSX expression to <Options /> tag.
	 */
	render() {
		return (
			<div>
				<Option />
			</div>
		);
	}
}

/**
 * Extending Component class of React as a child class AddOption,
 * where we define all the actions required in our site.
 */
class AddOption extends React.Component {
	/**
	 * Whatever is returned by render() here will be available in the JSX expression to <AddOption /> tag.
	 */
	render() {
		return (
			<div>
				<form action="/">
					<label htmlFor=""><input type="text"/></label>
				</form>
			</div>
		);
	}
}

class IndecisionApp extends React.Component {
	render() {

		// You can define a title constant and use its value as the title value of header tag below.
		const title = 'My Title';
		const subTitle = 'This is sub title';
		return (
			<div>
				<Header title={title}/>
				<Action />
				<Options />
				<AddOption />
			</div>
		);
	}
}

const app = document.getElementById( 'appId' );

ReactDOM.render( <IndecisionApp/>, app );