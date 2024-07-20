import React, {useEffect, useState} from 'react';
import BasicDetailSegment from "./BasicDetailSegment";
import {APIAddress} from "@/Constants";
import LocationSum from "./LocationSum";
import classes from "./FeaturedSegment.module.css";

function FeaturedSegment(props) {
    const [featuredList, setFeaturedList] = useState(null)

    useEffect(() => {
        fetch(APIAddress)
            .then(response => response.json())
            .then(data => setFeaturedList(data.slice(0,5)))
    },[])



    return (
        <BasicDetailSegment color={"LightPink"}>
            <div className={classes.segment}>
                <h3>
                    Featured Locations:
                </h3>
                <ol>
                    {featuredList && featuredList.map((location) => <LocationSum location={location.location_name} id={location.id} average={location.average_score}/>)}
                </ol>
            </div>
        </BasicDetailSegment>
    );
}

export default FeaturedSegment;