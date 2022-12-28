import React from "react";
import axios from "axios";
import Router from "next/router";

type Props = {
    accessToken: string | undefined | null | boolean;
    userID: string | undefined | null | boolean;
};

export default function NewResumeForm(props: Props) {
    async function submitNewResumeForm(event: React.FormEvent<HTMLFormElement>) {
        const formElement = event.target as HTMLFormElement

        event.preventDefault()

        const resumeTitle = (formElement.elements as any).resumeTitle.value
        const firstName = (formElement.elements as any).firstName.value
        const middleName = (formElement.elements as any).middleName.value
        const lastName = (formElement.elements as any).lastName.value
        const profileSummary = (formElement.elements as any).profileSummary.value

        const configuration = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }

        const newResumeData = {
            resumeTitle: resumeTitle,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            profileSummary: profileSummary,
            userId: userID
        }

        const apiResponse = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_ENDPOINT}/600/resumes`, newResumeData, configuration)

        if (apiResponse.status === 201) {
            Router.push("/resumes")
        }
    }

    const { accessToken, userID } = props

    return (
        <form onSubmit={submitNewResumeForm}>
            <div className="form-group">
                <label htmlFor="resumeTitle">Title of the resume</label>
                <input type="text" className="form-control" id="resumeTitle" required />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" required />
            </div>
            <div className="form-group">
                <label htmlFor="middleName">Middle Name</label>
                <input type="text" className="form-control" id="middleName" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" required />
            </div>
            <div className="form-group">
                <label htmlFor="profileSummary">Profile Summary</label>
                <textarea className="form-control" id="profileSummary" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}