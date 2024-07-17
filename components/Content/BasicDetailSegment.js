import React from 'react';
import classes from "./BasicDetailSegment.module.css";

function BasicDetailSegment({children, color, percentScreen= 100, grow = 1}) {

    return (
        <div className={classes.block} style={{backgroundColor: color, maxWidth: percentScreen + '%', flexGrow: grow}}>
            {children}
        </div>
    );
}
BasicDetailSegment.default
export default BasicDetailSegment;