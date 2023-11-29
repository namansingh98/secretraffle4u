import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./i18n.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Utils/Login/Login'
import Signup from './components/Utils/Sigh up/Signup'
import Reward from './Pages/Reward/Reward.jsx'
import Navbar from './components/Hero/Navbar/Navbar.jsx'
import Explanation from './Pages/Game Explanation/Explanation.jsx'
import Footer from './components/Hero/Footer/Footer.jsx'
import Promotions from './Pages/Promotion/Promotions.jsx'
import Cards from './Pages/scrat cards/Cards.jsx'
import "./components/Utils/global/utils.css"


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
  {
    path: "/explanation",
    element: <Explanation />,
  },
  {
    path: "/promotions",
    element: <Promotions />,
  },
  {
    path: "/scratchcards",
    element: <Cards />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)
