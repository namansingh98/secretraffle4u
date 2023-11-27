import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./i18n.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Utils/Login/Login'
import Signup from './components/Utils/Sigh up/Signup'
import Reward from './Pages/Reward/Reward.jsx'
import Nav from './components/Hero/Navbar/Navbar.jsx'



const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
  }
,
  {
    path: "/login",
    element: <Login />,
  }
  ,
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/reward",
    element: <Reward />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
