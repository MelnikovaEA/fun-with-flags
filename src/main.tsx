import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App.tsx';
import './index.css';
import HomePage from "./components/pages/HomePage.tsx";
import DetailsPage from "./components/pages/detailsPage/DetailsPage.tsx";
import NotFoundPage from "./components/pages/NotFoundPage.tsx";
import {store} from "./store.ts";

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

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
