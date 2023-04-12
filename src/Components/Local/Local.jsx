import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LocalDesign from './LocalDesign';

const Local = () => {

const {savedCart}=useLoaderData();
    
    return (
        <section className=''>
         {
            savedCart.map(data=><LocalDesign data={data}></LocalDesign>)
         }
        </section>
    );
};

export default Local;