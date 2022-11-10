import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Profile = () => {
    const { user } = useContext(AuthContext);

    const { displayName, email, photoURL } = user;
    useTitle('Profile')

    return (
        <div className='justify-center'>
            <div className="card shadow-xl rounded-lg">
                <figure><img className='rounded-lg' src={photoURL} alt="" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold text-sky-600 pt-0">{displayName}</h2>
                    <p className='text-xl text-orange-400'>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;