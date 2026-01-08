import Nnav from "../components/Nave";
import "./Home.css";
import "./skills.css";
import "./Home.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGit,
  FaGlobe,
  FaServer,
} from "react-icons/fa";
import { SiCodewars, SiRedux, SiTailwindcss } from "react-icons/si";
function Home() {
  return (
    <div className=" d-flex flex-column min-vh-100 hero">
      <Nnav />
      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container text-center">
            <div className="hero-section">
              <h1 className="hero-title">Hi, I'm <span>Ahmed</span></h1>
              <p className="hero-subtitle">
                <span>Frontend </span>Developer
              </p>
            </div>

            <div className="social-links d-flex justify-content-center gap-4 mt-4 ">
              <a
                href="https://github.com/AhmedIbrahim159"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-ibrahim-0016a7242/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.codewars.com/users/AhmedIbrahim159"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodewars />
              </a>
            </div>
            <div className="skills-section mt-3">
              <h2 className="skills-title">Skills & Technologies</h2>
              <div className="skills-list d-flex flex-wrap justify-content-center gap-4">
                <div className="skill-item">
                  <FaHtml5 className="skill-icon html" />
                </div>
                <div className="skill-item">
                  <FaCss3 className="skill-icon css" />
                </div>
                <div className="skill-item">
                  <FaJs className="skill-icon js" />
                </div>
                <div className="skill-item">
                  <FaReact className="skill-icon react" />
                </div>
                <div className="skill-item">
                  <SiRedux className="skill-icon redux" />
                </div>
                <div className="skill-item">
                  <FaServer className="skill-icon api" />
                </div>
                <div className="skill-item">
                  <FaBootstrap className="skill-icon bootstrap" />
                </div>
                <div className="skill-item">
                  <SiTailwindcss className="skill-icon tailwind" />
                </div>
                <div className="skill-item">
                  <FaGit className="skill-icon git" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Home;
