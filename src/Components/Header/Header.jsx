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
    <section className='header'>
      <nav className='text-2xl p-3 bg-slate-500 flex justify-between container mx-auto'>
        <h1 className='text-3xl'>Job-Verse</h1>
        <div className='flex items-center'>
          <div className='hidden md:flex'>
            <NavLink className={`ml-4 text-white ${({ isActive }) => isActive ? "active" : ""}`} to="/">Home</NavLink>

            <NavLink className={`ml-4 text-white ${({ isActive }) => isActive ? "active" : ""}`} to="/statistics">Statistics</NavLink>


            <NavLink className={`ml-4  text-white ${({ isActive }) => isActive ? "active" : ""}`} to="/applied_jobs">Applied Jobs</NavLink>

            
            <NavLink className={`ml-4 text-white ${({ isActive }) => isActive ? "active" : ""}`} to="/blog">Blog</NavLink>

        

          </div>
          <button className='md:hidden' onClick={toggleMobileMenu}>
            <svg className="h-8 w-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              {isMobileMenuOpen ? (
                <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" fillRule="evenodd"></path>
              ) : (
                <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" fillRule="evenodd"></path>
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
        </div>
      )}
      <Outlet />
    </section>
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
//       <nav className="text-2xl p-3 bg-slate-500 flex justify-between container mx-auto">
//         <h1 className="text-3xl hidden md:block">Job Nexus</h1>
//         <button className="block sm:hidden" onClick={toggleMenu}>
//           <svg
//             className="w-6 h-6 fill-current text-white"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path
//               d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z"
//               fillRule="evenodd"
//             />
//           </svg>
//         </button>
//         <div className={`sm:flex ${isOpen ? 'block' : 'hidden'}`}>
//           <NavLink
//             className="block sm:inline-block ml-4 text-white"
//             to="/"
//             onClick={toggleMenu}
//           >
//             Home
//           </NavLink>

//           <NavLink
//             className="block sm:inline-block ml-4 text-white"
//             to="/statistics"
//             onClick={toggleMenu}
//           >
//             Statistics
//           </NavLink>

//           <NavLink
//             className="block sm:inline-block ml-4 text-white"
//             to="/applied_jobs"
//             onClick={toggleMenu}
//           >
//             Applied Jobs
//           </NavLink>

//           <NavLink
//             className="block sm:inline-block ml-4 text-white"
//             to="/blog"
//             onClick={toggleMenu}
//           >
//             Blog
//           </NavLink>

//           <NavLink
//             className="block sm:inline-block ml-4 text-white"
//             to="/job"
//             onClick={toggleMenu}
//           >
//             Job
//           </NavLink>
//         </div>
//         <button className="hidden sm:block">Start Applying</button>
//       </nav>
//       <Outlet />
//     </>
//   );
// };

// export default Header;

