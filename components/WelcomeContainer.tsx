export default function WelcomeContainer() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h1>Welcome to Resucreator</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>Create your resume now!</h1>
                </div>
            </div>
            <a className="btn btn-primary" href="/test" role="button">-&gt;</a>
        </div>
    );
}