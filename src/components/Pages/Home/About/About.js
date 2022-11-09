import React from 'react';
import main from '../../../../assets/about/main.jpeg';
import cover from '../../../../assets/about/cover.jpeg';
import { AiFillPhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={main} alt="" className="w-4/5 h-full rounded-full shadow-2xl" />
                    <img src={cover} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-full" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-green-300'>About Me</p>
                    <h1 className="my-5 text-5xl font-semibold text-pink-800">
                        Hey! <br />
                        I'm MODDASIR <br />
                        Professional Photographer</h1>
                    <p className="text-xl py-5 text-orange-400">
                        I'm Moddasir And i have 5 year's experienced ot this sector. I covered lost's of wedding party also other programs if you're looking for Photographer you should contact with me..!
                    </p>
                    <div className="justify-start">
                        <div>
                            <AiFillPhone />  1521559367
                        </div>
                        <div>
                            <AiOutlineMail />  moddasir311@gmail.com
                        </div>
                        <div>
                            < CiLocationOn />  Brahmanbaria
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;