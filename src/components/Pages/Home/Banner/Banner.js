import React from 'react';
import img3 from '../../../../assets/banner/img1.jpeg'


const Banner = () => {

    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={img3} alt="banner" /></figure>
            <div className="card-body">
                <h2 className="card-title text-5xl pt-10">M0DD∆51R'S Photography</h2>
                <p className='ml-[500px] text-xl text-gray-100 pt-10'>Hey I'm Moddasir And I'm a professional Photographer..!! <br />
                    if you're looking for photographer please contact with me...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline text-white border-none">Hire me!</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;