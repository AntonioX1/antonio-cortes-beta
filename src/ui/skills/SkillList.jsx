import React from 'react';
import { skills } from '../../data/skills';
import { SkillItem } from './SkillItem';

export const SkillList = () => {

	return (
		<ol className="skill__list">
			{ skills.map( (element, index) => <SkillItem key={ index } { ...element } /> ) }
		</ol>
	)
}
