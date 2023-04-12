import React, { useEffect, useState } from 'react';
import "./FeaturedJobs.css"
import SingleJob from './singleJob/SingleJob';

const FeaturedJobs = () => {
   
    const [allJObs, setAllJObs] = useState([]);
    useEffect(() => {
        fetch('Jobs.json').then(res => res.json().then(data => setAllJObs(data)))
    }, [])

    const [seeMore, setSeeMore] = useState(false);
    return (
        <section className='FeaturedJobs my-5 bg-white '>
            <h1 className='text-4xl font-bold text-center'>Featured Jobs</h1>
            <p className='p-3 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='singleJob grid grid-cols-1 gap-4 md:grid-cols-2 '>
                {allJObs &&
                    allJObs.slice(0, seeMore ? 6 : 4).map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>

            <div className='flex justify-center pt-3'>
                <button onClick={() => setSeeMore(!seeMore)} type='button' className={`btn-primary ${seeMore ? 'hidden' : ''}`}>
                    See All Jobs
                </button>
            </div>

        </section>
    );
};

export default FeaturedJobs;