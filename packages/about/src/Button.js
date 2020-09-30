import React from "react";
import "./Button.css";

const THEMES = {
	MSP: 'MSP',
	ID: 'ID',
};

const Button = ({
	theme = THEMES.MSP,
	onClickFunc = () => {},
	text = 'asdf',
}) => {
	return (
		<button
			className={`button ${theme}`}
			onClick={() => onClickFunc(theme)}
		>
			{text}
		</button>
	);
};

export default Button;