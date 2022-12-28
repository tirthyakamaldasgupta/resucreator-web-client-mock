import {getCookie} from "cookies-next";
import axios from "axios";
import {useEffect, useState} from "react";
import { jsPDF } from "jspdf";
import {fontStyle} from "html2canvas/dist/types/css/property-descriptors/font-style";
import Router from "next/router";

type Props = {
    id: string | string[] | undefined;
}

export default function ResumeContainer(props: Props) {
    const [resume, setResume] = useState<Array<{ userId: number; resumeTitle: string; firstName: string; middleName: string; lastName: string; profileSummary: string; id: number }>>([]);

    function exportResumeToPDF() {
        const document = new jsPDF();

        const resumeTitleTextWidth = document.getStringUnitWidth(resume?.[0]?.resumeTitle) * document.getFontSize() / document.internal.scaleFactor;

        const resumeTitleTextXCoordinate = (document.internal.pageSize.width - resumeTitleTextWidth) / 2;

        document.setFont("normal", "bold")
        document.text(resume?.[0]?.resumeTitle, resumeTitleTextXCoordinate, 15);

        const fullNameTextWidth = document.getStringUnitWidth(`${resume?.[0]?.firstName} ${resume?.[0]?.middleName} ${resume?.[0]?.lastName}`) * document.getFontSize() / document.internal.scaleFactor;

        const fullNameTextXCoordinate = (document.internal.pageSize.width - fullNameTextWidth) / 2;

        document.setFont("normal", "normal")
        document.text(`${resume?.[0]?.firstName} ${resume?.[0]?.middleName} ${resume?.[0]?.lastName}`, fullNameTextXCoordinate, 25);

        document.setFont("normal", "bold")
        document.text("Profile Summary", 12, 40);

        document.setFont("normal", "normal")
        document.text(resume?.[0]?.profileSummary, 12, 50, {maxWidth: 190});

        document.save(`${resume?.[0]?.firstName}-${resume?.[0]?.middleName}-${resume?.[0]?.lastName}-${resume?.[0]?.resumeTitle}.pdf`);
    }

    async function deleteResume() {
        const configuration = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };

        const apiResponse = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_API_ENDPOINT}/600/resumes/${id}`, configuration)

        if (apiResponse.status === 200) {
            Router.push("/resumes")
        }
    }

    async function editResume() {

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

    const { BASE_API_ENDPOINT } = process.env;

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
                    <button type="button" className="btn btn-primary me-2" onClick={editResume}>Edit</button>
                    <button type="button" className="btn btn-secondary mx-2" onClick={exportResumeToPDF}>Export</button>
                    <button type="button" className="btn btn-danger mx-2" onClick={deleteResume}>Delete</button>
                </div>
            </div>
        </div>
    );
}