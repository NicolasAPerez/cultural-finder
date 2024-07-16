import React from 'react';
import NavButton from "./NavButton";
import classes from "./NavBar.module.css";

function NavBar(props) {
    return (
        <div className={classes.nav}>
            <NavButton name=''>
                Home
            </NavButton>
            <NavButton name='search'>
                Recipe List
            </NavButton>
            <NavButton name='suggestion'>
                Suggestions
            </NavButton>
        </div>
    );
}

export default NavBar;