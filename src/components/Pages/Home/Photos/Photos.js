import React from 'react';
import food from '../../../../assets/partypic/food.jpeg';
import sport from '../../../../assets/partypic/sports.jpeg';
import portrait from '../../../../assets/partypic/portrait.jpeg';
import wedding from '../../../../assets/partypic/wedding.jpeg';

const Photos = () => {
    return (
        <div className='text-center m-28 '>
            <h2 className='pb-5 text-3xl text-orange-800 font-semibold'>Some Sample of picture those i clicked recent days.!</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className="card bg-base-100 shadow-xl">
                    <img src={food} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">
                            Food
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img src={wedding} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">
                            Weeding
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img src={sport} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">
                           Sport
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img src={portrait} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">
                            Portrait
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;