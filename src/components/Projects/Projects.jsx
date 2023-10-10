import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ContactWrapper } from "../About/AboutElements";
function Projects() {
  return (
    <ContactWrapper id="projects">
      <div className="ProjectWrapper">
        <div className="Container">
          <div className="SectionTitle">Personal Projects</div>
          <ProjectCard />
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Projects;
