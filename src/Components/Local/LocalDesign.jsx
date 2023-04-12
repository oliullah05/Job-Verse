import React from 'react';

const LocalDesign = ({data}) => {
    const { job_title, company_logo, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = data;
    
    return (
        <section className='flex items-center container mx-auto my-4 b bg-slate-200'>

               <div className='basis-[25%] flex justify-center items-center'>
                <img className='h-28 w-40' src={company_logo} alt="" />
            </div>


            <div className='basis-[50%] p-6'>
                <h1 className='text-3xl font-bold py-4'>{job_title}</h1>
                <p className='text-2xl pt-2 mb-4'>{company_name}</p>

                <p className='py-4 flex gap-4'>
                <button className='btn-outlined '>{remote_or_onsite}</button>
                <button className='btn-outlined '>{fulltime_or_parttime}</button>
            </p>


                <div className='flex gap-4'>
                <p className='inline-flex items-center'><img className='h-[75%] my-auto' src="https://devrahat.com/assets/Icons/Frame-4.png" alt="" /><span>{location}</span></p>


                <p className='inline-flex items-center'>
                    <img className='h-[75%]' src="https://devrahat.com/assets/Icons/Frame.png" alt="" />Salary:  {salary}</p>
            </div>
            </div>




            <div className='basis-[25%] flex justify-center items-center'>
                <button className='px-7 py-6 details-btn my-5 '>View Details</button>
            </div>
        </section>
    );
};

export default LocalDesign;