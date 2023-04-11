import React from 'react'

import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home';
import SingleDetails from './Components/SingleDetails/SingleDetails.jsx';
import Statistics from './Components/Statistics/statistics';
import Local from './Components/Local/Local';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"job/:id",
        element:<SingleDetails></SingleDetails>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/applied_jobs",
        element: <div>JOBS</div>,
      },
      {
        path:"/blog",
        element: <div>Blog</div>,
      },
      {
        path:"/job",
        element:<SingleDetails></SingleDetails>,
      },
      {
        path:"/local",
        element:<Local></Local>,
        loader:()=>fetch("Jobs.json")
      }
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
