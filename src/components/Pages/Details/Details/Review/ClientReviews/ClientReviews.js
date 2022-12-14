import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../../../../hooks/useTitle';
import ClientReviewRow from './ClientReviewRow';


const ClientReviews = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('MyReviews')


    useEffect(() => {
        fetch(`https://service-review-assignment11-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('reviewToken')}`
            }
        })
            .then(res => {
                if (res.status === 401) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))

    }, [user?.email, logOut]);

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure!, You Want To Delete Your Review?');
        if (proceed) {
            fetch(`https://service-review-assignment11-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('reviewToken')}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Review removed successfully!');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    }

    return (
        <div className='my-10 p-10 border-red-400'>
            <h2 className='text-5xl text-center text-pink-500 pb-10'>Client's Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='pl-24'>Image & Name</th>
                            <th>Review's Photography</th>
                            <th>ReviewMessage</th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody className='p-8'>
                        {
                            reviews.map(review => <ClientReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClientReviews;