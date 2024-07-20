import React, {useEffect, useState} from 'react';
import ObjectSegment from "../../../components/Content/ObjectSegment";
import RatingSegment from "../../../components/Content/RatingSegment";
import BasicDetailSegment from "../../../components/Content/BasicDetailSegment";
import {APIAddress} from "@/Constants";
import {useRouter} from "next/router";
import RelatedSegment from "../../../components/Content/RelatedSegment";

function LocationPage(props) {

    const router = useRouter()
    const id = router.query.id
    const [loc, setLoc] = useState(null)
    useEffect(() => {
        async function fetcher() {
            return fetch(APIAddress + id)

        }
        if (id){
            fetcher().then(response => response.json())
                .then(data => setLoc(data))
        }
    }, [id])


    if (loc) {

        return (
            <>
                <ObjectSegment percentScreen={85} imgURL={loc.picture} name={loc.location_name}>
                    <div>
                        City: {loc.city}
                        <br/>
                        Address: {loc.address}
                        <br/>
                        {loc.description}
                    </div>
                </ObjectSegment>
                <div>
                    <RatingSegment id={id} avg={loc.average_score.number_stars__avg}/>
                    <br></br>
                    <RelatedSegment city={loc.city}/>
                </div>
            </>

        );
    }
}

export default LocationPage;