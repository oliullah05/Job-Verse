import React, { useEffect, useState } from 'react';
import Description from './Description/Description';
import Details from './Details/Details';
import { Link, useParams } from 'react-router-dom';
import { addToDb } from '../../Utilities/fakeDb';


const SingleDetails = () => {






 const {paramsID}=useParams()

 const [datum ,setData]  = useState({})
 useEffect(()=>{
     fetch("/Jobs.json")
     .then(res=>res.json())
     .then(data=>{
        const job = data.find((job) => job.id.toString() === paramsID);
        setData(job);
     })
     
    },[paramsID])
 
    // const {job_title, company_logo, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = datum;
    const {id,job_title, company_logo, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibilities, educational_requirements, required_experience, contact_information } = datum;
    // console.log(contact_information?'yes':"no")
















    const handleAddToCart=(id)=>{
        addToDb(id)
    }
    
           return (
            <section className="container mx-auto my-5 flex gap-4 p-5">
    
        <div className="basis-1/2">
    <p className="mb-5"><span className="font-semibold">Job Description:-</span>{ job_description}</p>
    <p className="mb-5"><span className="font-semibold">Job Responsibilities:-</span>{job_responsibilities}</p>
    <p className="font-semibold mb-3">Educational Requirements:-{educational_requirements}</p>
    <p className="mb-5"></p>
    <p className="font-semibold mb-3">Experiences:{required_experience}</p>
    <p></p>
    
                </div>
    
    
    
    
    
    
    
    
                <div className="basis-1/2 p-5">
           <p className="font-semibold mb-5 text-2xl">Job Details</p>
           <hr />
           <div className="inline-flex"><img src="https://devrahat.com/assets/Icons/Frame.png" alt="" /><span  className="font-bold" >Salary:-</span>{salary}</div>
           <br />
    
           <div className="inline-flex"><img src="https://devrahat.com/assets/Icons/Frame-1.png" alt="" /><span  className="font-bold" >Job Tittle:-</span>{job_title}</div>
    
    
         <p className="text-2xl font-bold py-5">Contact Information</p>
         <hr />
         <div className="inline-flex"><img src="https://devrahat.com/assets/Icons/Frame-2.png" alt="" /><span  className="font-bold" >Phone:-</span>{contact_information?contact_information.phone:"no number given"}</div>
         <br />
    
         <div className="inline-flex"><img src="https://devrahat.com/assets/Icons/Frame-3.png" alt="" /><span  className="font-bold" >Email:-</span>{contact_information?contact_information.email:"no email given"}</div>
         <br />
    
         <div className="inline-flex"><img src="https://devrahat.com/assets/Icons/Frame-4.png" alt="" /><span  className="font-bold" >Address:-</span>{location}</div>
         <br />
    
   
         <div onClick={()=>handleAddToCart(id)} className="btn btn-active btn-primary mt-5">Apply Now</div>
                </div>
    
                
    
    
            </section>
        );
    };
    

export default SingleDetails;