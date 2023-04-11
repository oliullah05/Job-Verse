
import "./description.css"

const Description = ({id,des}) => {
 const {job_description,job_responsibilities,educational_requirements,required_experience,contact_information,salary,job_title,location}=des;



    return (
        <section className="container mx-auto my-5 flex gap-4 p-5">

            <div className="basis-1/2">
<p className="mb-5"><span className="font-semibold">Job Description:-</span>{job_description}</p>
<p className="mb-5"><span className="font-semibold">Job Responsibilities:-</span>{job_responsibilities}</p>
<p className="font-semibold mb-3">Educational Requirements:-</p>
<p className="mb-5">{educational_requirements}</p>
<p className="font-semibold mb-3">Experiences:</p>
<p>{required_experience}</p>

            </div>

















            <div className="basis-1/2 p-5">
       <p className="font-semibold mb-5 text-2xl">Job Details</p>
       <hr />
       <div className="inline-flex"><img src="../../../../assets/Icons/Frame.png" alt="" /><span  className="font-bold" >Salary:-</span>{salary}</div>
       <br />

       <div className="inline-flex"><img src="../../../../assets/Icons/Frame-1.png" alt="" /><span  className="font-bold" >Job Tittle:-</span>{job_title}</div>


     <p className="text-2xl font-bold py-5">Contact Information</p>
     <hr />
     <div className="inline-flex"><img src="../../../../assets/Icons/Frame-2.png" alt="" /><span  className="font-bold" >Phone:-</span>{contact_information.phone}</div>
     <br />

     <div className="inline-flex"><img src="../../../../assets/Icons/Frame-3.png" alt="" /><span  className="font-bold" >Email:-</span>{contact_information.email}</div>
     <br />

     <div className="inline-flex"><img src="../../../../assets/Icons/Location Icon.png" alt="" /><span  className="font-bold" >Address:-</span>{location}</div>
     <br />

     <div className="btn btn-active btn-primary mt-5">Apply Now</div>
            </div>

            


        </section>
    );
};

export default Description;