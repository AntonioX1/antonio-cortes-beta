import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './navbar.css';

export const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__contact">
				<h1> Antonio Cortés </h1>
				<a className="navbar__email_link" href="email:antonio.cortes.1901@gmail.com">
					<FontAwesomeIcon className="navbar__envelope" icon={ faEnvelope } />
					antonio.cortes.1901@gmail.com
				</a>
			</div>
			<ul className="navbar__menu">
				<li className="navbar__item navbar__item--active">
					<a href="/"> Home </a>
				</li>
				<li className="navbar__item">
					<a href="/"> services </a>
				</li>
				<li className="navbar__item">
					<a href="/"> About </a>
				</li>
				<li className="navbar__item">
					<a href="/"> Experience </a>
				</li>
				<li className="navbar__item">
					<a href="/"> Contact </a>
				</li>
			</ul>
		</nav>
	)
}
