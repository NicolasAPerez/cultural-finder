import React, {useEffect, useState} from 'react';
import BasicDetailSegment from "../../../components/Content/BasicDetailSegment";
import {APIAddress} from "@/Constants";
import LocationSum from "../../../components/Content/LocationSum";

function SearchPage(props) {
    const [fullList, setFullList] = useState(null)

    useEffect(() => {
        fetch(APIAddress)
            .then(response => response.json())
            .then(data => setFullList(data))
    },[])

    return (
        <BasicDetailSegment grow={1}>
            <div style={{padding:'5px'}}>
            <h1>
                All Locations Listed:
            </h1>
            <ol>
                {fullList && fullList.map((location) => <LocationSum location={location.location_name} id={location.id} average={location.average_score} description={location.description} city={location.city}/>)}
            </ol>
            </div>

        </BasicDetailSegment>
    );
}

export default SearchPage;