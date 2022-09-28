import React from "react";
import "./Project.css";

const Project = ({ description, title, url, img, alt }) => {
  return (
    <div className="card">
      <img src={img} alt={alt} />
      <div className="card-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a
          className="link-underline"
          rel="noreferrer"
          target="_blank"
          href={url}
        >
          Live App
        </a>
      </div>
    </div>
  );
};

export default Project;
