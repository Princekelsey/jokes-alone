import React from "react";
import pic from "../../img/prince.png";

const About = () => {
  return (
    <div className="row pt-0 " data-test="abouttest">
      <div className="col-md-12">
        <div className=" card-body bg-f text-white mt-0">
          <div className="row ">
            <div className="col-4 col-md-3 m-auto  text-center pt-5">
              <img className="set" src={pic} alt="prince" data-test="imgtest" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="display-5 text-center">Prince Ajuobi</h1>
            <p className="lead text-center">Full Stack Developer</p>
            <p>
              <a
                className="text-white p-2"
                href="https://www.linkedin.com/in/prince-ajuobi"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
              <a
                className="text-white p-2"
                href="https://github.com/Princekelsey"
              >
                <i className="fab fa-github fa-2x" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="card ">
          <div className="card-header  text-center">Basic Information</div>
          <div className="card-body text-center">
            <blockquote className="blockquote mb-0">
              <p>
                I am a passionate self-taught fullstack JavaScript software
                developer, currently studying bachelor’s degree in software
                development to develop my skills and be a better software
                developer. I love writing codes and solving problems with great
                keenness to join a team and contribute to the growth of the
                company and add value to the customers.
              </p>
              <footer className="blockquote-footer text-info">
                JavaScript, Java, React&Redux, Node.js, MongoDB, Express,
                S(CSS), HTML, Bootstrap 4, Git/Github, postgreSQL, Test Driven
                Development
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
