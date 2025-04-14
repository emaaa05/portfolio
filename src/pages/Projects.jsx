import { useState } from 'react';
import projects from '../data/projectsData';
import '../styles/projects.css';

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => {
    setModalImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects </h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            {proj.images && proj.images.length > 1 ? (
              proj.images.length === 2 ? (
                <div className="project-images-double">
                  {proj.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${proj.title} ${i + 1}`}
                      className="project-image"
                      onClick={() => openModal(img)}
                    />
                  ))}
                </div>
              ) : (
                <div className="project-images-scroll">
                  {proj.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${proj.title} ${i + 1}`}
                      className="project-image"
                      onClick={() => openModal(img)}
                    />
                  ))}
                </div>
              )
            ) : (
              <img
                src={proj.images?.[0]}
                alt={proj.title}
                className="project-image"
                onClick={() => openModal(proj.images?.[0])}
              />
            )}

            <h3 className="project-title">{proj.title}</h3>
            <p className="project-description">{proj.description}</p>

            {proj.link.startsWith("http") ? (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            ) : (
              <span className="project-private">{proj.link}</span>
            )}

            <p className="project-tech">
              Tech: {proj.tech.join(', ')}
            </p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Project" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
