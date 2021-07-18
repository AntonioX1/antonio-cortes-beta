import React from 'react';
import { SectionTag } from '../section_tag/SectionTag';
import { ServiceGallery } from './ServiceGallery';
import './services.css';

export const Services = () => {
	return (
		<section className="services">
			<SectionTag text="services"/>
			<h2> How can I help you </h2>
			<p className="paragraph paragraph__services">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
				<br />
				nec ultrices ex. Mauris mattis diam arcu, ultrice.
			</p>
			<ServiceGallery />
		</section>
	)
}
