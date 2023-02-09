import React from "react";
import "./about.css";
import PIC from "../../assets/pic_me.jpg";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={PIC} alt="Debabrata Paul" />
          </div>
        </div>

        <div className="about_content">
          <p>
            Hi, I'm Debabrata Paul, a front-end web developer. I build
            websites that help to scale up your business to the next level.
            Check out some of my recent work in portfolio section. I am open for
            the job opportunities where i can contribute, learn and grow. If you
            have good oportunity that match my skills feel free to contact me.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}
