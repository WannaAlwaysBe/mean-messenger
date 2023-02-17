import React from "react";

import {Container} from "react-bootstrap";

import {Sidebar} from "../../components";
import {Chat} from "../../components";

export const Home = () => {
	return (<>
		<Container className="px-5" fluid>
			<div className="d-flex">
				<Sidebar />
				<Chat />
			</div>
		</Container>
	</>);
};
