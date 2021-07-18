import React from 'react';
import PropTypes from 'prop-types'

export const ServiceCard = ({ icon, title, text }) => {
	return (
		<div className="service__card">
			<div className="service__icon_helper">
				<img src={ `./assets/icons/${ icon }.png` } alt="Backend" />
			</div>
			<div className="card__body">
				<h6 className="paragraph paragraph__secondary"> { title } </h6>
				<p className="paragraph paragraph__service_text"> { text } </p>
			</div>
		</div>
	)
}

ServiceCard.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}
