import { Button, FooterCopyright, FooterDivider } from "flowbite-react";
import React from "react";
import { MdMail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 gap-12"
      id="Contact"
    >

      <div
        className="flex flex-col items-center text-center max-w-xl"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h5 className="mb-3 text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Contact Me!!
        </h5>
        <p className="text-gray-600 dark:text-gray-300">
          Have questions or want to work with me? Contact me today!
        </p>

        <div
          className="flex gap-7 mt-9"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <a href="mailto:Dynand2701@gmail.com" aria-label="Email">
            <MdMail className="w-10 h-10 hover:text-blue-500 transition-colors duration-200" />
          </a>
          <a
            href="https://github.com/Kumon01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-10 h-10 hover:text-gray-700 dark:hover:text-white transition-colors duration-200" />
          </a>
          <a 
            href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BryarxQTORNa%2FJceI6IBtmw%3D%3D" 
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-10 h-10 hover:text-indigo-500 transition-colors duration-200" />
          </a>
        </div>
      </div>
      
      <div className="w-full">
        <FooterDivider />
        <div className="text-center mt-4">
          <FooterCopyright href="#" by="Dynand™" year={2024} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
