import { useRouter } from 'next/router';
import Navbar from "../../components/navbar";
import ResumeContainer from "../../components/resumecontainer";

function ResumePage() {
    const router = useRouter();

    const { id } = router.query;

    return (
        <>
            <Navbar />
            <ResumeContainer id={id} />
        </>
    );
}

export default ResumePage;
