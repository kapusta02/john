import {useAppDispatch} from "../../app/store/store"
import './LogOut.css'
import {logOut} from "../../app/slice/appSlice.ts";

export const LogOut = () => {
    const dispatch = useAppDispatch();
    return (
        <>
            <button
                onClick={() => dispatch(logOut())}
                className="logOut-btn"
            >
                Log out
            </button>
        </>
    )
}
