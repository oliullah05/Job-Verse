import React, { useEffect, useState } from 'react';
import Description from './Description/Description';
import Details from './Details/Details';


const SingleDetails = () => {
    const [datum ,setData]  = useState([])
    useEffect(()=>{
       fetch("Jobs.json")
       .then(res=>res.json())
       .then(data=>setData(data))
    },[])
    return (
        <div>
           {
            datum.map(des=> <Description des={des}></Description>)
           }
            {/* <Details></Details> */}
        </div>
    );
};

export default SingleDetails;