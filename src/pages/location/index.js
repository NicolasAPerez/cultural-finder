import React, {useEffect, useState} from 'react';
import Link from "next/link";
import BasicDetailSegment from "../../../components/Content/BasicDetailSegment";
import {useSearchParams} from "next/navigation";
import {APIAddress} from "@/Constants";
import ObjectSegment from "../../../components/Content/ObjectSegment";
import RatingSegment from "../../../components/Content/RatingSegment";

function RecipeCatchPage(props) {


    return (
        <BasicDetailSegment>
            <h1 style={{margin: "auto"}}>
            <span>
                No Location Selected! Would you like to go to the&nbsp;
            </span>
                <Link href='/search' style={{textDecoration: 'underline'}}>
                    Location List Page?
                </Link>
            </h1>
        </BasicDetailSegment>
    );

}

export default RecipeCatchPage;