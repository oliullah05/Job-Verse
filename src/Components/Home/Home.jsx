import React from 'react';
import Banner from './Banner/Banner';
import FeaturedJobs from './Featured Jobs/FeaturedJobs';
import JobCategory from './JobCategory/JobCategory';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
          
           <JobCategory></JobCategory>
      
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;