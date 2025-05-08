import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img2 from '../../assets/carousel/dance.jpg';
import img3 from '../../assets/carousel/Untitled design.jpg';
import img4 from '../../assets/carousel/corver33.jpg';
import img5 from '../../assets/carousel/cover 1.jpg';

const responsiveImageHero = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = [img2, img3, img4, img5];

const CarouselContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <Carousel
      showDots={true}
      infinite={true}
      autoPlay={!isMobile}
      autoPlaySpeed={3000}
      transitionDuration={1000}
      responsive={responsiveImageHero}
      slidesToSlide={1}
      containerClass="carouselContainer"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      draggable={!isMobile}
      swipeable={true}
      pauseOnHover={!isMobile}
    >
      {images.map((image, id) => (
        <img
          key={id}
          src={image}
          draggable={false}
          style={{
            width: '100%',
            height: '90vh',
            objectFit: 'cover',
          }}
          alt={`carousel-img-${id}`}
        />
      ))}
    </Carousel>
  );
};

export default CarouselContainer;
