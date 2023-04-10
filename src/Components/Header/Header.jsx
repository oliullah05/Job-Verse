// import React from 'react';

// import { NavLink, Outlet } from 'react-router-dom';
// import "./Header.css"

// const Header = () => {
//     return (
        
//         <>
       
//             <nav className='text-2xl p-3 bg-slate-500 flex justify-between container mx-auto'>
//             <h1 className='text-3xl '>Job Nexus</h1>
//           <div>
//           <NavLink className={`ml-4 text-white ${({ isActive}) => isActive? "active" : ""}`} to="/">Home</NavLink>

//             <NavLink className={`ml-4 text-white ${({ isActive}) => isActive? "active" : ""}`}  to="/statistics">Statistics</NavLink>

//             <NavLink className={`ml-4 text-white ${({ isActive}) => isActive? "active" : ""}`}  to="/applied_jobs">Applied Jobs</NavLink>

//             <NavLink className={`ml-4 text-white ${({ isActive}) => isActive? "active" : ""}`}  to="/blog">Blog</NavLink>

//             <NavLink className={`ml-4 text-white ${({ isActive}) => isActive? "active" : ""}`}  to="/job">job</NavLink>

//           </div>
//             <button className=''>Start Applying</button>
           
//         </nav>
//         <Outlet></Outlet>
//         </>
//     );
// };

// export default Header;


import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className='text-2xl p-3 bg-slate-500 flex justify-between container mx-auto'>
        <h1 className='text-3xl'>Job Nexus</h1>
        <div className='flex items-center'>
          <div className='hidden md:flex'>
            <NavLink className={`ml-4 text-white ${({ isActive }) => isActive ? "active" : ""}`} to="/">Home</NavLink>

            <NavLink className={`ml-4 text-white ${({ isActive }) => isActive ? "active" : ""}`} to="/statistics">Statistics</NavLink>

            <NavLink className={`ml-4 text-white ${({ isActive }) => isActive ? "active" : ""}`} to="/applied_jobs">Applied Jobs</NavLink>

            <NavLink className={`ml-4 text-white ${({ isActive }) => isActive ? "active" : ""}`} to="/blog">Blog</NavLink>

            <NavLink className={`ml-4 text-white ${({ isActive }) => isActive ? "active" : ""}`} to="/job">Job</NavLink>

            <NavLink className={`ml-4 text-white ${({ isActive }) => isActive ? "active" : ""}`} to="/local">Local</NavLink>
          </div>
          <button className='md:hidden' onClick={toggleMobileMenu}>
            <svg className="h-8 w-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path d="M19.415,4.585l-14,14 M5.415,4.585l14,14"></path>
              ) : (
                <path d="M4,6H20 M4,12H20 M4,18H20"></path>
              )}
            </svg>
          </button>
        </div>
        <button className='hidden md:block'>Start Applying</button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-500 p-4">
          <NavLink className={`block text-white py-2`} to="/" onClick={toggleMobileMenu}>Home</NavLink>
          <NavLink className={`block text-white py-2`} to="/statistics" onClick={toggleMobileMenu}>Statistics</NavLink>
          <NavLink className={`block text-white py-2`} to="/applied_jobs" onClick={toggleMobileMenu}>Applied Jobs</NavLink>
          <NavLink className={`block text-white py-2`} to="/blog" onClick={toggleMobileMenu}>Blog</NavLink>
          <NavLink className={`block text-white py-2`} to="/job" onClick={toggleMobileMenu}>Job</NavLink>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Header;








// import React, { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <nav className="p-3 bg-slate-500">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-3xl hidden sm:block text-white">Job Nexus</h1>
//           <button
//             className="block md:hidden text-white focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//             <svg
//               className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//           <div
//             className={`${
//               isOpen ? 'block' : 'hidden'
//             } md:flex md:items-center w-full md:w-auto`}
//           >
//             <div className="text-lg md:flex-grow">
//               <NavLink
//                 className="block mt-4 md:inline-block md:mt-0 text-white mr-6"
//                 activeClassName="active"
//                 exact
//                 to="/"
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 className="block mt-4 md:inline-block md:mt-0 text-white mr-6"
//                 activeClassName="active"
//                 to="/statistics"
//               >
//                 Statistics
//               </NavLink>
//               <NavLink
//                 className="block mt-4 md:inline-block md:mt-0 text-white mr-6"
//                 activeClassName="active"
//                 to="/applied_jobs"
//               >
//                 Applied Jobs
//               </NavLink>
//               <NavLink
//                 className="block mt-4 md:inline-block md:mt-0 text-white mr-6"
//                 activeClassName="active"
//                 to="/blog"
//               >
//                 Blog
//               </NavLink>
//               <NavLink
//                 className="block mt-4 md:inline-block md:mt-0 text-white mr-6"
//                 activeClassName="active"
//                 to="/job"
//               >
//                 Job
//               </NavLink>
//             </div>
//             <button className="block md:inline-block px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
//               Start Applying
//             </button>
//           </div>
//         </div>
//       </nav>
//       <Outlet />
//     </>
//   );
// };

// export default Header;










