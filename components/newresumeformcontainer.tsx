import React from "react";
import NewResumeForm from "./newresumeform";
import {getCookie} from "cookies-next";

export default function NewResumeFormContainer() {
    const accessToken = getCookie("token");
    const userID = getCookie("userID");

    if (!accessToken && !userID) {
        return (
            <p>You have to be logged in to create a resume.</p>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <NewResumeForm accessToken={accessToken} userID={userID}/>
            </div>
        </div>
    )
}