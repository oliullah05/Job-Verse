import React from 'react';
import "./SingleCategory.css"

const SingleCategory = ({singleCategory}) => {
    const {id,Category_logo,Category_name,Jobs_available}=singleCategory;

    return (
        <div className='SingleCategory p-5'>
            <img className='py-5' src={Category_logo} alt="" />
            <h1 className='text-2xl font-bold'>{Category_name}</h1>
            <p className='py-5'>{Jobs_available}</p>
        </div>
    );
};

export default SingleCategory;