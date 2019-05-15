import React, { Component } from 'react';
import './App.css';
import ContactCard from './components/ContactCard/ContactCard';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar onUserInput={(data) => console.log(data)} filterText={""}/>
        <ContactCard
          firstName="Dominik"
          lastName="Doe"
          gender="male"
          age="24"
          eMail="Dominik.Doe@gmail.com"
          imageUrl="https://picsum.photos/200/300"
        />

        <ContactCard
          firstName="Francesca"
          lastName="Kale"
          gender="female"
          age="99"
          eMail="Francesca.Kale@gmail.com"
          imageUrl="https://picsum.photos/300/300"
        />

        <ContactCard
          firstName="John"
          lastName="Johnson"
          gender="male"
          age="24"
          eMail="John.Johnson@gmail.com"
          imageUrl="https://picsum.photos/400/300"
        />

        <ContactCard
          firstName="Ferdinand"
          lastName="The First"
          gender="male"
          age="90"
          eMail="FerdinandI@gmail.com"
          imageUrl="https://picsum.photos/20/40"
        />

        <ContactCard
          firstName="Santiago"
          lastName="Mauritius"
          gender="male"
          age="26"
          eMail="Dominik.nume@gmail.com"
          imageUrl="https://picsum.photos/40/30"
        />
      </div>
    );
  }
}

export default App;
