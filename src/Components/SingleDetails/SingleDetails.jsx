import React, { useEffect, useState } from 'react';
import Description from './Description/Description';
import Details from './Details/Details';
import { useParams } from 'react-router-dom';


const SingleDetails = () => {
 const {id}=useParams()

 const [datum ,setData]  = useState({})
 useEffect(()=>{
     fetch("/Jobs.json")
     .then(res=>res.json())
     .then(data=>{
        const job = data.find((job) => job.id.toString() === id);
        setData(job);
     })
     
    },[id])
 
    
    console.log(datum.location);
  
     {/* {datum &&
            datum.map(des=> <Description des={des}></Description>)
           } */}

           return (
            <section className="container mx-auto my-5 flex gap-4 p-5">
    
        <div className="basis-1/2">
    <p className="mb-5"><span className="font-semibold">Job Description:-</span>{datum.location}</p>
    <p className="mb-5"><span className="font-semibold">Job Responsibilities:-</span></p>
    <p className="font-semibold mb-3">Educational Requirements:-</p>
    <p className="mb-5"></p>
    <p className="font-semibold mb-3">Experiences:</p>
    <p></p>
    
                </div>
    
    
    
    
    
    
    
    
                <div className="basis-1/2 p-5">
           <p className="font-semibold mb-5 text-2xl">Job Details</p>
           <hr />
           <div className="inline-flex"><img src="../../../../assets/Icons/Frame.png" alt="" /><span  className="font-bold" >Salary:-</span></div>
           <br />
    
           <div className="inline-flex"><img src="../../../../assets/Icons/Frame-1.png" alt="" /><span  className="font-bold" >Job Tittle:-</span></div>
    
    
         <p className="text-2xl font-bold py-5">Contact Information</p>
         <hr />
         <div className="inline-flex"><img src="../../../../assets/Icons/Frame-2.png" alt="" /><span  className="font-bold" >Phone:-</span></div>
         <br />
    
         <div className="inline-flex"><img src="../../../../assets/Icons/Frame-3.png" alt="" /><span  className="font-bold" >Email:-</span></div>
         <br />
    
         <div className="inline-flex"><img src="../../../../assets/Icons/Location Icon.png" alt="" /><span  className="font-bold" >Address:-</span></div>
         <br />
    
         <div className="btn btn-active btn-primary mt-5">Apply Now</div>
                </div>
    
                
    
    
            </section>
        );
    };
    

export default SingleDetails;