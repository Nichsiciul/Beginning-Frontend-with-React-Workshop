import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

const getInput = (event) => event.target.value;

const SearchBar = ({ filterText, onUserInput }) => (<input
            className="searchbar"
            placeholder="Search"
            value={filterText}
            onChange={event => onUserInput(getInput(event))}
/>);

SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
};

export default SearchBar;