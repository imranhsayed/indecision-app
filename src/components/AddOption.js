import React from 'react';

/**
 * Extending Component class of React as a child class AddOption,
 * where we define all the actions required in our site.
 */
export default class AddOption extends React.Component {

	constructor( props ) {
		super( props );
		this.handleAddOption = this.handleAddOption.bind( this );
		// Add the error property inside the state object and set its default value to undefined
		this.state = {
			error: undefined
		};
	}

	handleAddOption( event ) {
		event.preventDefault();
		console.log( 'test' );

		/**
		 * event.target.elements contains the form values submitted as an object.
		 * The form input elements can be accessed by their name as their properties in this object.
		 * @type {string}
		 */
		const inputVal = event.target.elements.name.value.trim();

		/**
		 * Calling the handleAddOption() of IndecisionApp class set as property value of handleAddOption in AddOption tag.
		 * Also store if the error value if returned by handleAddOption() of IndecisionApp
		 * @type {*|void|string}
		 */
		const error = this.props.handleAddOption( inputVal );

		// If there is error change the state of error property to the value of the error.
		this.setState( () => ( { error: error } ) );

		// Make the input box blank once the form is submitted.
		event.target.elements.name.value = '';
	}

	/**
	 * Whatever is returned by render() here will be available in the JSX expression to <AddOption /> tag.
	 */
	render() {
		return (
			<div>
				{ this.state.error && <p>{ this.state.error }</p>  }
				<form action="/" method="POST" onSubmit={ this.handleAddOption }>
					<label htmlFor="name-input">Enter Name
						<input type="text" id="name-input" name="name"/>
					</label>
				</form>
			</div>
		);
	}
}