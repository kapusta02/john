import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout.tsx";
import {SignUp} from "./components/Auth/SignUp.tsx";
import {SignIn} from "./components/Auth/SignIn.tsx";
import {JohnPage} from "./container/JohnPage.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<JohnPage />}/>
                        <Route path='/signUp' element={<SignUp/>}/>
                        <Route path='/signIn' element={<SignIn/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
