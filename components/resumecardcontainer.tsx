import React from 'react';
import ResumeCard from "../components/resumecard";
import Router from "next/router";

type Props = {
    resumes: Array<{ userId: number; data: { resumeTitle: string }; id: number }>;
};

function ResumeCardContainer(props: Props) {
    function redirectToNewResumePage() {
        Router.push('/newresume');
    }

    const { resumes } = props;

    return (
        <div className="container">
            <div className="row">
                <button type="button" className="btn btn-primary" onClick={redirectToNewResumePage}>+</button>

                {resumes.map((resume) => (
                    <div className="col-md-4" key={resume.id}>
                        <ResumeCard id={resume.id} userId={resume.userId} resumeTitle={resume.data.resumeTitle} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResumeCardContainer;
