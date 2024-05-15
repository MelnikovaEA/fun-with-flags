import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Controls from "./components/Controls.tsx";

function App() {

    return (
        <>
            <Header />
            <Main>
                <Controls />
            </Main>
        </>
    )
}

export default App
