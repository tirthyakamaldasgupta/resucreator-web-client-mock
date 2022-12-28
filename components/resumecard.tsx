import React from 'react';
import Router from "next/router";

type Props = {
    id: number;
    userId: number;
    resumeTitle: string;
};

function redirectToResumeView(id: number) {
    Router.push(`/resume/${id}`)
}

function ResumeCard(props: Props) {
    const { id, userId, resumeTitle } = props;
    return (
        <div className="col-md-4">
            <div className="card" onClick={() => redirectToResumeView(id)}>
                <div className="card-body">
                    <h5 className="card-title">Resume {id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">User ID: {userId}</h6>
                    <p className="card-text">Resume Title: {resumeTitle}</p>
                </div>
            </div>
        </div>
    );
}

export default ResumeCard;
