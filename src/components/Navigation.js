import React from 'react';
import { Link } from 'react-router-dom';
import UdemyListForm from "./UdemyListFrom";
function Navigation() {




    return(
        <nav>
            <ul>
                <li><Link to="/box">box</Link></li>
                <li><Link to="/clock">clock</Link></li>
                <li><Link to="/colorfulboxes">colorful boxes</Link></li>
                <li><Link to="/countthings">count things</Link></li>
                <li><Link to="/customtitle">custom title</Link></li>
                <li><Link to="/mybutton">my button</Link></li>
                <li><Link to="/numbers">numbers</Link></li>
                <li><Link to="/upperlower">upper lower</Link></li>
                <li><Link to="/userinfo">user info</Link></li>
                <li><Link to="/accountdata">account data</Link></li>
                <li><Link to="/testcodespace">TestCodeSpace</Link></li>
                <li><Link to="/helloForm">HelloForm</Link></li>
                <li><Link to="/methods">Methods</Link></li>
                <li><Link to="/udemyexercises">UdemyExercises</Link></li>
                <li><Link to="/shoppingcartudemy">ShoppingCartUDEMY</Link></li>
                <li><Link to="/udemylistform">UdemyListForm</Link></li>
                <li><Link to="/udemyhookstutorial">Udemy dodaj literę</Link></li>


            </ul>
        </nav>
    );
};


export default Navigation;
