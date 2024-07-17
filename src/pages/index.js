import BasicDetailSegment from "../../components/Content/BasicDetailSegment";
import RecipeSegment from "../../components/Content/RecipeSegment";
import RatingSegment from "../../components/Content/RatingSegment";

export default function Home() {
    const url = "https://cdn.discordapp.com/attachments/510645620382629929/1262951419200274513/Screenshot_2024-07-16_at_20.57.56.png?ex=669876aa&is=6697252a&hm=1070eb7f8beb9187aa3e3314cf136613084f22dded832f7c019551de66573815&";
    return (
    <>
        <RecipeSegment percentScreen={85} imgURL={url}>
            Testing the Recipe Segment
        </RecipeSegment>
        <div>
            <RatingSegment/>
        </div>
    </>
    );
}
