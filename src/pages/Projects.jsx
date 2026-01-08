import Nnav from "../components/Nave";
import { Link } from "react-router-dom";
import Taps from "../components/Taps";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


function Projects() {


  return (
    <div className="hero bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      <Nnav />
        
        <div className="col md-8 mx-auto py-10 px-6 ">
          <Taps />
        </div>
      
    </div>
  );
}
export default Projects;
