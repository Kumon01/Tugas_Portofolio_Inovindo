import pp from "../assets/pp.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="min-h-screen bg-white dark:bg-gray-900 px-4 py-10 flex flex-col justify-center items-center"
    >
      <h5 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white text-center">
        About Me
      </h5>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        <div className="text-center md:text-left max-w-2xl">
          <p
            className="text-xl text-gray-700 dark:text-gray-300 mt-4 md:mt-6 leading-relaxed"
            data-aos="fade-left"
          >
            Siswa SMK jurusan Rekayasa Perangkat Lunak Dan Gim yang antusias dalam
            dunia pemrograman dan pengembangan perangkat lunak. Memiliki pemahaman
            dasar dalam bahasa pemrograman seperti JavaScript, PHP, HTML, CSS, dan
            lain-lain, serta pengalaman dengan beberapa project kecil untuk
            memperkuat keahlian. Bersemangat untuk mengembangkan keterampilan dan
            mencari peluang untuk mendapatkan pengalaman nyata di dunia kerja
            sebagai Software Engineer.
          </p>
        </div>

        <div
          className="flex flex-col items-center md:items-end"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <img
            alt="Profile Image"
            src={pp}
            className="rounded-full shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover mt-11"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
