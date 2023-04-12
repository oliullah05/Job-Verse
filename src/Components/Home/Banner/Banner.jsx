import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <section className='Banner md:flex justify-center items-center gap-4 md:gap-0 mt-5'>
           <div>
    <h1 className='md:text-6xl lg:text-8xl text-3xl'>One Step Closer To Your <br className='hidden sm:block md:hidden lg:hidden'/><span>Dream Job</span></h1>
    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
    <button>Get started</button>
           </div>


           <div>
<img src="https://devrahat.com/assets/All%20Images/P3OLGJ1%20copy%201.png" alt="" />

           </div>
        </section>
    );
};

export default Banner;