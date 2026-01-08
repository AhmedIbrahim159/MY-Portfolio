import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Card.css";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
function Cardc({ project }) {
  console.log(project);
  return (
    <Card className="project-card">
      <div className="image-wrapper">
        <Card.Img variant="top" src={project.image} />
      </div>

      <Card.Body>
        <Card.Title className="project-title">{project.title}</Card.Title>
      </Card.Body>

      <Card.Body>
        <Stack direction="horizontal" gap={2}>
          {project.tools.map((tag) => (
            <Badge className="kk" bg="dark" text="light">
              {tag}
            </Badge>
          ))}
        </Stack>
      </Card.Body>

      <Card.Body className="card-actions">
        <Link to={project.demo} className="card-link" target="_blank">
          Live Demo
        </Link>
        <Link to={project.link} className="card-link secondary" target="_blank">
          GitHub
        </Link>
      </Card.Body>
      
    </Card>

    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={project.image} />
    //   <Card.Body>
    //     <Card.Title>{project.title}</Card.Title>
    //     <Card.Text>{project.description}</Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item>Cras justo odio</ListGroup.Item>
    //     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    //     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    //   </ListGroup>
    //   <Card.Body>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>
  );
}

export default Cardc;
