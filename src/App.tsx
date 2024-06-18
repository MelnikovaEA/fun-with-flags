import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";

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
