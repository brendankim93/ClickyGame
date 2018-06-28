import React from "react";
import "./GameCard.css";

class GameCard extends React.Component {
  
  state = {
    id: this.props.id,
    clicked: false
  };
  
  render() {
    return (
      <div className="img-container" key={this.props.id}>
        <img className="card" alt={this.props.name} id={this.props.id} onClick={this.props.clickCharacter} src={"assets/img/at" + this.props.id + ".jpg"} />
      </div>
    );
  }
}
  export default GameCard;