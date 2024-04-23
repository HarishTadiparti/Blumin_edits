import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ image, title, data }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div ref={ref} variants={cardVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="max-w-sm rounded-2xl bg-white overflow-hidden shadow-lg">
            {/* <img src={image} alt="Feature" className="mx-auto rounded-lg h-52" /> */}
            <div className="rounded-lg h-64 p-4">
                <img alt="content" className="object-cover object-center h-full w-full" src={image} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{title}</div>
                <p className="text-gray-700 text-justify">{data}</p>
            </div>
        </motion.div>
    );
}

export default FeatureCard;
