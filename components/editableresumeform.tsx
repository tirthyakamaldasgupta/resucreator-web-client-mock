import React, {useEffect, useState} from "react";
import axios from "axios";
import Router from "next/router";
import {getCookie} from "cookies-next";

type Props = {
    id: string | string[] | undefined;
    accessToken: string | undefined | null | boolean;
    userID: string | undefined | null | boolean;
};

export default function EditableResumeForm(props: Props) {
    async function submitEditableResumeForm(event: React.FormEvent<HTMLFormElement>) {
        const editableFormElement = event.target as HTMLFormElement

        event.preventDefault()

        const resumeTitle = (editableFormElement.elements as any).resumeTitle.value
        const firstName = (editableFormElement.elements as any).firstName.value
        const middleName = (editableFormElement.elements as any).middleName.value
        const lastName = (editableFormElement.elements as any).lastName.value
        const profileSummary = (editableFormElement.elements as any).profileSummary.value

        const configuration = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }

        const editableResumeData = {
            resumeTitle: resumeTitle,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            profileSummary: profileSummary,
            userId: userID
        }

        const apiResponse = await axios.put(`${process.env.NEXT_PUBLIC_BASE_API_ENDPOINT}/600/resumes/${id}`, editableResumeData, configuration)

        // if (apiResponse.status === 201) {
        //     Router.push("/resumes")
        // }
    }

    async function fetchResume(accessToken: string | undefined | null | boolean, userID: string | boolean | null | undefined) {
        const configuration = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };

        const apiResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_ENDPOINT}/600/resumes?id=${id}`, configuration)

        if (apiResponse.status === 200) {
            return apiResponse.data;
        }
        return [];
    }

    const { id } = props;

    const accessToken = getCookie("token");
    const userID = getCookie("userID");

    useEffect(() => {
        async function getResume() {
            const data = await fetchResume(accessToken, userID);
            setResume(data);
        }
        getResume();
    }, [accessToken, userID]);

    const updateResumeProperty = (index: number, property: string, value: any) => {
        setResume((prevResume: Array<{ userId: number; resumeTitle: string; firstName: string; middleName: string; lastName: string; profileSummary: string; id: number }>) => {
            const newResume = [...prevResume];
            // @ts-ignore
            newResume[index][property] = value;

            return newResume;
        });
    };

    const [resume, setResume] = useState<Array<{ userId: number; resumeTitle: string; firstName: string; middleName: string; lastName: string; profileSummary: string; id: number }>>([]);

    return (
        <form onSubmit={submitEditableResumeForm}>
            <div className="form-group">
                <label htmlFor="resumeTitle">Title of the resume</label>
                <input type="text" className="form-control" id="resumeTitle" value={resume?.[0]?.resumeTitle} onChange={(event) => updateResumeProperty(0, 'resumeTitle', event.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" value={resume?.[0]?.firstName} onChange={(event) => updateResumeProperty(0, 'firstName', event.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="middleName">Middle Name</label>
                <input type="text" className="form-control" id="middleName" value={resume?.[0]?.middleName} onChange={(event) => updateResumeProperty(0, 'middleName', event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" required value={resume?.[0]?.lastName} onChange={(event) => updateResumeProperty(0, 'lastName', event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="profileSummary">Profile Summary</label>
                <textarea className="form-control" id="profileSummary" required value={resume?.[0]?.profileSummary} onChange={(event) => updateResumeProperty(0, 'profileSummary', event.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    )
}