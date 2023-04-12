import React from 'react';
import "./SingleJob.css"
import { Link, Navigate } from 'react-router-dom';

const SingleJob = ({ job }) => {
 
    const {id, job_title, company_logo, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = job;

    return (
       <section className='md:p-8 '>
         <div className='p-8 flex flex-col border border-stone-200 rounded-lg  lg:pl-20 '>
            <img className='logo w-28  my-auto' src={company_logo} alt="" />
            <h1 className='text-2xl font-bold mt-5 mb-3'>{job_title}</h1>
            <p className='mb-2'>{company_name}</p>
            <p className='py-4 flex gap-4'>
                <button className='btn-outlined '>{remote_or_onsite}</button>
                <button className='btn-outlined '>{fulltime_or_parttime}</button>
            </p>

            <div className='flex gap-4'>
                <p className='inline-flex items-center'><img className='md:h-[100%] h-9' src="https://devrahat.com/assets/Icons/Frame-4.png" alt="" /><span>{location}</span></p>


                <p className='inline-flex items-center'>
                    <img className='md:h-[100%]  h-9' src="https://devrahat.com/assets/Icons/Frame.png" alt="" />Salary:  {salary}</p>
            </div>
            <div>
               <Link to={`job/${id}`}> <button className='px-5 py-3 mb-auto details-btn my-5'>View Details</button></Link>
            </div>

            
        </div>
       </section>
    );
};

export default SingleJob;