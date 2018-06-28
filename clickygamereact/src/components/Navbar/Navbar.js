import React from "react";
import "./Navbar.css";
import Score from "../Score";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
        <span className="navbar-brand" id="title">Clicky Game!</span>
        <div className="align-center">
            {props.gameActive ? <span className="middle-text navbar-item align-center">{props.result}</span> : <span className="middle-text navbar-item align-center">Click Any Character To Begin!</span>}
        </div>
        <div className="nav-score navbar-item">
            <Score score={props.score} topScore={props.topScore}></Score>
        </div>
    </nav>
);

export default Navbar;