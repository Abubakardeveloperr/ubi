import { createBrowserRouter } from 'react-router-dom';

import ContactUs from '../pages/contact/ContactUs';
import DashboardHome from '../pages/dashboard/DashboardHome';
import DashboardProjects from '../pages/dashboard/DashboardProjects';
import DashboardProjectsAdd from '../pages/dashboard/DashboardProjectsAdd';
import HomePage from '../pages/home/HomePage';
import ProjectsPage from '../pages/projects/ProjectsPage';
import ServicesPage from '../pages/services/ServicesPage';
import ClientRoutes from './ClientRoutes';
import About from '../components/about/About';
import OurGamesSection from '../pages/projects/ProjectsPage';
import ScrollToTopButton from '../components/Scroledown/Dropscrole';
import WhatsAppButton from '../components/whatsapp/Whatsapp';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ClientRoutes />
        <WhatsAppButton/>
         <ScrollToTopButton/>
         {/* Add the ScrollToTopButton here */}
      </>
    ),
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'games',
        element: <OurGamesSection />
      },
      {
        path: 'services',
        element: <ServicesPage />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <ContactUs />
      },
      
    ]
  }
]);

export default router;
