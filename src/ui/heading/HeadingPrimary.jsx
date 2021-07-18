import React from 'react';
import PropTypes from 'prop-types';
import './heading.css';

export const HeadingPrimary = ({ text, className }) => {
	return (
		<h1 className={ `heading heading__primary ${ className }` }> { text } </h1>
	)
}

HeadingPrimary.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string
}

HeadingPrimary.defaultProps = {
	className: ''
}