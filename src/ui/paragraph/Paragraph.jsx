import React from 'react';
import PropTypes from 'prop-types';
import './paragraph.css';

export const Paragraph = ({ text, className }) => {
	return ( <p className={ `paragraph ${ className }` }> { text } </p> )
}

Paragraph.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string
}

Paragraph.defaultProps = {
	className: ''
}