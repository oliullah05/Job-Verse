import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        
        <>
       
            <nav className='text-2xl p-3 bg-slate-500 flex justify-between container mx-auto'>
            <h1 className='text-3xl '>Job Nexus</h1>
          <div>
          <NavLink className={`ml-4 text-white ${({ isActive}) => isActive? "active" : ""}`} to="/">Home</NavLink>

            <NavLink className={`ml-4 text-white ${({ isActive}) => isActive? "active" : ""}`}  to="/statistics">Statistics</NavLink>

            <NavLink className={`ml-4 text-white ${({ isActive}) => isActive? "active" : ""}`}  to="/applied_jobs">Applied Jobs</NavLink>

            <NavLink className={`ml-4 text-white ${({ isActive}) => isActive? "active" : ""}`}  to="/blog">Blog</NavLink>

            <NavLink className={`ml-4 text-white ${({ isActive}) => isActive? "active" : ""}`}  to="/job">job</NavLink>

          </div>
            <button className=''>Start Applying</button>
           
        </nav>
        <Outlet></Outlet>
        </>
    );
};
{/* <NavLink
to={``}
className={({ isActive,}) =>
  isActive? "active" : ""
}
>
</NavLink> */}
export default Header;