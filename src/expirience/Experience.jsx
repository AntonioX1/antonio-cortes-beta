import React from 'react';
import { Button } from '../ui/button/Button';
import { SectionTag } from '../ui/section_tag/SectionTag';
import './experience.css';

export const Experience = () => {
	return (
		<section className="section__experience">
			<SectionTag text="Experience" />
			<h1 className="experience__my_jobs"> My jobs </h1>
			<div className="experience__container">
				<div className="experience__csv">
					<p className="experience__text">
						Necessitatibus eius consequatur ex aliquid
						fuga eum quidem, It doesn’t matter how great
						your product or service is if your copy does not
						captivate your audience.
					</p>
					<Button text="Download CV" className="button__primary"/>
				</div>
				<div>
					<div className="experience__timeline">
						<div className="experience__item">
							<div className="experience__job">
								<small> Present </small>
								<p> Backend developer </p>
							</div>
							<div className="experience__describe">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Curabitur nec ultrices ex. Mauris mattis diam arcu, ultrices
									tincidunt metus accumsan in. Vivamus ultricies massa id erat
									rhoncus venenatis. Nulla in nulla porttitor, vehicula eros 
								</p>
							</div>
						</div>
					</div>
					<div className="experience__timeline">
						<div className="experience__item">
							<div className="experience__job">
								<small> Present </small>
								<p> Backend developer </p>
							</div>
							<div className="experience__describe">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Curabitur nec ultrices ex. Mauris mattis diam arcu, ultrices
									tincidunt metus accumsan in. Vivamus ultricies massa id erat
									rhoncus venenatis. Nulla in nulla porttitor, vehicula eros 
								</p>
							</div>
						</div>
					</div>
					<div className="experience__timeline">
						<div className="experience__item">
							<div className="experience__job">
								<small> Present </small>
								<p> Backend developer </p>
							</div>
							<div className="experience__describe">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Curabitur nec ultrices ex. Mauris mattis diam arcu, ultrices
									tincidunt metus accumsan in. Vivamus ultricies massa id erat
									rhoncus venenatis. Nulla in nulla porttitor, vehicula eros 
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
