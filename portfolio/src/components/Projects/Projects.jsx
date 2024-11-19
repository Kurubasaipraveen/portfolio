import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="projects">
      <h3 className="py-5 ">
        My <span>Projectss</span>...
      </h3>
      <p>Username: praveen<br/>Password: praveen@2024</p>
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
              alt="Project 2"
              className="img-fluid shadow rounded projImg"
            />
            
            </a>
            
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
          <a href='https://saitictiktoe.ccbp.tech' target="_blank" rel="noreferrer">
            <img
              src='https://res.cloudinary.com/dyutmmnia/image/upload/v1726803630/z39eqohntuv2zsptbcqr.png'
              alt="Project 3"
              className="img-fluid shadow rounded projImg"
            />
            
            </a>
            
          </div>
           <div className="col-12 col-md-6 px-4 py-4">
          <a href='https://simpletodossaip.ccbp.tech/' target="_blank" rel="noreferrer">
            <img
              src='https://res.cloudinary.com/dyutmmnia/image/upload/v1726804665/kknsso2u5blpfpa9h1od.png'
              alt="Project 4"
              className="img-fluid shadow rounded projImg"
            />
            
            </a>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
