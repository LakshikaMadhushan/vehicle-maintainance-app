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
import ManageItem from "./views/manageItem";
import ManageMechanicService from "./views/ManageMechanicService";
import ManageTechnician from "./views/ManageTecnician";
import ManageAdmin from "./views/ManageAdmin";
import ManageCustomer from "./views/ManageCustomer";

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
        element: <Layouts>
            <Dashboard/>
        </Layouts>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/manage-service",
        element: <Layouts>
            <ManageService/>
        </Layouts>
    },
    {
        path: "/service-details",
        element: <Layouts>
            <ServiceDetails/>
        </Layouts>
    },
    {
        path: "/manage-item",
        element: <Layouts>
            <ManageItem/>
        </Layouts>
    },
    {
        path: "/manage-mechanic-service",
        element: <Layouts>
            <ManageMechanicService/>
        </Layouts>
    },
    {
        path: "/manage-technician",
        element: <Layouts>
            <ManageTechnician/>
        </Layouts>
    },
    {
        path: "/manage-admin",
        element: <Layouts>
            <ManageAdmin />
        </Layouts>
    },
    {
        path: "/manage-customer",
        element: <Layouts>
            <ManageCustomer />
        </Layouts>
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
