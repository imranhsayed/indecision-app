import React from 'react';

/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
const Option = ( props ) => (
	<div>
		{/* The optionText key value set inside the Options functional based component, is now available here. */}
		{ <p>{ props.optionText }</p> }
		{<button
			onClick={ ( event ) => {
				props.handleDeleteOption( props.optionText )
			}}
		>Remove</button>
		}
	</div>
);
export default Option;