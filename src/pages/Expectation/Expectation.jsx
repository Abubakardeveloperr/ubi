import { motion } from 'framer-motion';
import expectation from '../../assets/services/experince.jpg';

const WhatWeExpect = () => {
  return (
    <section className="w-full py-16 bg-white font-roboto">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-4 sm:px-8">
        
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-[#ec2028] mb-6 font-roboto">
            What do We Expect?
          </h3>
          <ul className="list-disc pl-5 text-base sm:text-lg text-black-800 space-y-2 font-roboto">
            <li>Skills</li>
            <li>Learning Attitude</li>
            <li>Team Work</li>
            <li>Positive Thinking</li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={expectation}
            alt="Team Collaboration"
            className="w-full h-auto max-h-[500px] rounded-xl shadow-md object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeExpect;
