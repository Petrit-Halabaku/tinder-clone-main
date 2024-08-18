import React from "react";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header__icon" />
			</IconButton>
			<img
				src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
				alt="tinder logo"
				className="header__logo"
			/>
			<IconButton>
				<QuestionAnswerIcon fontSize="large" className="header__icon" />
			</IconButton>
		</div>
	);
};

export default Header;
