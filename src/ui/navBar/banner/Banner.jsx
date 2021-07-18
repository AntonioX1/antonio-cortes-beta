import React from 'react';
import { Button } from '../../button/Button';
import { HeadingPrimary } from '../../heading/HeadingPrimary';
import { Paragraph } from '../../paragraph/Paragraph';
import { SectionTag } from '../../section_tag/SectionTag';
import './banner.css';

export const Banner = () => {
	return (
		<section className="banner">
			<div className="banner__info">
				<SectionTag text="I'm web developer"/>
				<div>
					<HeadingPrimary text="Hi, my name is"/>
					<HeadingPrimary text="Antonio." className="heading__primary--bold"/>
				</div>
				<Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Curabitur nec ultrices ex. Mauris mattis diam arcu, ultrices tincidunt metus
					accumsan in. Mauris mattis Diam." />
				<div className="banner__links">
					<Button text="My work" className="button__primary"/>
					<Button text="Get in touch" className="button__outline_primary"/>
				</div>
			</div>
			<div className="banner__image">
				<img src="./assets/images/PngItem_5237005.png" alt="" />
			</div>
		</section>
	)
}
