import React from 'react';

const DetailsItem = ({ service }) => {
    const { serviceName, img, price, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Photography" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-sky-500 pb-3">{serviceName}</h2>
                <p className='text-blue-600'>{description.slice(0, 100)}...</p>
                <div className="card-actions text-center my-auto">
                    <p className='text-red-400 pt-2 mr-20'>price: ${price}</p>
                    <button className="btn btn-outline border-none">Details</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsItem;