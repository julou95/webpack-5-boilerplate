import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import './Header.css';

const Header = ({ theme = 'MSP'}) => (
  <div className="header">
		<div className="headerContainer">
			<div className={`headerLogo logo-${theme}`}>
				{theme}
			</div>
			<div className="headerNavigation">
				<NavLink
					to="/"
					activeClassName="headerNavigationItemActive"
					className="headerNavigationItem"
					isActive={(match, location) => location.pathname === '/'}
				>
					Home
				</NavLink>
				<NavLink to="/about" activeClassName="headerNavigationItemActive" className="headerNavigationItem">
					About
				</NavLink>
			</div>
		</div>
	</div>
);

Header.propTypes = {};
Header.defaultProps = {};
Header.displayName = '';

export default Header