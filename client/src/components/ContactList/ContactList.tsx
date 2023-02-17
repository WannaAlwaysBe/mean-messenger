import React from "react";

import {Contact} from "../Contact/Contact";

import "./ContactList.css";

export const ContactList = () => {
	return (
		<ul className="contact-list">
			<li>
				<Contact />
			</li>
			<li>
				<Contact />
			</li>
		</ul>
	);
};
