import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const Review = () => {
    const service = useLoaderData();
    const { serviceName, retings, img, price, description } = service;
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mx-auto gap-10 pl-10 py-10'>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl text-pink-600">
                        {serviceName}
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-start mt-5">
                        <div className="badge badge-outline text-red-500 border-none">Price: ${price}</div>
                        <div className="badge badge-outline text-sky-500 border-none"><AiFillStar className='text-yellow-400 mr-2' />{retings}</div>
                    </div>
                </div>
            </div>
            <div>
                div
            </div>
        </div>
    );
};

export default Review;