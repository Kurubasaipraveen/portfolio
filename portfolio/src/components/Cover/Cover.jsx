import * as React from "react";
import { Link } from "react-router-dom";
import "./Cover.css";


const Cover = () => {
  return (
    <div className="container py-5 mb-5 my-5" id="home">
      <div className="row align-items-center my-5 py-5">
        <div className="col-lg-7 py-5 order-2 order-lg-1 px-4">
          <h4 className="font-weight-bold">Hello, Its me</h4>
          <h2 className="font-weight-bold">Kuruba saipraveen</h2>
          <h4 className="font-weight-bold mb-4 pb-2">
            I'm a <span>Web Developer</span>
          </h4>
          <p className="font-weight-normal">
            I'm a Student. Insterested in Web Development
          </p>

          <div className="social-media py-3">
            <Link
              to="https://www.linkedin.com/in/kurubasaipraveen/"
              target="_blank"
              className="mx-2"
            >
              <i class="bi bi-linkedin"></i>
            </Link>
            <Link
              to="https://github.com/Kurubasaipraveen/"
              target="_blank"
              className="mx-2"
            >
              <i class="bi bi-github"></i>
            </Link>
          </div>
          <a href="https://drive.google.com/uc?export=download&id=1GWQnyl55UXK3Y55MSNT_XYySZHklfT-R" download="resume.pdf">
            <button className="button my-3">Download Resume🫠</button>
          </a>
        </div>
        <div className="col-12 col-lg-4 offset-lg-1 text-center order-1 order-lg-2 py-5">
          <img src="https://res.cloudinary.com/dyutmmnia/image/upload/v1720952540/bobhlatwje8djfpjk6va.png" alt="sisi_tarak" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Cover;