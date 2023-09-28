import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { Container, Row, Col } from "react-bootstrap";
import ProjectInfo from "../Assets/Projects";
import ProjectItems from "../Components/ProjectItems";
import { slideInLeft, fadeInOut } from "../animation";

function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);
  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectInfo);
    }
  };

  return (
    <motion.div key="/contact" initial="hidden" animate="show" exit="exit">
      <Container>
        <SectionTitle title="My Works" />
        <div className="project-search">
          <motion.div variants={fadeInOut}>
            <form>
              <input
                className="form-control"
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
            </form>
          </motion.div>
        </div>
        <div className="project-all-item">
          {ProjectInfo.map((item) => (
            <motion.div variants={fadeInOut}>
              <ProjectItems
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            </motion.div>
          ))}
        </div>

        {/* <Row>
          <Col xs={12}></Col>
        </Row> */}
      </Container>
    </motion.div>
  );
}

export default Projects;
