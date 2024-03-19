import {Link} from 'react-router-dom'
import './Header.css'
import {useSelector} from 'react-redux'
import {TRootState} from "../../app/store/store.ts";
import {LogOut} from "../LogOut/LogOut.tsx";

export const Header = () => {
    const { user } = useSelector((state: TRootState) => state.app);

    return (
        <>
            <div className='header-block'>
                <nav>
                    <ul>
                        {!!user ?
                            <>
                                <Link to='/' className='header-block-list-item'>Works</Link>
                                <Link to='/' className='header-block-list-item'>Blog</Link>
                                <Link to='/' className='header-block-list-item'>Contact</Link>
                                <LogOut />
                            </>
                            :
                            <>
                                <Link to='/signUp' className='header-block-list-item'>Sigh Up</Link>
                                <Link to='/signIn' className='header-block-list-item'>Sign In</Link>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </>
    );
};

