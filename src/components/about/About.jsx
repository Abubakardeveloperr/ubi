import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ubi from "../../assets/carousel/banner4.jpg";

const About = () => {
  const [employeeCount, setEmployeeCount] = useState(0);

  const animateNumber = (endValue, setState, delay = 100) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setState(count);
      if (count >= endValue) {
        clearInterval(interval);
      }
    }, delay);
  };

  useEffect(() => {
    animateNumber(30, setEmployeeCount, 66);
  }, []);

  return (
    <div className="w-full max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 py-20 font-['Roboto Condensed'] text-onSurface">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ec2028] uppercase">
          About Us
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Passionately crafting immersive gaming experiences—powered by creativity, innovation, and expertise.
        </p>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#ec2028] mb-4">
            Who We Are
          </h2>
          <p className="text-red-600 text-base sm:text-lg leading-relaxed">
            At <strong>UBI Soft Pvt Ltd</strong>, we are an in-house game development company dedicated to delivering unforgettable digital experiences. Our team of elite developers, designers, and artists collaborates under one roof—empowered by full creative control, cutting-edge technology, and a shared mission to define the future of gaming.
            <br /><br />
            From concept to launch, every game we build reflects precision, innovation, and a deep respect for the player’s journey.
          </p>

          {/* Stat Card */}
          <motion.div
            className="bg-[#f5f6f7] shadow-md rounded-lg py-6 px-4 mt-6 text-center hover:shadow-lg transition duration-300 transform hover:scale-105 w-full sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3 className="text-3xl sm:text-4xl font-bold text-[#ec2028]">
              {employeeCount}+
            </motion.h3>
            <p className="text-gray-600 mt-2 text-base sm:text-lg font-semibold">Total Employees</p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-[800px] rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src={ubi}
              alt="Team Working"
              className="block w-full h-auto object-cover object-center max-h-[500px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
