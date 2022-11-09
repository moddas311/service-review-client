import React from 'react';
import About from './About/About';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Photos from './Photos/Photos';



const Home = () => {
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