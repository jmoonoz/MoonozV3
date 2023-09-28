import { React, useState } from "react";
import ProjectImg from "../Images/img-1.jpg";
import { Link } from "react-router-dom";
import { Card, Offcanvas } from "react-bootstrap";

function ProjectItems({
  title = "Project Name",
  img = ProjectImg,
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem" }} onClick={handleShow}>
        <Card.Img variant="top" src={ProjectImg} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>Tools used</p>
          {/* <Card.Text>{desc}</Card.Text> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {desc}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ProjectItems;
