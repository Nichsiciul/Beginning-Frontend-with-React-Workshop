import React, { Component } from "react";

import * as rawUserData from './../../mockData.json';
import "./ContactList.css";

const userData = rawUserData.results;

class ContactList extends Component {

	render() {
		console.log(userData);
		return (
			<div>
				Contact List Layout
            </div>
		)
	}
}

export default ContactList;