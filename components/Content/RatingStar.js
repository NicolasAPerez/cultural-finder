import classes from "./RatingStar.module.css";

function RatingStar({starActive = false, onClick, number}) {

    if (starActive){
        return(
            <span className={classes.star} onClick={onClick} data-number={number}>
                &#9733;
            </span>
        );
    }
    return (
        <span className={classes.star} onClick={onClick} data-number={number}>
            &#9734;
        </span>
    );

}

export default RatingStar;