import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Skill Risers"
              description="Skill Riser is an innovative educational technology platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers personalized learning paths, interactive content, real-time progress tracking, collaborative learning features, virtual classrooms, assessment tools, and analytics. Secure and scalable, Learnify transforms the learning experience for students and educators alike."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Health Care"
              description="Our MERN stack healthcare project digitizes patient care and management. It includes features like appointment scheduling, electronic health record management, secure messaging, billing, and reporting, aimed at improving healthcare delivery and patient outcomes"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Passport Photo"
              description="Introducing our Passport Photo Project, crafted with SwiftUI for seamless and intuitive photo capture and editing. This innovative app simplifies the process of creating professional passport photos with its user-friendly interface and advanced features. Say goodbye to complicated editing tools and hello to effortless passport photo generation. Download now for the ultimate convenience in obtaining your perfect passport picture."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Add Watermark"
              description="Introducing our new SwiftUI project: Add Watermark! With this innovative app, you can effortlessly watermark your images in just a few taps. Whether you're a professional photographer or a social media enthusiast, our user-friendly interface makes it easy to customize your watermark and apply it to your photos with precision. Say goodbye to complex editing software and hello to seamless image branding with Add Watermark. Download now and elevate your visuals with a professional touch!"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
