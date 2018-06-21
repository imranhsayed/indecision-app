import React from 'react';

/**
 * Indecision App
 */

const Header = ( props ) => {
	console.log( props ); // result: {title: "test value"}
	return (
		<div>
			<h1>{ props.title }</h1>
			{ props.subtitle && <p>{ props.subtitle }</p> }
		</div>
	);
};

export default Header;

Header.defaultProps = {
	title: 'Indecision'
};