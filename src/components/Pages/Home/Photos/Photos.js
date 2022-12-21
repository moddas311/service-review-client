import React from 'react';
import food from '../../../../assets/partypic/food.jpeg';
import sport from '../../../../assets/partypic/sports.jpeg';
import portrait from '../../../../assets/partypic/portrait.jpeg';
import wedding from '../../../../assets/partypic/wedding.jpeg';

const Photos = () => {
    return (
        <div>
            <div className='text-center m-10 '>
                <h2 className='pb-5 text-3xl text-orange-800 font-semibold'>Some Sample of picture those i clicked recent days.!</h2>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className="card rounded-lg">
                        <img className='rounded-xl' src={food} alt="" />
                        <div className="card-body">
                            <h2 className="card-title">
                                Food
                            </h2>
                        </div>
                    </div>
                    <div className="card rounded-lg">
                        <img className='rounded-xl' src={wedding} alt="" />
                        <div className="card-body">
                            <h2 className="card-title">
                                Weeding
                            </h2>
                        </div>
                    </div>
                    <div className="card rounded-lg">
                        <img className='rounded-xl' src={sport} alt="" />
                        <div className="card-body">
                            <h2 className="card-title">
                                Sport
                            </h2>
                        </div>
                    </div>
                    <div className="card rounded-lg">
                        <img className='rounded-xl' src={portrait} alt="" />
                        <div className="card-body">
                            <h2 className="card-title">
                                Portrait
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-5 my-10 mx-8 rounded-lg bg-gradient-to-r from-black to-transparent'>
                <div className='py-5'>
                    <h4 className='text-xl font-bold text-yellow-400'>Connect Us</h4>
                    <h3 className='text-2xl text-red-700 font-bold'>If Need For Photography</h3>
                </div>
                <form>
                    <div>
                        <input type="email" placeholder="Email Address" className="input input-bordered input-secondary w-full max-w-xs" />
                    </div>
                    <div className='my-4'>
                        <input type="text" placeholder="Subject" className="input input-bordered input-secondary w-full max-w-xs" />
                    </div>
                    <div>
                        <textarea className="textarea w-full input-bordered input-secondary max-w-xs" placeholder="Your Opinion"></textarea>
                    </div>
                    <div className='py-2'>
                        <button className='btn btn-active btn-outline text-white font-bold rounded-lg'>Contact</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Photos;