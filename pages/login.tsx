import Head from "next/head";
import LoginFormContainer from "../components/loginformcontainer";
import Navbar from "../components/navbar";
import { getCookie } from 'cookies-next';

export default function Login() {
    if (getCookie("token")) {
        return (
            <>
                <Head>
                    <title>Login</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <Navbar />
                <h1>Already logged in!</h1>
            </>
        )
    } else {
        return (
            <>
                <Head>
                    <title>Login</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <Navbar/>
                <LoginFormContainer/>
            </>
        )
    }
}