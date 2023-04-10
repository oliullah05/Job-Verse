import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LocalDesign from './LocalDesign';

const Local = () => {
    const datum =useLoaderData()
  
    
    return (
        <section className=''>
         {
            datum.map(data=><LocalDesign data={data}></LocalDesign>)
         }
        </section>
    );
};

export default Local;