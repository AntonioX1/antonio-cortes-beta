import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from '../ui/button/Button';
import { SectionTag } from '../ui/section_tag/SectionTag';
import './contact.css';

export const Contact = () => {
	return (
		<section className="section__contact">
			<div className="contact__container">
				<div className="contact__info">
					<SectionTag text="contact"/>
					<h3 className="contact__hello"> Hello </h3>
					<ul className="contact__media">
						<li className="media__item">
							<a href="">
								<FontAwesomeIcon className="media__icon" icon={ faWhatsapp } />
							</a>
						</li>
						<li className="media__item">
							<a href="">
								<FontAwesomeIcon className="media__icon" icon={ faPhoneAlt } />
							</a>
						</li>
						<li className="media__item">
							<a href="">
								<FontAwesomeIcon className="media__icon" icon={ faEnvelope } />
							</a>
						</li>
					</ul>
				</div>
				<form className="contact__form">
					<h4 className="form__title"> Let's work together </h4>
					<p className="form__text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur nec ultrices ex. Mauris mattis
						diam arcu, ultrices tincidunt metus accumsan in. Vivamus ultricies massa id erat.
					</p>
					<div className="form__group">
						<div>
							<label htmlFor="name"> Name </label>
							<input type="text" name="name" id="name" />
						</div>
						<div>
							<label htmlFor="email"> Email </label>
							<input type="text" name="email" id="email" />
						</div>
					</div>
					<div className="form__group">
						<label htmlFor="message"> Message </label>
						<textarea name="message" id="message"></textarea>
					</div>
					<Button type="submit" text="Send" className="button__primary" />
				</form>
			</div>
		</section>
	)
}
