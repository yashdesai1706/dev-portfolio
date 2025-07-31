import React from 'react';
import './Projects.css'; // Ensure the CSS is also black & white

function Projects() {
  const projects = [
    {
      title: "Cloth Recommendation System",
      description: "Brand Store is a modern and responsive e-commerce website designed for selling clothing and grocery products. It features a clean user interface, smart product categorization, interactive shopping cart, and responsive design for all devices.",
      tech: ["HTML", "CSS", "BOOTSTRAP"],
      link: "https://yashdesai1706.github.io/brand-store-frontend/",
      btn: "View Project"

    },
    {
      title: "Personal Portfolio",
      description: "A personal portfolio designed to highlight my journey in tech, featuring academic and personal projects, technical skills, and a glimpse into my creative problem-solving abilities.",
      tech: ["HTML", "CSS", "REACT JS", "REACT BOOTSTRAP", "AOS Animation"],
      link: "#",
      btn: "View Project"
    },
    {
      title: "Superstore Management System",
      description: "The Superstore Management System is a comprehensive desktop/web application designed to streamline the operations of a retail store. It manages inventory, billing, customer records, and sales analytics in one centralized platform.",
      tech: ["MERN Stack", "ML", "Bootstrap"],
      btn: "In Progress"
    },

      {
      title: "Superstore Management System",
      description: "The Superstore Management System is a comprehensive desktop/web application designed to streamline the operations of a retail store. It manages inventory, billing, customer records, and sales analytics in one centralized platform.",
      tech: ["MERN Stack", "ML", "Bootstrap"],
      btn: "In Progress"
    },
      {
      title: "Superstore Management System",
      description: "The Superstore Management System is a comprehensive desktop/web application designed to streamline the operations of a retail store. It manages inventory, billing, customer records, and sales analytics in one centralized platform.",
      tech: ["MERN Stack", "ML", "Bootstrap"],
      btn: "In Progress"
    }

  ];

  return (
    <>

      <section className="projects-section py-5 px-3" id="projects">
        <div className="container-fluid projects-section">
          <h2 className=" text-black mb-5 text" >MY PROJECTS</h2>
          <div className="row gy-4">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="project-card p-4 h-100 text-center border custom-shadow rounded-5" data-aos="fade-up">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="text-dark desc" style={{ fontFamily: 'Anzo2' }}>{project.description}</p>
                  <div className="mb-3 mt-2 d-flex flex-wrap">
                    {project.tech.map((tech, i) => (
                      <span style={{ color: 'black', fontFamily: 'Anzo2' }} key={i} className="tech-pill me-2 mb-2">{tech}</span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-center align-items-end mt-3">
                    <a
                      href={project.link}
                      className="btn btn-outline-light mt-2"
                      target="_blank"
                      rel="noreferrer"
                      style={{ width: 'auto', textAlign: 'center', margin: 'auto' }}
                    >
                      {project.btn}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
