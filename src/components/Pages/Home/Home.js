import React from 'react';
import About from './About/About';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Photos from './Photos/Photos';
import useTitle from '../../../hooks/useTitle';



const Home = () => {
    useTitle('Home');

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