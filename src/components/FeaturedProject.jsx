import React, { useMemo, useState } from 'react';
import '../styles/projects.css';

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function FeaturedProject({ project, language = 'es' }) {
  const [isCaseOpen, setIsCaseOpen] = useState(false);
  const isEnglish = language === 'en';

  // Autodetect video/poster from src/assets if not provided via dataset
  const { autoVideoSrc, autoPosterSrc } = useMemo(() => {
    try {
      const videoModules = import.meta.glob('../assets/**/*.{mp4,webm,ogg}', { eager: true, as: 'url' });
      const imageModules = import.meta.glob('../assets/**/*.{png,jpg,jpeg}', { eager: true, as: 'url' });

      const hint = (project.videoHint || project.title || '').toLowerCase();
      const hintTokens = hint.split(/\s+|[-_]+/).filter(Boolean);
      const matcher = (path) => {
        const p = path.toLowerCase();
        if (/college|connect|campus|univer/i.test(p)) return true;
        return hintTokens.some(t => t.length > 3 && p.includes(t));
      };

      const pickFirst = (obj) => Object.keys(obj)[0] ? obj[Object.keys(obj)[0]] : undefined;

      const videoMatch = Object.keys(videoModules).find(matcher);
      const imageMatch = Object.keys(imageModules).find(matcher);

      return {
        autoVideoSrc: videoMatch ? videoModules[videoMatch] : pickFirst(videoModules),
        autoPosterSrc: imageMatch ? imageModules[imageMatch] : undefined,
      };
    } catch {
      return { autoVideoSrc: undefined, autoPosterSrc: undefined };
    }
  }, [project]);

  const shouldEmbedVideo = useMemo(() => {
    // If there is an external demo URL, prefer linking instead of embedding to keep the bundle light
    if (project?.demoExternalUrl) return false;
    return Boolean(project?.demoVideo?.src || autoVideoSrc);
  }, [project, autoVideoSrc]);

  if (!project) return null;

  return (
    <section className="featured-project">
      <div className="featured-hero">
        <div className="featured-left">
          <p className="featured-eyebrow">{isEnglish ? 'FEATURED CASE STUDY' : 'CASO DE ESTUDIO DESTACADO'}</p>
          <h2 className="featured-title">{project.title}</h2>
          <p className="featured-subtitle">{project.tagline}</p>

          <div className="badge-group">
            {project.role ? <Badge>{project.role}</Badge> : <Badge>Owner</Badge>}
            <Badge>Fullstack</Badge>
            <Badge>Backend + producto</Badge>
            {project.payments?.map((p) => (
              <Badge key={p}>Payments: {p}</Badge>
            ))}
          </div>

          <p className="featured-description">{project.description}</p>

          {project.cofounder && (
            <p className="featured-subnote">Co‑founder: {project.cofounder}</p>
          )}

          <div className="meta">
            <div><strong>Backend:</strong> {project.backend}</div>
            <div><strong>Frontend:</strong> {project.frontend}</div>
            <div><strong>Infra:</strong> {project.infrastructure}</div>
          </div>

          <div className="cta-group">
            {project.demoExternalUrl && (
              <a className="cta-button primary" href={project.demoExternalUrl} target="_blank" rel="noreferrer">
                {isEnglish ? 'Watch demo' : 'Ver demo'}
              </a>
            )}
            {project.contactEmail && (
              <a className="cta-button" href={`mailto:${project.contactEmail}?subject=Demo%20request%20-%20${encodeURIComponent(project.title)}`}>{isEnglish ? 'Request a demo' : 'Solicitar demo'}</a>
            )}
            {project.caseStudy && (
              <button className="cta-button" onClick={() => setIsCaseOpen(true)}>{isEnglish ? 'Read case study' : 'Leer caso de estudio'}</button>
            )}
            {project.storeLinks?.map((s) => (
              <a key={s.href} className="cta-button ghost" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>

        <div className="featured-right">
          {shouldEmbedVideo ? (
            <div className="featured-media">
              <video
                className="featured-video"
                src={project.demoVideo?.src || autoVideoSrc}
                poster={project.demoVideo?.poster || autoPosterSrc || project.images?.[0]}
                muted
                autoPlay
                loop
                playsInline
                controls
              />
            </div>
          ) : (
            project.images?.[0] && (
              <img src={project.images[0]} alt={project.title} className="featured-image" />
            )
          )}
        </div>
      </div>

      {isCaseOpen && (
        <div className="modal" onClick={() => setIsCaseOpen(false)}>
          <div className="modal-content case-study" onClick={(e) => e.stopPropagation()}>
            <h3 className="case-title">{isEnglish ? 'Case study:' : 'Caso de estudio:'} {project.title}</h3>
            <p className="case-paragraph">{project.caseStudy.overview}</p>

            <h4>{isEnglish ? 'Ownership and responsibilities' : 'Aporte y responsabilidades'}</h4>
            <ul className="case-list">
              {project.caseStudy.ownership.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h4>{isEnglish ? 'Architecture' : 'Arquitectura'}</h4>
            <ul className="case-list">
              {project.caseStudy.architecture.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h4>{isEnglish ? 'Payments' : 'Pagos'}</h4>
            <ul className="case-list">
              {project.caseStudy.payments.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h4>{isEnglish ? 'Roadmap' : 'Próximos pasos'}</h4>
            <ul className="case-list">
              {project.caseStudy.roadmap.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <button className="cta-button" onClick={() => setIsCaseOpen(false)}>{isEnglish ? 'Close' : 'Cerrar'}</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProject;


