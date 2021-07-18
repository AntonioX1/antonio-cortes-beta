import React from 'react';
import PropTypes from 'prop-types';
import './section_tag.css';

export const SectionTag = ({ text }) => {
	return (
		<small className="section_tag"> { text } </small>
	)
}

SectionTag.propTypes = {
	text: PropTypes.string.isRequired
}