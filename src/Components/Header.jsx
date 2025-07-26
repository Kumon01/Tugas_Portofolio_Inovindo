import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <Navbar
      fluid
      rounded
      className="fixed z-50 top-0 w-full bg-white/30 backdrop-blur-md"
    >
      <div className="max-w-screen-xl mx-auto w-full flex flex-wrap items-center justify-between px-4 py-2">

        <NavbarBrand href="#Home">
          <span className="self-center whitespace-nowrap text-2xl font-bold text-gray-800 dark:text-white">
          Portfolio
          </span>
        </NavbarBrand>

        <NavbarToggle />

        <NavbarCollapse>
          {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
            <NavbarLink
              key={item}
              href={`#${item}`}
              className="text-lg font-medium text-gray-800 dark:text-white px-2 py-1 hover:border-b-2 hover:border-blue-500 transition duration-300"
            >
              {item}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </div>
    </Navbar>
  );
};

export default Header;
