import {Acquaintance} from "../components/Acquaintance/Acquaintance.tsx";
import {Posts} from "../components/Posts/Posts.tsx";
import {Featured} from "../components/Featured/Featured.tsx";

export const JohnPage = () => {
    return(
        <>
            <Acquaintance />
            <Posts />
            <Featured />
        </>
    )
}