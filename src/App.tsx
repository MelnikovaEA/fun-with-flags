import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
        </>
    )
}

export default App
