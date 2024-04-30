import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ image, title, data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="shadow-sm rounded-2xl hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="bg-white max-w-sm h-[27rem] rounded-2xl overflow-hidden"
      >
        <div className="rounded-lg h-64 p-4">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={image}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{title}</div>
          <p className="text-gray-700 text-justify">{data}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
