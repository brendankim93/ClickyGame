import React, { Component } from 'react';
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  state = {
    characters
  };
  
  render(){
    return (  
  <div className="container">  
      <Header>
      </Header>
      <div className="wrapper">
        {this.state.characters.map(character => (
          <GameCard
            id={character.id}
            key={character.id}
            image={character.image}
            />
        ))}
      </div>
    </div>
    );
  }
}

export default App;
