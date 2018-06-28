import React from "react";
import GameCard from "../GameCard";
import "./GameGrid.css";

const GameGrid = (props) => (

    <div id="game-grid" className="container">
        {props.characters.map((character) => (
            <GameCard key={character.id} id={character.id} clickCharacter={props.clickCharacter}></GameCard>
        ))}
    </div>
);

export default GameGrid;