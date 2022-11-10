import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar, AiOutlineArrowRight } from 'react-icons/ai';
import UpdateReview from './UpdateReview/UpdateReview';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';
import RecentReviews from './UpdateReview/RecentReviews/RecentReviews';
import useTitle from '../../../../../hooks/useTitle';

const Review = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { serviceName, retings, img, price, description } = service;
    useTitle('Review')
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
            <div className='text-center my-auto'>
                {
                    user?.email ?
                        <div>
                            <div className='my-5'>
                                <RecentReviews />
                            </div>
                            <div>
                                <UpdateReview service={service} />
                            </div>
                        </div>
                        :
                        <>
                            <h3 className='text-3xl pb-10'>Please! Login before Review</h3>
                            <Link to='/login' className='btn btn-outline border-none bg-gray-200'>Please Login<AiOutlineArrowRight /></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Review;