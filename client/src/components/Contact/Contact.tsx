import React from "react";

import {Card, Col, Container, Row} from "react-bootstrap";

import "./Contact.css";

export const Contact = () => {
	return (
		<Card className="contact border-0">
			<Card.Body className="d-flex">
				<Container>
					<Row>
						<Col cla xs={2}>
							<span className="image-placeholder"></span>
						</Col>
						<Col cla xs={10}>
							<Card.Title>Card title</Card.Title>
							<Card.Text>1</Card.Text>
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	);
};
