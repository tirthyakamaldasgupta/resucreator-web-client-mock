import Head from "next/head";
import LoginFormContainer from "../components/LoginformContainer";
import Navbar from "../components/Navbar";

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar />
            <LoginFormContainer />
        </>
    )
}