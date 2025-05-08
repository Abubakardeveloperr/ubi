import React from 'react'
import About from '../../components/about/About';
import CarouselContainer from '../../components/carousel/CarouselContainer';
import Services from '../../components/services/Services';
import Mission from '../../components/misssion/Mission';
import WhatWeExpect from '../Expectation/Expectation';
import OurTeam from '../Teams/Team';
import FAQ from '../Faq/Faq';

const HomePage = () => {
    return (
        <div>
            <CarouselContainer />
            <About />
             <Services />
            <OurTeam/>
           <Mission/>
           <WhatWeExpect/>
           <FAQ/> 
        </div>
    )
}

export default HomePage;
