import { Link } from 'react-router-dom';
import ubisoft from '../../assets/Asset 2.png';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-black font-roboto">
      {/* Top Border / Social Bar (optional) */}
      <div className="border-b border-gray-300 p-4"></div>

      {/* Main Content */}
      <div className="mx-6 lg:mx-10 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start text-[#ec2028]">
              <img src={ubisoft} alt="UBI Soft Logo" className="w-44 mr-3" />
            
            </h6>
            <p className="text-[#ec2028] text-justify">
              At Ubi Soft Private Limited, we believe the future of entertainment lies in the hands of creators — and we’re here to shape it.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="uppercase font-semibold mb-4 text-[#ec2028]">Useful links</h6>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#ec2028] transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#ec2028] transition duration-300">
                  About us
                </Link>
              </li>
             
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#ec2028] transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="uppercase font-semibold mb-4 text-[#ec2028]">Contact</h6>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center justify-center md:justify-start">
                <MapPinIcon className="h-5 w-5 mr-3 text-[#ec2028]" />
                UBI Soft Pvt Ltd, Bahawalpur, Pakistan, 63100
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-[#ec2028]" />
                contact@gmail.com
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <PhoneIcon className="h-5 w-5 mr-3 text-[#ec2028]" />
                +923076633037
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#ec2028]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.1v-2.89h2.34V9.41c0-2.32 1.38-3.61 3.5-3.61.99 0 2.03.18 2.03.18v2.23h-1.14c-1.12 0-1.47.69-1.47 1.4v1.68h2.5l-.4 2.89h-2.1v6.99C18.34 21.12 22 16.99 22 12z" />
                </svg>
                <a
                  href="https://www.facebook.com/logicpod?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ec2028] transition-colors duration-300"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center p-6 bg-gray-100">
        <span>© 2025 Copyright: </span>
        <Link className="text-[#ec2028] font-semibold hover:text-black" to="/">
        UBI Soft Pvt Ltd
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
