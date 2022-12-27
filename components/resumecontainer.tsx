import {getCookie} from "cookies-next";
import axios from "axios";
import {useEffect, useState} from "react";

type Props = {
    id: string | string[] | undefined;
}

export default function ResumeContainer(props: Props) {
    const [resume, setResume] = useState<Array<{ userId: number; resumeTitle: string; firstName: string; middleName: string; lastName: string; profileSummary: string; id: number }>>([]);

    async function fetchResume(accessToken: string | undefined | null | boolean, userID: string | boolean | null | undefined) {
        const configuration = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };

        const apiResponse = await axios.get(`http://localhost:3000/600/resumes?id=${id}`, configuration)

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

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <center>
                        <h1>{resume?.[0]?.resumeTitle}</h1>
                        <h3>{resume?.[0]?.firstName} {resume?.[0]?.middleName} {resume?.[0]?.lastName}</h3>
                    </center>
                    <h2>Profile Summary</h2>
                    <p>{resume?.[0]?.profileSummary}</p>
                </div>
            </div>
        </div>
    );
}