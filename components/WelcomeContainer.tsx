import WelcomeSection from "./welcomesection";

export default function WelcomeContainer() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <WelcomeSection/>
                </div>
            </div>
        </div>
    );
}