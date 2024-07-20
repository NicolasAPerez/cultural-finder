import React from 'react';
import BasicDetailSegment from "./BasicDetailSegment";
import classes from "./ObjectSegement.module.css";

function ObjectSegment({imgURL,name = 'Default',percentScreen = 80,children}) {
    return (
        <BasicDetailSegment percentScreen={percentScreen} color={"darksalmon"}>
            <h2>
                {name}
            </h2>
            <img src={imgURL} alt={"Image of " + name} className={classes.dishImage}/>
            <p className={classes.desc}>
                {children}
            </p>
        </BasicDetailSegment>
    );
}

export default ObjectSegment;