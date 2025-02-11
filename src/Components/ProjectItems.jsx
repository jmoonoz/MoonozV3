import { React, useState } from "react";
import ProjectImg from "../Images/JoelDisney.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, Image, Offcanvas } from "react-bootstrap";

function customMapWithBreak(arr, callback, stopIteration) {
  const result = [""];

  for (let i = 0; i < arr.length && i < stopIteration; i++) {
    const mappedValue = String(callback(arr[i])); 
    result.push(mappedValue);
  }

  return result;
}

function ProjectItems({ title, img, desc, tool }) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(tool[1]);
  const mappedArray = customMapWithBreak(tool, (item) => item * 2, 3);

  return (
    <motion.div
      className="card-Item"
      whileHover={{
        scale: 1.1,
        boxShadowshadow: "1px 6px 20px -4px rgba(255,255,255,0.75)",
      }}
    >
      <Card onClick={handleShow} key={title}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <h3>{title}</h3>
          <div className="tools-Title">Tools used:</div>
          {/* tools listed here */}
          <div className="tools">
            {mappedArray.map((item, index) => (
              <div className="tools-Item" key={index}>{item}</div>
            ))}
            ...
          </div>
        </Card.Body>
      </Card>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <h3>{title}</h3>
        </Offcanvas.Header>
        <Image src={img} />
        <Offcanvas.Body>
          {desc}
          <div>
            Tools used:
            <div className="tools">
              {tool.map((item, index) => (
                <div className="tools-Item" key={index}>{item}</div>
              ))}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </motion.div>
  );
}

export default ProjectItems;
