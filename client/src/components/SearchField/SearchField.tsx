import React from "react";

import {Form, InputGroup} from "react-bootstrap";

import {BsSearch} from "react-icons/bs";

export const SearchField = () => {
	return (
		<InputGroup>
			<InputGroup.Text className="border-end-0 bg-body">
				<BsSearch />
			</InputGroup.Text>
			<Form.Control
				className="border-start-0"
				placeholder="Search"
				type="text"
			/>
		</InputGroup>
	);
};
