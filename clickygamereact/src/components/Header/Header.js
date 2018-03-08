import React from "react";
import "./Header.css";

const Header = props => 
    <div class="jumbotron jumbotron-fluid header">
        <div class="container">
            <h1 class="display-3 text-center">Welcome to the Adventure Time Memory Game!</h1>
                <h4 class="lead text-center instructions">Click on an image to earn points. Keep earning points until you click the same image twice!</h4>
        </div>
    </div>;

export default Header;
