import React from 'react';
import Link from "next/link";
import classes from "./LocationSum.module.css";

function LocationSum({id,location,average, description, city}) {

    const descSeg = <><br/> Description: {description} </>;
    const citySeg = <><br/> City: {city} </>;

    return (
        <li>
            <Link href={'/location/' + id} className={classes.link}> {location} </Link>
            {city && citySeg}
            <br/>
            &#9733; Score: {average || 'Not Yet Rated'}
            {description && descSeg}
        </li>

    );
}

export default LocationSum;