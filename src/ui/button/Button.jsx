import React from 'react';
import PropTypes from 'prop-types'
import './button.css';

export const Button = ({ text, className, ...rest }) => {
	return (
		<button { ...rest } className={ `button ${ className }` }> { text } </button>
	)
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string
}