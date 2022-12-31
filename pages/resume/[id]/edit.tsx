import Navbar from "../../../components/navbar";
import EditableResumeFormContainer from "../../../components/editableresumeformcontainer";
import {useRouter} from "next/router";

export default function EditResume() {
    const router = useRouter();

    const { id } = router.query;

    return (
        <>
            <Navbar />
            <EditableResumeFormContainer id={id} />
        </>
    )
}