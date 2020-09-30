import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Header from './Header';
import Home from './Home';

import './styles.css';

const About = React.lazy(() => import("about/About"));

const App = () => {
	const [activeTheme, setActiveTheme] = useState('MSP');

	const onClickHandler = (theme) => {
		console.log('Theme:', theme);
		setActiveTheme(theme);
	};

	localStorage.setItem('TEST', 'asdfasdf');

	return (
		<Router>
			<div>
				<Header theme={activeTheme} />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<React.Suspense fallback="Loading Button">
								<About />
							</React.Suspense>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;