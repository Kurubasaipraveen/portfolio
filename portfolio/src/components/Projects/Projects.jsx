import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="projects">
      <h3 className="py-5 ">
        My <span>Projectss</span>...
      </h3>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6 px-4 py-4">
            <a href='https://nxttrendzpravee.ccbp.tech/login' target="_blank"  rel="noreferrer">
            <img
              src='https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-home-output.png'
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
            </a>
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
          <a href='https://jobbybypraveen.ccbp.tech/login' target="_blank" rel="noreferrer">
            <img
              src='https://res.cloudinary.com/dyutmmnia/image/upload/v1721717535/zoenllpwb85sbvzwuyzb.png'
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
            </a>
          </div>
          {/* <div className="col-12 col-md-6 px-4 py-4">
            <img
              src=''
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
            <img
              src=''
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;