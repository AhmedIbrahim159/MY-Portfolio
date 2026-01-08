import { Link } from "react-router-dom";
import Nnav from "../components/Nave";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import avatar from "../assets/avaa.png";
import "../index.css";
import "./Home.css";
import { FaCertificate } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

function About() {
  return (
    <>
      <section
        id="about"
        className="hero bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen "
      >
        <Nnav />
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20 ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-75 h-75 rounded-2xl overflow-hidden border-4 border-indigo-500 shadow-lg">
              <img
                src={avatar}
                alt="Ahmed Ibrahim"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg "
          >
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-indigo-500">Me</span>
            </h2>
            <p className="text-gray-100 leading-relaxed mb-4">
              Hi! I’m Ahmed Ibrahim, a Front-End Developer and 2025 graduate
              from the Faculty of Computers at the Arab Open University (AOU). I
              create clean, responsive, and interactive web experiences using
              React, HTML, CSS, and JavaScript.
            </p>
            <p className="text-gray-100 leading-relaxed mb-6">
              I love turning ideas into functional designs and constantly
              learning new technologies to improve my skills. When I’m not
              coding, I enjoy exploring design trends and working on creative
              projects.
              <br />
              <br />
              Check out my work and feel free to reach out—I’d love to
              collaborate!
            </p>
            {/* Skills */}

            <div className="flex justify-center gap-4 mt-8">
              <Link
                to="https://drive.google.com/drive/folders/191KPP446og6NJ7fjjPuDk4OyJaLxNms0?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 ink"
              >
                Certifications
              </Link>
              <Link
                to="https://drive.google.com/drive/folders/191KPP446og6NJ7fjjPuDk4OyJaLxNms0?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className=" ink border border-indigo-600 text-indigo-800 hover:bg-indigo-100 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300 "
              >
                Download CV
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>

    // <div className="home-container d-flex flex-column min-vh-100">
    //   <Nnav />
    //   <main className=" mt-5">
    //     <div className="container text-center">
    //       <div className="hero-section mt-5">
    //         <h4>
    //           Hi! I’m Ahmed Ibrahim, a Front-End Developer and 2025 graduate
    //           from the Faculty of Computers at the Arab Open University (AOU). I
    //           create clean, responsive, and interactive web experiences using
    //           React, HTML, CSS, and JavaScript.
    //           <br />
    //           <br />
    //           I love turning ideas into functional designs and constantly
    //           learning new technologies to improve my skills. When I’m not
    //           coding, I enjoy exploring design trends and working on creative
    //           projects.
    //           <br />
    //           <br />
    //           Check out my work and feel free to reach out—I’d love to
    //           collaborate!
    //         </h4>
    //       </div>
    //     </div>
    //     <div className="cta-buttons text-center mt-5 mb-5">
    //       <Link to="/contact" className="cta-btn ">
    //         Contact me
    //       </Link>
    //       <Link to="/contact" className="cta-btn">
    //         Download cv
    //       </Link>
    //     </div>
    //   </main>
    // </div>
  );
}
export default About;
