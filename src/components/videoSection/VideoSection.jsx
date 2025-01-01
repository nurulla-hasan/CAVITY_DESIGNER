import React from 'react';

const VideoSection = () => {
    return (
        <div className=' mt-20'>
            <iframe
                className='mx-auto w-[90%] h-[250px] lg:h-[611px]'
                src="https://www.youtube.com/embed/h2b1YEa_058"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoSection;
