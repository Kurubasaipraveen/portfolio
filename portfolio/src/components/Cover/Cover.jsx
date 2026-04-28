import * as React from "react";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="container py-5 mb-5 my-5" id="home">
      <div className="row align-items-center my-5 py-5">
        
        {/* LEFT SIDE */}
        <div className="col-lg-7 py-5 order-2 order-lg-1 px-4">
          <h4 className="fw-bold">Hello, It's me</h4>

          <h2 className="fw-bold">
            Kuruba <span className="scroll-text">Saipraveen</span>
          </h2>

          <h4 className="fw-bold mb-4 pb-2">
            I'm a <span className="scroll-text-fast">Full Stack Developer</span>
          </h4>

          <p>
            I'm a student, interested in Full Stack Development.
          </p>

          {/* SOCIAL LINKS */}
          <div className="social-media py-3">
            <a
              href="https://www.linkedin.com/in/kurubasaipraveen/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="https://github.com/Kurubasaipraveen/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="mailto:ksaipraveen6@gmail.com"
              className="mx-2"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>

          {/* RESUME */}
          <a
            href="https://drive.google.com/uc?export=download&id=1uGjOCuBjDIvRxk3N87gOkvItfEWcxmEO"
            download="resume.pdf"
          >
            <button className="button my-3">
              Download Resume
            </button>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-lg-4 offset-lg-1 text-center order-1 order-lg-2 py-5">
          <img
            src="https://res.cloudinary.com/dyutmmnia/image/upload/v1777345051/file_000000002f5872088c0cad8d3621d5fb_ryo8qy.png"
            alt="Kuruba Saipraveen"
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
};

export default Cover;
