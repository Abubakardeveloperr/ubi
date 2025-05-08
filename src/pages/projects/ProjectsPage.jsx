import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import your optimized webp images
import game1 from '../../assets/Abdullah Zahoor/SS_.06.webp';
import game2 from '../../assets/Abdullah Zahoor/Mini Car  ss 3 (1).webp';
import game3 from '../../assets/Abdullah Zahoor/SS06 (2).webp';
import game4 from '../../assets/Abdullah Zahoor/ss05.webp';
import game5 from '../../assets/Abdullah Zahoor/SS01.webp';
import game6 from '../../assets/Abdullah Zahoor/Gangster  ss 3 ui.webp';
import game7 from '../../assets/Abdullah Zahoor/police ss 2.webp';
import game8 from '../../assets/Abdullah Zahoor/mud jeep 1.webp';
import game9 from '../../assets/Abdullah Zahoor/Mini Car  ss 3.webp';
import game10 from '../../assets/Abdullah Zahoor/Gangster  ss 2 ui.webp';
import game11 from '../../assets/Abdullah Zahoor/Rickshaw ss 1.webp';
import game12 from '../../assets/Abdullah Zahoor/SS06 (2).webp';
import game13 from '../../assets/Abdullah Zahoor/SS_.02.webp';
import game14 from '../../assets/Abdullah Zahoor/Mini Car  ss 1.webp';
import game15 from '../../assets/Abdullah Zahoor/Police ss 4.webp';

const gameImages = [
  { id: 13, src: game13, alt: 'Car Racing' },
  { id: 14, src: game14, alt: 'Mini Car Game' },
  { id: 15, src: game15, alt: 'Police Game' },
  { id: 1, src: game1, alt: 'Open World Car Game' },
  { id: 2, src: game2, alt: '2D Car Game' },
  { id: 3, src: game3, alt: 'Offroad Jeep Game' },
  { id: 4, src: game4, alt: 'Plane Game' },
  { id: 5, src: game5, alt: 'City Car Game' },
  { id: 6, src: game6, alt: 'Gangster Game' },
  { id: 7, src: game7, alt: 'Cop Thief Game' },
  { id: 8, src: game8, alt: '4X4 Mud Jeep Game' },
  { id: 9, src: game9, alt: 'Mini Car Racing Game' },
  { id: 10, src: game10, alt: 'Open World Gangster Game' },
  { id: 11, src: game11, alt: 'Auto Rickshaw Driving Game' },
  { id: 12, src: game12, alt: 'Airplane Simulation Game' },
];

const GameGallery = () => {
  return (
    <section className="w-full py-20 bg-white font-roboto">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-[#ec2028] mb-12">
          Our Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {gameImages.map((game, index) => (
            <motion.div
              key={game.id}
              className="group"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="rounded-3xl overflow-hidden">
                <LazyLoadImage
                  src={game.src}
                  alt={game.alt}
                  effect="blur"
                  className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-center text-black text-xl font-medium mt-4">
                {game.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGallery;
