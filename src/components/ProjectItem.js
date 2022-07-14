import React from "react";

function ProjectItem({ name, about, technologies }) {
  const newTechList = technologies.map((tecno) =>(
    <span key={tecno}>{tecno}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {newTechList}
      </div>
    </div>
  );
}

export default ProjectItem;
