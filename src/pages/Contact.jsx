import Nnav from "../components/Nave";
import { FaEnvelope, FaPhone, FaFacebook, FaLinkedinIn, FaLinkedin, FaFacebookF, FaPhoneAlt, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaInstagram, FaRegEnvelope, FaStaylinked, FaWhatsapp } from "react-icons/fa6";
import "./Home.css";
function Contact() {
  return (
    <>
      <section
        id="contact"
        className="hero bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen "
      >
        <Nnav />
        <div className=" container justify-center gap-12 items-center py-30 grid  ">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h1 className="text-xl font-bold mb-6 text-indigo-500 py-2">
              Get In <span >Touch</span>
            </h1>
            <div className="space-y-10 text-lg  pt-4 ">
              <Link
                to="mailto:ahmed.heem22@email.com"
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-500 transition duration-300 ink inkk "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRegEnvelope className="text-3xl" /> ahmed.heem22@email.com
              </Link>
              <Link
                to="https://wa.me/201019547072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-500 transition duration-300 ink inkk"
              >
                <FaWhatsapp className="text-3xl" /> +201019547072
              </Link>
              <Link
                to="https://www.linkedin.com/in/ahmed-ibrahim-0016a7242/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-500 transition duration-300 ink inkk"
              >
                <FaLinkedinIn className="text-3xl" /> LinkedIn Profile
              </Link>
              <Link
                to="https://www.facebook.com/A7med.Ibraa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-500 transition duration-300 ink inkk"
              >
                <FaFacebookF className="text-3xl" /> Facebook Profile
              </Link>
              <Link
                to="https://www.instagram.com/ahmed_ibrehim/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-500 transition duration-300 ink inkk"
              >
                <FaInstagram className="text-3xl" /> Instagram Profile
              </Link>
            </div>
          </motion.div>

          {/* Contact Form
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-500">
              Send a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div> */}
        </div>
      </section>
    </>
  );
}

export default Contact;
