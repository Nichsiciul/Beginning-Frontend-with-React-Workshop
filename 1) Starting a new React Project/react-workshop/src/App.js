import React, { Component } from 'react';
import './App.css';
import ContactCard from './ContactCard/ContactCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    );
  }
}

export default App;
