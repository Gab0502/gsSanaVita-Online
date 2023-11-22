import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Perfil from './routes/Perfil.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      { path: '/', element: <Home/> },
      { path: '/login', element: <Login/>},
      { path: '/perfil', element: <Perfil/>}
    ],
  },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);