import React from 'react';
import Modal from 'react-modal';

const OptionModal = ( props ) => (
		<Modal
			/* Modal will close if the  props.handleClearSelectedOption value is false, of the user presses esc button or clicks anywhere outside the modal */
			isOpen = { !!props.selectedOption }
			/* Modal will only be open if the !!props.selectedOption value is true */
			onRequestClose={ props.handleClearSelectedOption }
			contentLabel = "Selected Option"
		>
			<h3>Selected option</h3>
			{/* If the value of props.selectedOption is true then display the text value inside props.selectedOption */}
			{ props.selectedOption && <p>{ props.selectedOption }</p> }
			{/*When this button is click it calls the handleClearSelectedOption() which clears the value of selectedOption making the value
			of selectedOption as false, which would mean than modal will no longer be open as per the above condition ( meaning will close )*/}
			<button onClick={props.handleClearSelectedOption}>Okay</button>
		</Modal>

);

export default OptionModal;