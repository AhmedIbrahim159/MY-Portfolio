import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./taps.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Cardc from "./Card";
import { useState } from "react";
import { projects } from "../../data";

function Taps() {
  const [Cat, setCat] = useState("all");

  const filterCat =
    Cat === "all"
      ? projects
      : projects.filter((project) => project.category === Cat);

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Nav variant="pills" className="flex-column">
              {["all", "React", "JS", "Html , Css"].map((cat) => (
                <Nav.Item
                  className="mb-2"
                  key={cat}
                  onClick={() => setCat(cat)}
                >
                  <Nav.Link eventKey={cat}>{cat}</Nav.Link>
                </Nav.Item>
              ))}

              {/* /* <Nav.Item className="mb-2">
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
              </Nav.Item> */}
            </Nav>
          </motion.div>
        </Col>
        <Col sm={10}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg "
          >
            <div className="row">
              <div className="projects-grid">
                {filterCat.map((project) => (
                  <Cardc key={project.id} project={project} />
                ))}
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Tab.Container>
  );
}
export default Taps;
