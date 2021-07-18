import React from 'react';
import { NavBar } from './ui/navBar/NavBar';
import { Banner } from './ui/navBar/banner/Banner';
import { Services } from './ui/services/Services';
import './index.css';
import { Skills } from './ui/skills/Skills';
import { Footer } from './ui/footer/Footer';
import { Contact } from './contact/Contact';
import { Experience } from './expirience/Experience';
import { About } from './about/About';
export const WebSite = () => {
	return (
		<>
			<NavBar />
			<Banner />
			<Services />
			<About />
			<Skills />
			<Experience />
			<Contact />
			<Footer />
		</>
	)
}
