import BasicDetailSegment from "../../components/Content/BasicDetailSegment";
import ObjectSegment from "../../components/Content/ObjectSegment";
import RatingSegment from "../../components/Content/RatingSegment";

export default function Home() {
    return (
    <>
        <BasicDetailSegment color={'salmon'}>
            <h1>
                Welcome to the Cultural Finder!
            </h1>
        </BasicDetailSegment>
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
