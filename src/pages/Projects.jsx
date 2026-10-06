import { useMemo, useState } from 'react';
import projects from '../data/projectsData';
import '../styles/Projects.css';

const projectOrder = ['TurnoYA', 'College Connect USA', 'BCRA Connect', 'React Native Music Player', 'React Native Weather App', 'Ecommerce'];

function Projects({ language = 'es' }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const orderedProjects = useMemo(
    () => [...projects].sort((first, second) => projectOrder.indexOf(first.title) - projectOrder.indexOf(second.title)),
    []
  );
  const filteredProjects = useMemo(
    () => activeFilter === 'all' ? orderedProjects : orderedProjects.filter(project => project.category === activeFilter),
    [activeFilter, orderedProjects]
  );

  const filters = [
    { key: 'all', es: 'Todos', en: 'All' },
    { key: 'fullstack', es: 'Fullstack', en: 'Fullstack' },
    { key: 'mobile', es: 'Mobile', en: 'Mobile' },
    { key: 'desktop', es: 'Desktop', en: 'Desktop' },
  ];

  const openModal = (img) => {
    setModalImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const openCaseStudy = (project) => setSelectedProject(project);
  const selectedCaseStudy = selectedProject?.caseStudy;
  const caseStudyOverview = selectedCaseStudy && (language === 'en'
    ? selectedCaseStudy.overviewEn || selectedProject.descriptionEn || selectedCaseStudy.overview
    : selectedCaseStudy.overview);
  const caseStudyArchitecture = selectedCaseStudy && (language === 'en'
    ? selectedCaseStudy.architectureEn || selectedCaseStudy.architecture
    : selectedCaseStudy.architecture);

  return (
    <section className="projects-section matrix-section" id="proyectos">
      <p className="section-kicker">{language === 'en' ? 'LAB' : 'LABORATORIO'}</p>
      <h2 className="projects-title">{language === 'en' ? 'Projects with a story to tell.' : 'Proyectos con algo para contar.'}</h2>

      <div className="projects-toolbar">
        <div className="project-filters" role="group" aria-label={language === 'en' ? 'Filter projects' : 'Filtrar proyectos'}>
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-button ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {language === 'en' ? filter.en : filter.es}
            </button>
          ))}
        </div>
        <span className="project-count">{filteredProjects.length} {language === 'en' ? 'projects' : 'proyectos'}</span>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proj, index) => {
          const projectTitle = language === 'en' ? proj.title : proj.titleEs || proj.title;

          return (
          <div key={index} className="project-card">
            {proj.images && proj.images.length > 1 ? (
              proj.images.length === 2 ? (
                <div className="project-images-double">
                  {proj.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${projectTitle} ${i + 1}`}
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
                      alt={`${projectTitle} ${i + 1}`}
                      className="project-image"
                      onClick={() => openModal(img)}
                    />
                  ))}
                </div>
              )
            ) : (
              <img
                src={proj.images?.[0]}
                alt={projectTitle}
                className="project-image"
                onClick={() => openModal(proj.images?.[0])}
              />
            )}

            <h3 className="project-title">{projectTitle}</h3>
            <p className="project-description">{language === 'en' ? proj.descriptionEn || proj.description : proj.description}</p>

            {proj.link?.startsWith("http") ? (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {language === 'en' ? 'View on GitHub' : 'Ver en GitHub'}
              </a>
            ) : proj.demoExternalUrl ? (
              <a href={proj.demoExternalUrl} target="_blank" rel="noreferrer" className="project-link">
                {language === 'en' ? 'View demo' : 'Ver demo'}
              </a>
            ) : (
              <span className="project-private">{language === 'en' ? 'Private project' : 'Proyecto privado'}</span>
            )}

            <div className="tech-badges">
              {proj.tech.map((t) => (
                <span className="tech-badge" key={t}>{t}</span>
              ))}
            </div>

            {proj.caseStudy && (
              <button className="project-details-button" onClick={() => openCaseStudy(proj)}>
                {language === 'en' ? 'Read project details' : 'Ver detalles del proyecto'}
              </button>
            )}
          </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Project" className="modal-image" />
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content case-study project-case-study" onClick={(event) => event.stopPropagation()}>
            <p className="featured-eyebrow">{language === 'en' ? 'PROJECT NOTES' : 'NOTAS DEL PROYECTO'}</p>
            <h3 className="case-title">{language === 'en' ? selectedProject.title : selectedProject.titleEs || selectedProject.title}</h3>
            <p className="case-paragraph">{caseStudyOverview}</p>
            <h4>{language === 'en' ? 'Architecture' : 'Arquitectura'}</h4>
            <ul className="case-list">
              {caseStudyArchitecture.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <button className="cta-button" onClick={() => setSelectedProject(null)}>
              {language === 'en' ? 'Close' : 'Cerrar'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
