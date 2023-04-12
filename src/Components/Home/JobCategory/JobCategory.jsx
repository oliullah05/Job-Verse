import React, { useEffect, useState } from 'react';
import "./JobCategory.css"
import SingleCategory from './SingleCategory/SingleCategory';

const JobCategory = () => {
const [JobsCategory,setJobsCategory]=useState([]);
useEffect(()=>{
fetch("jobCategory.json").then(res=>res.json()).then(data=>setJobsCategory(data))
},[])


    return (
        <div className='JobCategory pb-28 pt-16 bg-white'>
            <h1 className='text-4xl text-center font-bold'>Job Category List</h1>
            <p className='text-center p-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                JobsCategory.map(singleCategory=><SingleCategory key={singleCategory.id} singleCategory={singleCategory}></SingleCategory>)

            }
            </div>
        </div>
    );
};

export default JobCategory;