import React from 'react';
import LocalButton from "./Button";


const About = () => {
	console.log('LJ - localStorage.getItem(\'TEST\'):', localStorage.getItem('TEST'));
	return (
		<div>
			<h1>Hello from About Page</h1>
			<LocalButton text="Button!!" />
		</div>
	);
}

export default About;