import React from 'react';

const MissionVision = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-gray-50 text-black font-['Roboto Condensed']">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ec2028] mb-10">
          Our Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#ec2028] mb-6">Our Mission</h3>
            <p className="text-gray-800 leading-relaxed text-lg">
              At <span className="font-semibold text-[#ec2028]">UBI Soft</span>, our mission is to craft immersive digital experiences that entertain, educate, and inspire users worldwide.
              We are committed to delivering innovative, high-quality games and applications that push the boundaries of creativity and technology. 
              Through collaboration, passion, and user-focused design, we strive to empower the next generation of creators and gamers alike.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#ec2028] mb-6">Our Vision</h3>
            <p className="text-gray-800 leading-relaxed text-lg">
              To become a global leader in interactive digital entertainment and software development, where creativity meets technology to shape the future of gaming and beyond. 
              We envision a world where <span className="font-semibold text-[#ec2028]">UBI Soft</span> solutions are a symbol of quality, innovation, and social impact — fostering joy, connection, and opportunity for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
