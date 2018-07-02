import React from 'react';

/**
 * Indecision App
 */

const Header = ( props ) => (
	<div className="header">
		<h1>{ props.title }</h1>
		{ props.subtitle && <p>{ props.subtitle }</p> }
	</div>
);

export default Header;

Header.defaultProps = {
	title: 'Indecision'
};