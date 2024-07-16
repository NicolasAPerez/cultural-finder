import React from 'react';
import Link from "next/link";
import BasicDetailSegment from "../../../components/Content/BasicDetailSegment";

function RecipeCatchPage(props) {
    return (
        <BasicDetailSegment>
            <h1 style={{margin:"auto"}}>
                <span>
                    No Recipe Selected! Would you like to go to the&nbsp;
                </span>
                <Link href='/search' style={{textDecoration:'underline'}}>
                    Recipe List Page?
                </Link>
            </h1>
        </BasicDetailSegment>
    );
}

export default RecipeCatchPage;