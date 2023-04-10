import React, { useEffect, useState } from 'react';
import "./FeaturedJobs.css"
import SingleJob from './singleJob/SingleJob';

const FeaturedJobs = () => {
const [allJObs,setAllJObs]=useState([]);
useEffect(()=>{
    fetch('Jobs.json').then(res=>res.json().then(data=>setAllJObs(data)))
},[])


    return (
        <div className='m-2'>
            <h1 className='text-4xl font-bold text-center'>Featured Jobs</h1>
            <p className='p-3 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
       <div className='grid grid-cols-2 gap-5'>
       {
               allJObs.map(job=><SingleJob key={job.id} job={job}></SingleJob>)
       }
       </div>

        </div>
    );
};

export default FeaturedJobs;