import React from 'react';
import { services } from '../../data/services';
import { ServiceCard } from './ServiceCard';
export const ServiceGallery = () => {
	return (
		<div className="service__gallery">
			{ services.map( service => <ServiceCard key={ service.icon } { ...service } />) }
		</div>
	)
}
