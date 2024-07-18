import React, {useState} from 'react';
import RatingStar from "./RatingStar";
import BasicDetailSegment from "./BasicDetailSegment";

function RatingSegment(props) {
    const [rating, changeRating] = useState(1);

    function clickStar(event){
        changeRating(parseInt(event.target.dataset.number) + 1);
        console.log(event.target.dataset.number);
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
            <div>
                Current Rating: 
            </div>
        </BasicDetailSegment>
    );
}

export default RatingSegment;