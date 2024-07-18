import React from 'react';
import ObjectSegment from "../../../components/Content/ObjectSegment";
import RatingSegment from "../../../components/Content/RatingSegment";
import BasicDetailSegment from "../../../components/Content/BasicDetailSegment";

function LocationPage(props) {
    return(
        <>
            <ObjectSegment percentScreen={85} imgURL={url}>
                Testing the Recipe Segment
            </ObjectSegment>
            <div>
                <RatingSegment/>
                <br></br>
                <BasicDetailSegment color={'LightPink'}>
                    <h3>
                        Related Links:
                    </h3>
                </BasicDetailSegment>
            </div>
        </>
);
}

export default LocationPage;