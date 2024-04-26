import React, { useState } from 'react';
import team from '../assets/team.jpeg';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';
import { Heading } from '@radix-ui/themes';

const About = () => {
    const [showFAQs, setShowFAQs] = useState([false, false, false, false]);

    const toggleFAQ = (index) => {
        const newShowFAQs = [...showFAQs];
        newShowFAQs[index] = !newShowFAQs[index];
        setShowFAQs(newShowFAQs);
    };

    return (
        <div className="container mx-auto px-4 mb-8">
            <div className='mb-10'>
                <Heading align='center' weight='bold' size='9' className="text-3xl md:text-5xl">About Us</Heading>
            </div>

            <div className="container mx-auto py-8">
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h3 className="text-lg md:text-2xl font-semibold text-center mb-6">BLUMIN — OVERVIEW</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
                        <div className="w-full md:w-2/5 mb-4 md:mb-0">
                            <img alt="Team" className="w-full rounded-lg shadow-md" src={team} />
                        </div>
                        <div className="w-full md:w-2/5 md:ml-8">
                            <p className="text-base md:text-lg leading-relaxed">Connecting academia with industry to drive innovation and create real-world impact. Join us to collaborate, innovate, and make a difference.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mb-12 text-center md:px-20">
                <h2 className="text-lg md:text-2xl font-semibold mb-4">OUR PARTNERS</h2>
                <motion.div className="flex flex-col md:flex-row justify-center items-center md:justify-around"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center mb-8 md:mb-0">
                        <img alt="Logo 1" className="w-48 md:w-64 mb-4" src={logo1} />
                        <h3 className="text-base md:text-lg font-medium">Incubation Partner</h3>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                        <img alt="Logo 2" className="w-48 md:w-64 mb-4" src={logo2} />
                        <h3 className="text-base md:text-lg font-medium">Training Partner</h3>
                    </motion.div>
                </motion.div>
            </div>

            <div className="text-center md:px-20">
                <h2 className="text-lg md:text-xl font-semibold mb-4">FAQ'S</h2>
                <div className="space-y-4">
                    <FAQ question="How does BLUMIN facilitate collaboration between industries and academic institutions?" answer="BLUMIN acts as a bridge, connecting industries with academic institutions to establish mutually beneficial partnerships. We organize workshops, seminars, and joint research projects, providing opportunities for knowledge exchange and innovation." isOpen={showFAQs[0]} toggle={() => toggleFAQ(0)} />
                    <FAQ question="What types of projects does BLUMIN support?" answer="BLUMIN supports a wide range of projects, including those focused on cutting-edge research, technology development, and market demands. Our goal is to foster innovation and address real-world challenges through collaborative efforts between industries and academic institutions." isOpen={showFAQs[1]} toggle={() => toggleFAQ(1)} />
                    <FAQ question="How can students and professionals benefit from partnering with BLUMIN?" answer="By partnering with BLUMIN, students and professionals gain access to valuable internship opportunities, professional development programs, and industry connections. We offer hands-on experience, mentorship,and resources to support their growth and success in the tech industry." isOpen={showFAQs[2]} toggle={() => toggleFAQ(2)} />
                    <FAQ question="What sets BLUMIN apart from other collaboration platforms?" answer="BLUMIN stands out for its commitment to innovation, expertise in facilitating successful collaborations, and dedication to making a meaningful impact on society. Our comprehensive approach, tailored initiatives, and focus on practical outcomes differentiate us as a trusted partner for industry-academia collaborations." isOpen={showFAQs[3]} toggle={() => toggleFAQ(3)} />
                </div>
            </div>
        </div>
    );
}

export default About;
