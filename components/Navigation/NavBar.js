import React from 'react';
import NavButton from "./NavButton";
import classes from "./NavBar.module.css";

function NavBar(props) {
    return (
        <div className={classes.nav}>
            <NavButton name=''>
                Home
            </NavButton>
            <NavButton name='RecipeList'>
                Recipe List
            </NavButton>
            <NavButton name='Suggestions'>
                Suggestions
            </NavButton>
        </div>
    );
}

export default NavBar;