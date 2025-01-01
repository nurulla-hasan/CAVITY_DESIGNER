import React from 'react';

const Hero = () => {
    return (
        <div className='relative'>
            <div className=''>
                <img className='w-[100%] lg:h-[550px] h-[400px]' src="hero.png" alt="" />
            </div>
            <div className='absolute flex flex-col justify-center items-center top-[60%] left-1/2 -translate-x-1/2 w-[80%] lg:w-[60%]'>
                <h2 className='lg:text-5xl text-3xl font-semibold lg:font-bold text-white text-center'>
                    Life is a Celebration
                    The Start is Just a Click Away.
                </h2>
                <button className='mt-7 text-center px-3 py-2 bg-yellow-300 font-semibold text-black'>Book a Meeting</button>
            </div>
        </div>
    );
};

export default Hero;