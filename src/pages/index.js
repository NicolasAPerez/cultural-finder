import BasicDetailSegment from "../../components/Content/BasicDetailSegment";
import FeaturedSegment from "../../components/Content/FeaturedSegment";

export default function Home() {
    return (
    <>
        <BasicDetailSegment color={'salmon'}>
            <h1>
                Welcome to the Cultural Finder!
            </h1>
            <div>
                This is an application to help find local places for specific cultures!
            </div>
        </BasicDetailSegment>
        <div>
            <FeaturedSegment/>
        </div>
    </>
    );
}
