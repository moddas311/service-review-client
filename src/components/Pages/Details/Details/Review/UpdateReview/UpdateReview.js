import React, { useContext } from 'react';
import { AuthContext } from '../../../../../../context/AuthProvider/AuthProvider';

const UpdateReview = ({ service }) => {
    const { user } = useContext(AuthContext);
    const { _id, serviceName } = service;


    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email || 'invalid user';
        const reviewMessage = form.reviewMessage.value;

        const review = {
            serviceId: _id,
            serviceName: serviceName,
            client: name,
            email,
            reviewMessage
        }
        if (!name) {
            alert('Without Name you can not join my review section');
        }
        else {
            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'Application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Thanks for your review');
                        form.reset();
                    }
                })

                .catch(er => console.error(er));
        }
    }

    return (

        <div>
            <form onSubmit={handleReview} className='my-5 px-4'>
                <h3 className='text-3xl text-teal-500 font-semibold'>Please type your review <br />
                    about: <span className='text-cyan-400'>{service.serviceName}</span></h3>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 my-5'>
                    <input name='name' type="text" placeholder="User Name" defaultValue={user.displayName} className="input input-bordered" readOnly />
                    <input name='email' type="email" placeholder="Your email" className="input input-bordered" defaultValue={user?.email} readOnly />
                </div>
                <textarea name='reviewMessage' className="textarea textarea-bordered h-24 w-full" placeholder="Please! type your valuable Review" required></textarea>
                <div className='text-center'>
                    <input className='btn btn-outline border-none bg-gray-200 my-1' type="submit" value="submit your Review" />
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;