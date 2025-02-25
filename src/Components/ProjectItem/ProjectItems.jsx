import { React, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, Container, Image, Offcanvas } from "react-bootstrap";
import { BiWorld } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";

import "./projectItem.scss";

function customMapWithBreak(arr, callback, stopIteration) {
  const result = [""];

  for (let i = 0; i < arr.length && i < stopIteration; i++) {
    const mappedValue = String(callback(arr[i]));
    result.push(mappedValue);
  }

  return result;
}

function ProjectItems({ title, img, desc, link, linkName, tool }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mappedArray = customMapWithBreak(tool, (item) => item * 2, 3);

  return (
    <motion.div
      className="card-Item"
      whileHover={{
        scale: 1.05,
        boxShadowshadow: "1px 6px 20px -4px rgba(255,255,255,0.75)",
      }}
    >
      {/* card code */}
      <Card onClick={handleShow} key={title}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <h3>{title}</h3>
        </Card.Body>
      </Card>
      {/* off canvas code */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <h3>{title}</h3>
        </Offcanvas.Header>
        <div className="off-canvas-img">
          <Image src={img} />
        </div>
        <Offcanvas.Body>
          <div>
            <h6>About</h6>
            <p>{desc}</p>
          </div>
          <div>
            <h6>Technologies:</h6>
            <div className="tools">
              {tool.map((item, index) => (
                <div className="tools-Item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="card-align">
              <BiWorld /> <h6>Link:</h6>{" "}
            </div>
            <Link to={link} target="_blank">
              {link}
            </Link>
          </div>
        </Offcanvas.Body>
        {/* off canvas bottom link positioned */}
        <div className="off-canvas-bottom-link">
          <h6>
            <Link to={link} target="_blank">
              Project link <FaLink />
            </Link>
          </h6>
        </div>
      </Offcanvas>
    </motion.div>
  );
}

export default ProjectItems;
