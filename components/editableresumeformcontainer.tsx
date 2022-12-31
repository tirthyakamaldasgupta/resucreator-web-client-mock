import React from "react";
import {getCookie} from "cookies-next";
import EditableResumeForm from "./editableresumeform";

type Props = {
    id: string | string[] | undefined;
}

export default function EditableResumeFormContainer(props: Props) {
    const { id } = props;

    const accessToken = getCookie("token");
    const userID = getCookie("userID");

    if (!accessToken && !userID) {
        return (
            <p>You have to be logged in to update a resume.</p>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <EditableResumeForm id={id} accessToken={accessToken} userID={userID}/>
            </div>
        </div>
    )
}