import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../../../../../hooks/useTitle';
import Latestreviews from './Latestreviews';

const RecentReviews = () => {

    const { user } = useContext(AuthContext);
    const [latestReviews, setLatestReviews] = useState([]);
    useTitle('recentReviews')


    useEffect(() => {
        fetch('http://localhost:5000/latestReviews')
            .then(res => res.json())
            .then(data => setLatestReviews(data))

    }, []);

    return (
        <div className='my-10 p-10 border-red-400'>
            <h2 className='text-5xl text-center text-pink-500 pb-10'>Recent Reviews</h2>
            <div className=" w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='pl-24'>Image & Name</th>
                            <th>Review's Photography & Review</th>
                        </tr>
                    </thead>
                    <tbody className='p-8'>
                        {
                            latestReviews.map(latestReview => <Latestreviews
                                key={latestReview._id}
                                latestReview={latestReview}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentReviews;