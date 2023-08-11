import React from 'react'
import './App.css';
import Form from './components/Form';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './views/login'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <div>dashboard</div>
  }
])

function App() {
  return (<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);
}

export default App;
