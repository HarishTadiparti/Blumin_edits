import { Heading } from '@radix-ui/themes';
import React from 'react';

const DataWithImage = ({ image, title, data, imageOnLeft }) => {
    return (
        <div className="flex items-center justify-center mb-6">
            {imageOnLeft ? (
                <>
                    <div className="w-1/2 pr-4 flex justify-center">
                        <img src={image} alt="Image" className="max-h-72 rounded-3xl items-center" />
                    </div>
                    <div className="w-1/2 text-justify pr-10 pl-10 space-y-10">
                        <Heading align='left' weight='bold' size='6'>{title}</Heading>
                        <div>{data}</div>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-1/2 text-justify pr-10 pl-10 space-y-10">
                        <Heading align='right' weight='bold' size='6'>{title}</Heading>
                        <div>{data}</div>
                    </div>
                    <div className="w-1/2 pl-4 flex justify-center">
                        <img src={image} alt="Image" className=" max-h-72 rounded-3xl items-center" />
                    </div>
                </>
            )}
        </div>
    );
};

export default DataWithImage;
