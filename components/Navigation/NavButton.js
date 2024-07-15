import React from 'react';
import Link from "next/link";
import classes from "./NavButton.module.css";

function NavButton(props) {

    return (
        <Link href={'/' + props.name} className={classes.navlink}>
            <span className={classes.linktext}>
                {props.children}
            </span>
        </Link>
    );
}

export default NavButton;