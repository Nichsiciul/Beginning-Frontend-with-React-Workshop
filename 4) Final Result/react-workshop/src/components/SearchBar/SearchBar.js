import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

const getInput = (event) => event.target.value;

const handleEnter = (event, callback) => {
    if (event.key === 'Enter') {
        callback(getInput(event));
    }
}

const SearchBar = ({ filterText, onUserInput, onSubmit }) => (
    <input
        className="searchbar"
        placeholder="Search"
        value={filterText}
        onChange={event => onUserInput(getInput(event))}
        onKeyPress={event => handleEnter(event, onSubmit)}
    />);

SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default SearchBar;