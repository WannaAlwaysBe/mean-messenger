import React from "react";

import {Button, Card, Form, Row, Container, Col} from "react-bootstrap";

export const Sidebar = () => {
	return (<>
		<Card className="vh-100 p-3 rounded-0">
			<Container>
				<Row>
					<Col xs={3} className="p-0">
						<Button className="w-100" variant="primary">Primary</Button>
					</Col>
					<Col xs={9} className="p-0">
						<Form.Control className="rounded-pill" type="text" placeholder="Search" />
					</Col>
				</Row>
			</Container>
		</Card>
	</>);
};
