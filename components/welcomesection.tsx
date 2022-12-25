import Link from "next/link";

export default function Welcomesection() {
    return (
        <>
            <h1>Welcome to Resucreator</h1>
            <h1>Create your resume now!</h1>
            <Link className="btn btn-primary" href="/test" role="button">-&gt;</Link>
        </>
    );
}