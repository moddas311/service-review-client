import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://service-review-assignment11-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className=' py-10'>
            <div className='grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
            <div className=' text-center pt-4'>
                <Link to='/details' className='btn btn-outline '>
                    All Services
                </Link>
            </div>
        </div>
    );
};

export default Services;