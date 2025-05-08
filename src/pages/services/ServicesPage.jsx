import { motion } from 'framer-motion';
import fullCycleImg from '../../assets/services/full-cycle-development.png';
import animationImg from '../../assets/services/game-animation-design.png';
import uiuxImg from '../../assets/services/game-ux-ui-design.png';
import unityImg from '../../assets/services/unity-icon.png';
import gamificationImg from '../../assets/services/gamification-expericne.png';
import qualityImg from '../../assets/services/quality-and-testing.png';
import cover_img from '../../assets/services/work-6533616_640.webp';
import blunder from '../../assets/services/Blender-Logo.png'
const services = [
  {
    image: fullCycleImg,
    title: "Full Cycle Development",
    description: "UBI Soft Pvt Ltd is one of the leading game development companies offering end-to-end game development services."
  },
  {
    image: animationImg,
    title: "Game Animation Design",
    description: "Expert in creating realistic 2D as well as 3D animations. We cover a wide gamut of game art design services for our clients."
  },
  {
    image: uiuxImg,
    title: "Game UI UX Design",
    description: "We have created art assets for games, simulations, and trailers while handling full-cycle game art production."
  },
  {
    image: unityImg,
    title: "Unity Development",
    description: "At our game development studio, we have proven experience bringing visually stimulating, immersive, and seamless games to the market."
  },
  {
    image: gamificationImg,
      title: "Game Development Experience",
      description: "Comprehensive game development from scratch — from analyzing business requirements to designing, building, and delivering interactive, engaging game applications."
    
  },
  {
    image: qualityImg,
    title: "Quality & Testing",
    description: "Our quality assurance experts are here to test your finished game product inside and out before you present it to the general public."
  },
  {
    image: blunder,
    title: "Creative CG Artist & Modular 3D Designer",
    description: "Our expert CG artists and modular 3D designers bring your game worlds to life with stylized or realistic assets, optimized for performance and visual impact."

  },
 
];

const ServicesPage = () => {
  return (
    <div className="w-full">
      {/* Cover Image Section */}
      <div className="relative">
        <img src={cover_img} alt="Cover" className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl md:text-5xl font-['Roboto Condensed'] text-4xl font-extrabold uppercase "
          >
            Our Services
          </motion.h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-6 md:px-12 xl:px-32 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-['Roboto Condensed'] font-bold text-[#ec2028] uppercase">What We Do</h2>
          <p className="text-red-800 mt-4 max-w-2xl mx-auto">
            Delivering immersive, high-quality gaming solutions tailored for your unique business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img src={service.image} alt={service.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-['Roboto Condensed'] font-bold text-[#ec2028] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
