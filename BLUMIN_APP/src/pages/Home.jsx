import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { Heading } from '@radix-ui/themes';
import { motion } from "framer-motion";
import SwiperComponent from '../components/UseSwiper';
import image1 from '../assets/s1.png'
import image3 from '../assets/s2.png';
import image2 from '../assets/s3.png';
import image4 from '../assets/s4.png'
import DataWithImage from '../components/ImageData';

const Home = () => {
    return (
        <div>
            <div className='space-y-32'>
                <div className='mt-10'>
                    <motion.div className='mb-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="relative overflow-hidden">
                            <img src='/home-banner.jpg' alt="Banner" className="w-screen h-screen object-cover" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                                <h1 className="text-4xl md:text-6xl font-bold">Welcome to BLUMIN</h1>
                                <p className="text-lg md:text-xl">Ideate. Innovate. Illuminate.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>


                <SwiperComponent />
                <div>
                    <motion.div className='mb-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <Heading align='center' weight='bold' size='8'>Who We Are</Heading>
                    </motion.div>
                    <motion.div className='mb-15 ml-10 mr-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        <Heading align='left' weight='light' size='6'>BLUMIN is a pioneering initiative aimed at bridging the gap between industry and academia. Our platform connects forward-thinking companies with top-tier universities and colleges to facilitate meaningful collaborations and address the evolving needs of the technology ecosystem.</Heading>
                    </motion.div>
                </div>


            </div>

            <div className='p-5 mt-24 mb-24'>
                <motion.div className='mb-16' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Heading align='center' weight='bold' size='8'>What We Offer</Heading>
                </motion.div>
                <div className='space-y-24 bg-white py-10 rounded-2xl'>
                    <DataWithImage
                        image={image1}
                        title='Unlock Limitless Opportunities by Connecting with Industry Leaders and Innovators'
                        data="Expand your professional network and gain valuable insights from industry leaders, fellow innovators, and experienced professionals in your field. Networking is not only key but essential to success in today’s fast-paced and competitive world."
                        imageOnLeft={false}
                    />
                    <DataWithImage
                        image={image2}
                        title='Unlocking Innovation: Collaborating with Leading Companies for Academic Excellence'
                        data="Discover endless possibilities for academic collaboration as universities engage with industry leaders, driving innovation, fostering academic excellence, and creating transformative partnerships that benefit both students and professionals in the field."
                        imageOnLeft={true}
                    />
                    <DataWithImage
                        image={image3}
                        title='Joint Research Projects and Professional Growth Opportunities'
                        data="Discover our exciting joint research projects and professional growth opportunities designed to accelerate innovation and foster your professional development."
                        imageOnLeft={false}
                    />
                    <DataWithImage
                        image={image4}
                        title='Unlocking Innovation: Collaborating with Leading Companies for Academic Excellence'
                        data="Discover endless possibilities for academic collaboration as universities engage with industry leaders, driving innovation, fostering academic excellence, and creating transformative partnerships that benefit both students and professionals in the field."
                        imageOnLeft={true}
                    />
                </div>
            </div>
            <div>
                <motion.div className='mb-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Heading align='center' weight='bold' size='8'>Why Choose BLUMIN</Heading>
                </motion.div>
                <div class='flex flex-wrap justify-center px-5'>
                    <div class='w-full sm:w-auto sm:flex-1 sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-2 my-4'>
                        <FeatureCard
                            image='./cardimage1.png'
                            title='Experience'
                            data='With years of experience in facilitating successful collaborations, BLUMIN brings unparalleled expertise to every partnership.'
                        />
                    </div>
                    <div class='w-full sm:w-auto sm:flex-1 sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-2 my-4'>
                        <FeatureCard
                            image='./cardimage2.png'
                            title='Innovation'
                            data='Our commitment to innovation drives us to continually explore new opportunities and push the boundaries of what’s possible.'
                        />
                    </div>
                    <div class='w-full sm:w-auto sm:flex-1 sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-2 my-4'>
                        <FeatureCard
                            image='./cardimage3.png'
                            title='Impact'
                            data='Join a community dedicated to making a meaningful impact on society through research-driven solutions and industry partnerships.'
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
