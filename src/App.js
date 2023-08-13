import React from 'react'
import './App.css';
import Form from './components/Form';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './views/login'
import Register from './views/register'
import Dashboard from './views/dashboard'
import ManageService from './views/manageService'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  // {
  //   path: "/dashboard",
  //   element: <div>dashboard</div>
  // },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path:"/register",
    element:<Register />
  },
  {
    path:"/manage-service",
    element:<ManageService />
  }
])

function App() {
  return (<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);
}

export default App;
