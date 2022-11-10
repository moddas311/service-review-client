import React, { useContext } from 'react';
import { AuthContext } from '../../../../../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../../../../../hooks/useTitle';

const Latestreviews = ({ latestReview }) => {
    const { user } = useContext(AuthContext);
    const { client, serviceName, email, reviewMessage } = latestReview;
    useTitle('LatestReviews')

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar ">
                        <div className=" w-16 rounded-full">
                            {
                                user?.photoURL &&
                                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{client}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{serviceName}</div>
                <div className="text-sm opacity-50">{reviewMessage}</div>
            </td>
        </tr>
    );
};

export default Latestreviews;