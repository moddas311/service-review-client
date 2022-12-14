import React, { useContext } from 'react';
import { AuthContext } from '../../../../../../context/AuthProvider/AuthProvider';

const ClientReviewRow = ({ review, handleDelete }) => {

    const { user } = useContext(AuthContext);
    const { _id, client, serviceName, email, reviewMessage } = review;
    


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
                {serviceName}
            </td>
            <td>
                {reviewMessage}
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ClientReviewRow;