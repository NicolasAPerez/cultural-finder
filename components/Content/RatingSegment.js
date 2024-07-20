import React, {useState} from 'react';
import RatingStar from "./RatingStar";
import BasicDetailSegment from "./BasicDetailSegment";
import {APIAddress} from "@/Constants";

function RatingSegment({id,avg}) {
    const [rating, changeRating] = useState(1);
    const [formSubmit, changeFormSubmit] = useState(false)

    function clickStar(event){
        changeRating(parseInt(event.target.dataset.number) + 1);
        console.log(event.target.dataset.number);
    }

    async function submitStars(event){
        fetch(APIAddress + "rating/", {
            method: "POST",
            body: JSON.stringify({
                    location: parseInt(id),
                    number_stars: rating
                }
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(() => changeFormSubmit(true))
    }

    let stars = [];
    for (let i = 0; i < 5; i++){
        stars.push(<RatingStar number={i} key={i} starActive={i < rating} onClick={clickStar}/>)
    }

    return (
        <BasicDetailSegment color={'LightCoral'} grow={1}>
            <h3 style={{marginBottom: '-8%', marginTop: '5%', userSelect: 'none'}}>
                Rating:
            </h3>
            <div>
                {stars}
            </div>
            {!formSubmit && <button onClick={submitStars}> Submit Rating </button>}
            {formSubmit && <div> Rating Submitted!</div>}
            <div>
                Current Rating: {avg}
            </div>
        </BasicDetailSegment>
    );
}

export default RatingSegment;