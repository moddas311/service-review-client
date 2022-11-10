import React, { useEffect, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';
import DetailsItem from './DetailsItem';


const Details = () => {


    const [services, setServices] = useState([]);

    useTitle('Details')

    useEffect(() => {
        fetch('https://service-review-assignment11-server.vercel.app/allservice')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className=' py-10'>
                <h3 className='text-3xl text-center font-bold text-orange-400'>Here's My All Services</h3>
                <div className='grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <DetailsItem
                            key={service._id}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;