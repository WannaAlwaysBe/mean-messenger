import React from "react";

import {Col, Container, Row} from "react-bootstrap";

import {Sidebar} from "../../components";
import {Chat} from "../../components";

export const Home = () => {
	return (<>
		<Container className="px-5" fluid>
			<Row>
				<Col className="pe-0" xs={3}>
					<Sidebar />
				</Col>
				<Col className="ps-0" xs={9}>
					<Chat />
				</Col>
			</Row>
		</Container>
	</>);
};
