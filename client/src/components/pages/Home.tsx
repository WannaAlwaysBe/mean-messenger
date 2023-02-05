import React from "react";

import {Link, Outlet} from "react-router-dom";

export const Home = () => {
	return (<>
		<header>
			<nav>
				<ul>
					<li>
						<Link to={'/asdasd'}>test</Link>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<Outlet></Outlet>
		</main>
		<footer></footer>
	</>);
};
