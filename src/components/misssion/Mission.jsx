import React, { useEffect, useState } from 'react';

const MissionVision = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 bg-gray-50 text-black font-['Roboto Condensed'] w-full max-w-[2560px] mx-auto">
      <div className="w-full max-w-[1600px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ec2028] mb-10">
          Our Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 text-left">
          {/* Mission */}
          <div
            className={`bg-white p-6 sm:p-8 rounded-3xl shadow-lg ${
              !isMobile
                ? 'hover:shadow-2xl transition duration-300 transform hover:scale-105'
                : ''
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#ec2028] mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-black-800 leading-relaxed text-base sm:text-lg">
              At <span className="font-semibold text-[#ec2028] font-roboto">UBI Soft Pvt Ltd</span>, our mission is to craft immersive digital experiences that entertain, educate, and inspire users worldwide.
              We are committed to delivering innovative, high-quality games and applications that push the boundaries of creativity and technology. 
              Through collaboration, passion, and user-focused design, we strive to empower the next generation of creators and gamers alike.
            </p>
          </div>

          {/* Vision */}
          <div
            className={`bg-white p-6 sm:p-8 font-roboto rounded-3xl shadow-lg ${
              !isMobile
                ? 'hover:shadow-2xl transition duration-300 transform hover:scale-105'
                : ''
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#ec2028] mb-4 sm:mb-6">Our Vision</h3>
            <p className="text-black-800 leading-relaxed text-base sm:text-lg font-roboto">
              To become a global leader in interactive digital entertainment and software development, where creativity meets technology to shape the future of gaming and beyond. 
              We envision a world where <span className="font-semibold text-[#ec2028] font-roboto">UBI Soft Pvt Ltd</span> solutions are a symbol of quality, innovation, and social impact — fostering joy, connection, and opportunity for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
