import { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, Link } from 'react-router-dom';
import navLogo from '../../assets/Asset 2.png';

const navigation = [
  { name: 'HOME', to: '/' },
  { name: 'ABOUT US', to: '/about' },
  { name: 'GAMES', to: '/games' },
  { name: 'SERVICES', to: '/services' },
  { name: 'CONTACT US', to: '/contact' },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" bg-gray-100 fixed top-0 left-0 w-full z-50 shadow-lg">
      {({ open, close }) => (
        <>
          {/* Top bar */}
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <div className="flex justify-between items-center h-14 sm:h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    src={navLogo}
                    alt="UBI Logo"
                    className="h-8 sm:h-10 w-auto transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>

              {/* Desktop nav */}
              <div className="hidden sm:flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `relative text-xs sm:text-sm md:text-base font-semibold font-poppins text-black px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-all duration-300 hover:bg-[#855454] hover:scale-105 ${
                        isActive
                          ? 'text-[#ff4d4f] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ff4d4f]'
                          : ''
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Hamburger menu for mobile */}
              <div className="sm:hidden flex items-center">
                <Disclosure.Button className="p-2 rounded-md text-white hover:bg-[#8a4849] focus:outline-none focus:ring-2 focus:ring-[#ff4d4f] transition-transform duration-300">
                  {open ? (
                    <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 rotate-180 transition-transform duration-300" />
                  ) : (
                    <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <Disclosure.Panel className="sm:hidden bg-[#1a202c] fixed top-14 sm:top-16 right-0 w-full max-w-[280px] sm:max-w-[320px] h-full z-40 shadow-lg">
              <div className="px-3 sm:px-4 pt-4 pb-3 space-y-3 sm:space-y-4">
                {navigation.map((item, index) => (
                  <Transition
                    key={item.name}
                    as={Fragment}
                    appear
                    enter={`transition ease-out duration-300 delay-${index * 100}`}
                    enterFrom="opacity-0 translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => close()}
                      className={({ isActive }) =>
                        `block text-base sm:text-lg font-semibold font-poppins text-white px-3 sm:px-4 py-2 rounded-md hover:bg-[#ff4d4f] hover:scale-105 transition-all duration-300 ${
                          isActive ? 'text-[#ff4d4f] bg-[#ff4d4f]/20' : ''
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </Transition>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
