import React from 'react';
import BasicDetailSegment from "../../../components/Content/BasicDetailSegment";
import FormItem from "../../../components/Content/FormItem";
import {APIAddress} from "@/Constants";

function SuggestionPage(props) {
    function submission(event){
        event.preventDefault();
        const formitems = event.target.elements;

        fetch(APIAddress, {
            method: "POST",
            body: JSON.stringify({
                    location_name: formitems.location_name.value,
                    address: formitems.address.value,
                    city: formitems.city.value,
                    description: formitems.description.value

                }
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        ).then(() =>window.location.reload())
    }

    return (
        <BasicDetailSegment color={'LightGrey'}>
            <h3>
                Missing location that you know?
            </h3>
            <h1>
                Suggest a new location to the list!
            </h1>
            <form method="POST" action={APIAddress} onSubmit={submission} style={{display:"table"}}>
                <FormItem name={"location_name"} type={"text"} required={true}/>
                <FormItem name={"address"} type={"text"} required={true}/>
                <FormItem name={"city"} type={"text"} required={true}/>
                <FormItem name={"description"} type={"textarea"} required={true}/>
                <div style={{display:"table-row"}}>
                    <input type={"submit"} value={"Submit!"} style={{display:"table-cell"}}/>
                </div>

            </form>

        </BasicDetailSegment>
    );
}

export default SuggestionPage;