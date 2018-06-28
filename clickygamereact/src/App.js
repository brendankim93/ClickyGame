import React, { Component } from 'react';
import Header from "./components/Header";
import Characters from "./utils/Characters.js";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import './App.css';
import Footer from "./components/Footer";

class App extends Component {
  state = {
    characters: Characters,
    gameActive: false,
    score: 0,
    topScore: 0,
    result: "Click Any Character To Begin!"
  };

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  shuffleCharacters() {
    let tempCharacterArray = this.state.characters;
    this.setState({
      characters: this.shuffle(tempCharacterArray)
    });
  }

  findCharacterIndex(id) {
    for (let i=0; i < this.state.characters.length; i++) {
      if (parseInt(id, 0) === parseInt(this.state.characters[i].id, 0)){
        return i;
      }
    }
  }

  setCharacterClicked(index, value) {
    let tempCharacterArray = this.state.characters;
    tempCharacterArray[index].clicked = value;
    console.log("Set character at index " + index + " clicked to true");
    this.shuffleCharacters();
  }

  resetCharacters() {
    let tempCharacterArray = this.state.characters;
    tempCharacterArray.forEach(function(character) {
      character.clicked = false;
    });
    this.shuffleCharacters();
    console.log("All characters reset!");
  }

  increaseScore() {
    let tempScore = this.state.score;
    let tempTopScore = this.state.topScore;
    tempScore += 1;

    (tempScore >= tempTopScore) ? this.setState({score: tempScore, topScore: tempScore}) : this.setState({ score: tempScore});
  }

  endGame() {
    this.setState({
      score: 0
    });
    this.resetCharacters();
  }

  setGameActive(toggle) {
    this.setState({
      gameActive: toggle
    });
  }

  clickCharacter = event => {
    let characterIndex = this.findCharacterIndex(event.target.id);
    this.setGameActive(true);

    if (this.state.characters[characterIndex].clicked === true) {
      this.setState({
        result: "You guessed Incorrectly!"
      });
      this.endGame();
    }
    else {
      this.increaseScore();
      this.setState({
        result: String("You guessed correctly!")
      });
      this.setCharacterClicked(characterIndex, true);
      console.log(this.state);
    }

    this.shuffleCharacters();
    console.log(this.state.characters);
  };

  render(){
    return (    
      <div>  
        <Navbar score={this.state.score} topScore={this.state.topScore} gameActive={this.state.gameActive} result={this.state.result} />
        <div className="container">
          <Header /> 
          <GameGrid characters={this.state.characters} clickCharacter={this.clickCharacter} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
