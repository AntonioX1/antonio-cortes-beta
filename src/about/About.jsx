import React from 'react';
import { SectionTag } from '../ui/section_tag/SectionTag';
import './about.css';

export const About = () => {
	return (
		<section class="section section__about">
			<div className="about__who_I_am">
				<SectionTag text="about" />
				<h2 className="heading heading__h2"> Who I am </h2>
			</div>
			<div className="about__info">
				<div>
					<div className="about__info_container">
						<p className="paragraph about__paragraph">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ultrices ex. Mauris mattis diam arcu, ultrices tincidunt metus accumsan in. Vivamus ultricies massa id erat rhoncus venenatis. Nulla in nulla porttitor, vehicula eros a, aliquam risus. Vivamus sapien tortor, vestibulum at erat quis, pharetra iaculis elit. Aenean in sapien vestibulum, vulputate nisi ut, tempus ex. 
						</p>
						<img className="about__image" src="./assets/images/imagen1.png" alt="Antonio Cortés" />
					</div>
					<div>
						<p className="paragraph">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ultrices ex. Mauris mattis diam arcu, ultrices tincidunt metus accumsan in. Vivamus ultricies massa id erat rhoncus venenatis. Nulla in nulla porttitor, vehicula eros a, aliquam risus. Vivamus sapien tortor, vestibulum at erat quis, pharetra iaculis elit. Aenean in sapien vestibulum, vulputate nisi ut, tempus ex. 
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
