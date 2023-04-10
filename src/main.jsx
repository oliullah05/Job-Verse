import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:"/home",
        element: <Home></Home>
      },
      {
        path:"/statistics",
        element: <div>staatics</div>,
      },
      {
        path:"/applied_jobs",
        element: <div>JOBS</div>,
      },
      {
        path:"/blog",
        element: <div>Blog</div>,
      },
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
