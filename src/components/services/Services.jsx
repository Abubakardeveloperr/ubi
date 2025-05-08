import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ubi from '../../assets/carousel/cover 1.jpg';

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Dynamically use motion or div/img
  const MotionOrDiv = isMobile ? 'div' : motion.div;
  const MotionOrImg = isMobile ? 'img' : motion.img;

  return (
    <div
      ref={ref}
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 py-10 sm:py-14 md:py-16"
    >
      {/* Heading */}
      <MotionOrDiv
        {...(!isMobile && {
          initial: { opacity: 0, y: 30 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.8 },
        })}
        className="text-center mb-10"
      >
        <h1 className="text-[#ec2028] text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          Services
        </h1>
      </MotionOrDiv>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12">
        
        {/* Text Column */}
        <MotionOrDiv
          {...(!isMobile && {
            initial: { opacity: 0, x: 80 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            transition: { duration: 0.8 },
          })}
          className="w-full lg:w-1/2"
        >
          <MotionOrDiv
            {...(!isMobile && {
              whileHover: { x: -10 },
              transition: { type: 'spring', stiffness: 200, damping: 15 },
            })}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ec2028] mb-4">
              What we do
            </h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-roboto">
              At UBI Soft Pvt Ltd, we offer a comprehensive range of services designed to meet the diverse needs of the gaming
              industry. From full-cycle game development to immersive VR/AR, game design, and monetization — we bring
              your vision to life with world-class quality.
            </p>
            <div className="mt-6">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm sm:text-base px-4 py-2 border border-gray-700 text-black hover:bg-gray-200 rounded transition-all duration-300"
              >
                Explore <BsArrowRight />
              </Link>
            </div>
          </MotionOrDiv>
        </MotionOrDiv>

        {/* Image Column */}
        <MotionOrDiv
          {...(!isMobile && {
            initial: { opacity: 0, x: -80 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            transition: { duration: 0.8 },
          })}
          className="w-full lg:w-1/2"
        >
          <MotionOrImg
            {...(!isMobile && {
              whileHover: { scale: 1.05, x: 10 },
              transition: { type: 'spring', stiffness: 200, damping: 15 },
            })}
            src={ubi}
            alt="Service"
            className="rounded-xl w-full h-auto max-h-[500px] object-cover shadow-md"
          />
        </MotionOrDiv>
      </div>
    </div>
  );
};

export default Services;
