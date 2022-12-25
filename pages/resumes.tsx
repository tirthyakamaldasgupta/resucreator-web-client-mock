import React, { useState, useEffect } from 'react';
import axios from "axios";
import { getCookie } from 'cookies-next';
import ResumeCardContainer from "../components/resumecardcontainer";
import Navbar from "../components/navbar";

export default function Resumes() {
    const [resumes, setResumes] = useState<Array<{ userId: number; data: { resumeTitle: string }; id: number }>>([]);

    async function fetchResumes(accessToken: string | undefined | null | boolean, userID: string | boolean | null | undefined) {
        const configuration = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };

        const apiResponse = await axios.get(`http://localhost:3000/resumes?userId=${userID}`, configuration)

        if (apiResponse.status === 200) {
            return apiResponse.data;
        }
        return [];
    }

    const accessToken = getCookie("token");
    const userID = getCookie("userID");

    useEffect(() => {
        async function getResumes() {
            const data = await fetchResumes(accessToken, userID);
            setResumes(data);
        }
        getResumes();
    }, [accessToken, userID]);

    return (
        <>
            <Navbar/>
            <ResumeCardContainer resumes={resumes}/>
        </>
    );
}