import React, { Component } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import SearchBar from '../SearchBar/SearchBar';

import './ContactList.css';
import * as rawData from './../../mockData.json';
const data = rawData.default.results;

class ContactList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        query: "",
        contacts: data
    }

    handleSearch = (searchTerm) => {
        this.setState({query: searchTerm});
    }

    renderContacts = (contacts) => {
        return contacts.map(contact => 
            <ContactCard 
                key={contact.id.value}
                firstName={contact.name.first}
                lastName={contact.name.last}
                gender={contact.gender}
                imageUrl={contact.picture.medium}
                eMail={contact.email}
                age={contact.dob.age}
            />
        )
    }

    render() {
        return <div className="contact-list">
            <SearchBar filterText={this.state.query} onUserInput={this.handleSearch} />
            {this.renderContacts(this.state.contacts)}
        </div>
    }
}

export default ContactList;