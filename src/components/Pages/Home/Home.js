import React from 'react';
import About from './About/About';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Photos from './Photos/Photos';
import useTitle from '../../../hooks/useTitle';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';



const Home = () => {

    const { loading } = useContext(AuthContext);

    useTitle('Home');

    if (loading) {
        return <progress className="progress w-full"></progress>
    }

    return (
        <div>
            <Banner />
            <Services />
            <About />
            <Photos />
        </div>
    );
};

export default Home;