import React from 'react';
import Option from './Option';
/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
const Options = ( props ) => (
	<div>
		{/* props.options will contain the options array defined in Indecision class and we are iterating it over to display each item in para tag
				 Then we are we are passing the item to the Option tag as optionText key-value pair, which will then make it
				 available in Option functional based component as props.optionText*/}
		{ props.options.map( ( item ) => (
				<Option
					handleDeleteOption={ props.handleDeleteOption }
					key={ item }
					optionText={ item }
				/>
			)
		) }

		{/* When the button is clicked it will call the handleDeleteOptions() set as a
				value of handleDeleteOptions property inside Options tag of IndecisionApp class*/}
		<button onClick={ props.handleDeleteOptions } >Remove All</button>
	</div>
);

export default Options;