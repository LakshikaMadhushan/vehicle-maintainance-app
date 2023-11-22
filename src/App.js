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
import ManageItemCategory from "./views/manageItemCategory";
import ManageMechanicServiceCategory from "./views/manageMechanicServiceCategory";
import ManageReport from "./views/report";
import ManageVehicle from "./views/ManageVehicle";
import {Navigate} from "react-router";

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
    },
    {
        path: "/manage-item-category",
        element: <Layouts>
            <ManageItemCategory />
        </Layouts>
    },
    {
        path: "/manage-mechanic-service-category",
        element: <Layouts>
            <ManageMechanicServiceCategory />
        </Layouts>
    },
    {
        path: "/report",
        element: <Layouts>
            <ManageReport />
        </Layouts>
    },
    {
        path: "/vehicle",
        element: <Layouts>
            <ManageVehicle />
        </Layouts>
    },
    {
        path: "/",
        element:<Navigate to="/dashboard" />
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
