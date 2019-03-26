import React, { Component } from 'react';
import './App.css';
import ContactCard from './components/ContactCard/ContactCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactCard
          firstName="Prenume"
          lastName="Nume"
          gender="male"
          age="24"
          eMail="prenume.nume@gmail.com"
          imageUrl="https://picsum.photos/200/300"
        />

        <ContactCard
          firstName="Prenume"
          lastName="Nume"
          gender="female"
          age="99"
          eMail="prenume.nume@gmail.com"
          imageUrl="https://picsum.photos/300/300"
        />

        <ContactCard
          firstName="Prenume"
          lastName="Nume"
          gender="male"
          age="24"
          eMail="prenume.nume@gmail.com"
          imageUrl="https://picsum.photos/400/300"
        />

        <ContactCard
          firstName="Prenume lung lung lung lung"
          lastName="Nume"
          gender="female"
          age="90"
          eMail="prenume.nume@gmail.com"
          imageUrl="https://picsum.photos/20/40"
        />

        <ContactCard
          firstName="Prenume"
          lastName="Nume"
          gender="male"
          age="26"
          eMail="prenume.nume@gmail.com"
          imageUrl="https://picsum.photos/40/30"
        />
      </div>
    );
  }
}

export default App;
