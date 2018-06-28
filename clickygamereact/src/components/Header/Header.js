import React from "react";
import "./Header.css";

const Header = props => (
    <div className="jumbotron jumbotron-fluid header">
        <div className="container">
            <h1 className="text-center">Welcome to the Adventure Time Clicky Game!</h1>
                <h4 className="text-center instructions">Click on an image to earn points. Keep earning points until you click the same image twice!</h4>
        </div>
    </div>
);

export default Header;
