import React from 'react';
import classes from "./BasicDetailSegment.module.css";

function BasicDetailSegment({children, color, growFlex = 1}) {

    return (
        <div className={classes.block} style={{backgroundColor: color, flexGrow: growFlex}}>
            {children}
        </div>
    );
}
BasicDetailSegment.default
export default BasicDetailSegment;