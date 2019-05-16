import React, { Component } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

import ContactCard from '../ContactCard/ContactCard';
import SearchBar from '../SearchBar/SearchBar';

import './ContactList.css';

function getContacts(query = "") {
    return axios.get(`http://localhost:3001/results?q=${query}`)
        .then((request) => {
            return request.data;
        }, (error) => console.error(error));
}

class ContactList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getContacts()
            .then(data => {
                this.setState({
                    contacts: data,
                    loaded: true
                });
            });
    }

    state = {
        query: "",
        contacts: [],
        loaded: false
    }

    handleSearch = (searchTerm) => {
        this.setState({ query: searchTerm })
    }

    handleSubmit = (query) => {
        this.setState({ loaded: false });
        getContacts(query)
            .then(data => {
                this.setState({
                    contacts: data,
                    loaded: true
                });
            });
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
        const { loaded } = this.state;
        return <div className="contact-list">
            <SearchBar
                filterText={this.state.query}
                onUserInput={this.handleSearch}
                onSubmit={this.handleSubmit}
            />
            {!loaded ?
                <div>Loading...</div> :
                this.renderContacts(this.state.contacts)
            }

        </div>
    }
}

export default ContactList;