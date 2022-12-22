import Head from "next/head";
import LoginFormContainer from "../components/loginformcontainer";
import Navbar from "../components/navbar";

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <LoginFormContainer />
        </>
    )
}