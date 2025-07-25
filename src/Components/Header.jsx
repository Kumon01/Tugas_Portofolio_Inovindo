import { 
  Button, 
  MegaMenu, 
  MegaMenuDropdown, 
  Navbar, 
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from 'flowbite-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const  Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
    });
  }, [])

  return (
    <Navbar
     fluid
     rounded
     className="fixed z-50 top-0 w-full bg-white/30 backdrop-blur-md flex justify-center"
    >
        <Navbar.Collapse>
          <Navbar.Link href="#Home">Home</Navbar.Link>
          <Navbar.Link href="#About">About</Navbar.Link>
          <Navbar.Link href="#Skills">Skills</Navbar.Link>
          <Navbar.Link href="#Portfolio">Portfolio</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
 
  );
}

export default Header