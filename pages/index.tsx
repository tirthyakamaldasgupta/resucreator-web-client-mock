import Head from "next/head";
import Navbar from "../components/navbar";
import WelcomeContainer from "../components/welcomecontainer";

export default function Index() {
    return (
        <>
            <Head>
                <title>Resucreator</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <WelcomeContainer />
        </>
    )
}