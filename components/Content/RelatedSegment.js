import React, {useEffect, useState} from 'react';
import BasicDetailSegment from "./BasicDetailSegment";
import {APIAddress} from "@/Constants";
import LocationSum from "./LocationSum";

function RelatedSegment({city}) {

    const [cityLoc, setCityLoc] = useState(null)

    useEffect(() => {
        async function fetcher() {
            return fetch(APIAddress)

        }
        if (city){
            fetcher().then(response => response.json())
                .then(data => setCityLoc(data.filter((obj) => obj.city === city)))
        }
    }, [city])

    return (
        <BasicDetailSegment color={'LightPink'}>
            <h3>
                Related Links:
            </h3>
            <ol>
                {cityLoc && cityLoc.map((location) => <LocationSum location={location.location_name} id={location.id} average={location.average_score}/>)}
            </ol>

        </BasicDetailSegment>
    );
}

export default RelatedSegment;