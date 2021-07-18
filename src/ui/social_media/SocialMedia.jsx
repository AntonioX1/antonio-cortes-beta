import { faFacebookF, faGithub, faRedditAlien, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './social_media.css';

export const SocialMedia = () => {
	return (
		<ul className="social_media">
			<li className="social_media__item">
				<a href="">
					<FontAwesomeIcon className="social_media__facebook" icon={  faFacebookF }/>
				</a>
			</li>
			<li className="social_media__item">
				<a href="">
					<FontAwesomeIcon className="social_media__reddit" icon={  faRedditAlien }/>
				</a>
			</li>
			<li className="social_media__item">
				<a href="">
					<FontAwesomeIcon className="social_media__twitter" icon={  faTwitter }/>
				</a>
			</li>
			<li className="social_media__item">
				<a href="">
					<FontAwesomeIcon className="social_media__github" icon={  faGithub }/>
				</a>
			</li>
		</ul>
	)
}