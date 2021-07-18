import React from 'react';
import PropTypes from 'prop-types';

export const SkillItem = ({ area, percent }) => {
	return (
		<li className="skill__element">
			<p> { area } </p>
			<div className="skill__badge"> { percent } </div>
		</li>
	)
}


SkillItem.propTypes = {
	area: PropTypes.string.isRequired,
	percent: PropTypes.string.isRequired
}