import React from "react";

import {Card} from "react-bootstrap";

import {RxHamburgerMenu} from "react-icons/rx";

import {SearchField} from "../SearchField/SearchField";
import {ContactList} from "../ContactList/ContactList";
import {IconButton} from "../IconButton/IconButton";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
	return (
		<Card className={styles.sidebar}>
			<div className="d-flex mb-3 px-3 align-items-center">
				<IconButton className="me-3" Icon={RxHamburgerMenu} />
				<SearchField />
			</div>
			<div>
				<ContactList></ContactList>
			</div>
		</Card>
	);
};
