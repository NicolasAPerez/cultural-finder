import React from 'react';
import BasicDetailSegment from "./BasicDetailSegment";
import classes from "./ObjectSegement.module.css";

function ObjectSegment({imgURL,dish = 'Default',percentScreen = 80,children}) {
    return (
        <BasicDetailSegment percentScreen={percentScreen} color={"darksalmon"}>
            <h2>
                {dish}
            </h2>
            <img src={imgURL} alt={"Image of a " + dish} className={classes.dishImage}/>
            <p className={classes.desc}>
                {children}
            </p>
        </BasicDetailSegment>
    );
}

export default ObjectSegment;