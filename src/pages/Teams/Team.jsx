import React from 'react';
import ali from '../../assets/team/PICS3751.png';
import sara from '../../assets/team/Untitled design (5).jpg';
import usman from '../../assets/team/PICS3247.png';
import haseb from '../../assets/team/Untitled design (4).png';

const teamMembers = [
  { name: 'Abdul Rehman', role: 'CEO & Founder', image: ali },
  { name: 'Danish Iftikhar', role: 'CTO', image: sara },
  { name: 'Jam Ijaz', role: 'Human Resource', image: usman },
  { name: 'Haseeb Hussain', role: 'Project Manager', image: haseb },
];

const OurTeam = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-roboto" id="our-team">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ec2028] mb-12 sm:mb-16">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white max-w-sm w-full mx-auto min-h-[360px] rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              <img
                className="h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover border-4 border-[#ec2028] mb-6"
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-[#ec2028]">{member.name}</h3>
              <p className="text-sm sm:text-base text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
