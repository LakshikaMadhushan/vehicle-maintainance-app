import React from 'react'
import './App.css';
import Form from './components/Form';
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './views/login'
import Register from './views/register'
import Dashboard from './views/dashboard'
import ManageService from './views/manageService'
import ServiceDetails from './views/serviceDetails'
import Layouts from "./views/layouts";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    // {
    //   path: "/dashboard",
    //   element: <div>dashboard</div>
    // },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/manage-service",
        element:    <Layouts>
            <ManageService/>
            </Layouts>
    },
    {
        path: "/service-details",
        element: <ServiceDetails/>
    }
])

function App() {
    return (<React.StrictMode>
        {/*<BrowserRouter>*/}
        {/*    <Layouts>*/}
                <RouterProvider router={router}/>
            {/*</Layouts>*/}
        {/*</BrowserRouter>*/}
    </React.StrictMode>);
}

export default App;
