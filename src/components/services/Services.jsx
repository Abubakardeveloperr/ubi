import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ubi from '../../assets/carousel/cover 1.jpg';

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="w-full max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 py-12 sm:py-16"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-[#ec2028] text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          Services
        </h1>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <motion.img
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            src={ubi}
            alt="Service"
            className="rounded-xl w-full h-auto max-h-[500px] object-cover shadow-md"
          />
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <motion.div
            whileHover={{ x: -10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ec2028] mb-4">
              What we do
            </h2>
            <p className="text-red-700 text-base sm:text-lg leading-relaxed">
              At UBI Soft Pvt Ltd, we offer a comprehensive range of services designed to meet the diverse needs of the gaming
              industry. From full-cycle game development to immersive VR/AR, game design, and monetization — we bring
              your vision to life with world-class quality.
            </p>
            <div className="mt-6">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-base sm:text-lg px-5 py-2 border border-gray-700 text-gray-800 hover:bg-gray-200 transition-all duration-300"
              >
                Explore <BsArrowRight />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
