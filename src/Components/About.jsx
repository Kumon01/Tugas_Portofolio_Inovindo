import { Button } from "flowbite-react";
import pp from "../assets/pp.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-10 gap-10"
    >

      <div
        className="flex flex-col items-center md:items-start"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          About Me
        </h5>
        <img
          alt="Profile Image"
          src={pp}
          className="rounded-full shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover"
          data-aos="fade-up"
        />
      </div>

      <div className="text-center md:text-left max-w-2xl" data-aos="fade-left">
        <p className="text-gray-700 dark:text-gray-300 mt-4 md:mt-10">
          Siswa SMK jurusan Rekayasa Perangkat Lunak Dan Gim yang antusias dalam
          dunia pemrograman dan pengembangan perangkat lunak. Memiliki pemahaman
          dasar dalam bahasa pemrograman seperti JavaScript, PHP, HTML, CSS, dan
          lain-lain, serta pengalaman dengan beberapa project kecil untuk
          memperkuat keahlian. Bersemangat untuk mengembangkan keterampilan dan
          mencari peluang untuk mendapatkan pengalaman nyata di dunia kerja
          sebagai Software Engineer.
        </p>

        <div className="mt-6" data-aos="fade-up">
          <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Skills
          </h5>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <Button gradientMonochrome="failure">HTML</Button>
            <Button gradientMonochrome="cyan">CSS</Button>
            <Button gradientMonochrome="purple">PHP</Button>
            <Button gradientMonochrome="info">React</Button>
            <Button gradientMonochrome="lime">JavaScript</Button>
            <Button gradientMonochrome="teal">Tailwind CSS</Button>
            <Button gradientMonochrome="pink">Laravel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
