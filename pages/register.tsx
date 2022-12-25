import Head from "next/head";
import Navbar from "../components/navbar";
import RegistrationFormContainer from "../components/registrationformcontainer";

export default function Register() {
    return (
        <>
            <Head>
                <title>Register</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <RegistrationFormContainer />
        </>
    )
}