import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LocalDesign from './LocalDesign';

const Local = () => {

    const { savedCart } = useLoaderData();

    const [filteredCart, setfilteredCart] = useState(savedCart);
    return (

        <section className='container mx-auto'>

            <div className='flex justify-end '>
                <div className="dropdown dropdown-left dropdown-end">
                    <div tabIndex={0} className='inline-flex gap-1 font-medium shadow-sm px-4 py-2 text-lg rounded-md text-gray-700 border-2 border-transparent bg-slate-100 m-1 items-center'>
                        <label className="">Filter By</label>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='hover:bg-slate-200'><button onClick={() => {
                            setfilteredCart(savedCart.filter(job => job.remote_or_onsite === 'Remote'))
                        }}>Remote</button></li>
                        <li className='hover:bg-slate-200'><button onClick={() => {
                            setfilteredCart(savedCart.filter(job => job.remote_or_onsite === 'Onsite'))
                        }}>On-site</button></li>
                    </ul>
                </div>
            </div>


            {
                filteredCart.map(data => <LocalDesign data={data}></LocalDesign>)
            }
        </section>
    );
};

export default Local;