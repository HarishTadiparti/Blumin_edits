import { Heading } from '@radix-ui/themes';
import React from 'react';

const DataWithImage = ({ image, title, data, imageOnLeft }) => {
    return (
        <div >
            {imageOnLeft ? (
                <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                    <div className="w-full md:w-1/2 pr-4 px-2 md:px-0 flex justify-center">
                        <img src={image} alt="Image" className="max-w-full h-auto md:max-h-72 rounded-3xl" />
                    </div>
                    <div className="md:w-1/2 text-justify pr-10 pl-10 space-y-10">
                        <Heading weight='bold' className='text-justify md:text-left text-sm md:text-lg' >{title}</Heading>
                        <div className='text-sm md:text-lg'>{data}</div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                    <div className="md:w-1/2 text-justify pr-10 pl-10 space-y-10">
                        <Heading weight='bold' className='text-justify md:text-right text-sm md:text-lg'>{title}</Heading>
                        <div className='text-sm md:text-lg'>{data}</div>
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-0 pl-4 flex justify-center">
                        <img src={image} alt="Image" className="max-w-full h-auto md:max-h-72 rounded-3xl" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataWithImage;
