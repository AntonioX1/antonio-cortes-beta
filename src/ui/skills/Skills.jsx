import React from 'react';
import { SkillList } from './SkillList';
import './skills.css';

export const Skills = () => {
	return (
		<section className="skills">
			<SkillList />
			<div className="skill__info">
				<h3> Skills </h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur
					adipiscing ipsum dolor sit ame.
				</p>
			</div>
		</section>
	)
}
