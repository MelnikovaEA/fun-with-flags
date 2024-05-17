import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import HomePage from "./components/pages/HomePage.tsx";
import DetailsPage from "./components/pages/detailsPage/DetailsPage.tsx";
import NotFoundPage from "./components/pages/NotFoundPage.tsx";
import {CountryProvider} from "./components/contexts/CountriesContext.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/country/:name",
                element: <DetailsPage/>,
            },
            {
                path: "/*",
                element: <NotFoundPage/>,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
        <CountryProvider>
            <RouterProvider router={router}/>
        </CountryProvider>
    // </React.StrictMode>,
)
