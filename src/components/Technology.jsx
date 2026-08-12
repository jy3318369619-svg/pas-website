import React, { useState, useEffect, useRef } from 'react';
// Images moved to public/images folder - using direct paths

const Technology = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredCards, setHoveredCards] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (index, isHovered) => {
    setHoveredCards(prev => ({ ...prev, [index]: isHovered }));
  };

  // CSS animations
  // Removed duplicate styles declaration to fix redeclaration error

  const technologies = [
    {
      id: 'merino-wool',
      title: 'Australian Merino Wool',
      subtitle: 'Raw Material Excellence',
      description: 'Selected fine Merino fibers deliver exceptional smoothness, resilience, and long-lasting color. These premium Australian wool fibers ensure stable performance under varying humidity conditions, making the cloth competition-grade for professional tournaments.',
      highlights: ['Elastic recovery', 'Color fastness', 'Humidity stability'],
      icon: (
        <img 
          src="/images/merino wool.jpg" 
          alt="Australian Merino Wool" 
          style={{ 
            width: '400px', 
            height: '300px', 
            objectFit: 'cover',
            borderRadius: '16px',
            filter: 'drop-shadow(0 8px 25px rgba(10, 101, 163, 0.25))'
          }} 
        />
      )
    },
    {
      id: 'triple-ply',
      title: 'Triple Ply™',
      subtitle: 'Yarn Structure Innovation',
      description: 'Three-ply twisted yarns provide superior tensile strength and dimensional stability. The fabric resists deformation and wear, extending service life and ensuring consistent play over time.',
      highlights: ['Stronger', 'More stable', 'Longer-lasting'],
      icon: (
        <img 
          src="/images/triple ply_副本.png" 
          alt="Triple Ply Technology" 
          style={{ 
            width: '400px', 
            height: '320px', 
            objectFit: 'contain',
            borderRadius: '20px',
            filter: 'drop-shadow(0 8px 25px rgba(59, 130, 246, 0.25)) contrast(1.05) saturate(1.1)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05) translateY(-4px)';
            e.target.style.filter = 'drop-shadow(0 15px 35px rgba(59, 130, 246, 0.35)) contrast(1.1) saturate(1.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) translateY(0)';
            e.target.style.filter = 'drop-shadow(0 8px 25px rgba(59, 130, 246, 0.25)) contrast(1.05) saturate(1.1)';
          }}
        />
      )
    },
    {
      id: 'frame-walking',
      title: 'Frame-walking Spinning Technology',
      subtitle: 'Spinning Process',
      description: 'Our Chinese Pool/Heyball and Snooker cloths are manufactured with advanced frame-walking spinning technology. The process tightens fiber packing and improves uniformity, delivering superior durability and stable, predictable ball speed.',
      highlights: ['Enhanced uniformity', 'Greater durability', 'Stable ball speed'],
      icon: (
        <img 
          src="/images/frame walking_副本.png" 
          alt="Frame-walking Spinning Technology" 
          style={{ 
            width: '400px', 
            height: '320px', 
            objectFit: 'contain',
            borderRadius: '20px',
            filter: 'drop-shadow(0 8px 25px rgba(10, 101, 163, 0.25)) contrast(1.05) saturate(1.1)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05) translateY(-4px)';
            e.target.style.filter = 'drop-shadow(0 15px 35px rgba(10, 101, 163, 0.35)) contrast(1.1) saturate(1.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) translateY(0)';
            e.target.style.filter = 'drop-shadow(0 8px 25px rgba(10, 101, 163, 0.25)) contrast(1.05) saturate(1.1)';
          }}
        />
      )
    },
    {
      id: 'ultra-short-velvet',
      title: 'Ultra-short Velvet',
      subtitle: 'Finishing Excellence',
      description: 'Precision shearing forms an ultra-short pile with low friction. This finishing enables faster ball speed, straighter rolling, and easier maintenance.',
      highlights: ['Faster', 'Straighter', 'Easier to clean'],
      icon: (
        <img 
          src="/images/ultra short velvet_副本.png" 
          alt="Ultra-short Velvet" 
          style={{ 
            width: '400px', 
            height: '320px', 
            objectFit: 'contain',
            borderRadius: '20px',
            filter: 'drop-shadow(0 8px 25px rgba(10, 101, 163, 0.25)) contrast(1.05) saturate(1.1)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05) translateY(-4px)';
            e.target.style.filter = 'drop-shadow(0 15px 35px rgba(10, 101, 163, 0.35)) contrast(1.1) saturate(1.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) translateY(0)';
            e.target.style.filter = 'drop-shadow(0 8px 25px rgba(10, 101, 163, 0.25)) contrast(1.05) saturate(1.1)';
          }}
        />
      )
    },
    {
      id: 'nfc-auth',
      title: 'NFC Authentication',
      subtitle: 'Quality & Service',
      description: 'Each set of billiard cloth has a round NFC chip embedded on the cushion cloth. Simply tap with a smartphone to verify authenticity, trace production batches, and manage distributors.',
      highlights: ['Anti-counterfeiting', 'Batch traceability', 'Reliable distributor management'],
      icon: (
        <img 
          src="/images/nfc_auth.png" 
          alt="NFC Authentication" 
          style={{ 
            width: '200px', 
            height: '200px', 
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 8px rgba(10, 101, 163, 0.2))'
          }} 
        />
      )
    }
  ];


  const styles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .tech-card {
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .tech-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(10, 101, 163, 0.15);
    }

    .technology-page {
      background: linear-gradient(180deg, #ECEFF1 0%, #ffffff 48%, #ECEFF1 100%);
      min-height: 100vh;
      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .technology-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 32px;
    }

    .technology-top-spacer {
      height: 112px;
    }

    .technology-hero {
      text-align: center;
      margin-bottom: 72px;
      background: linear-gradient(135deg, #0A65A3, #1976D2);
      border-radius: 28px;
      padding: 76px 40px 68px;
      color: #ffffff;
      position: relative;
      overflow: hidden;
      box-shadow: 0 24px 60px rgba(10, 101, 163, 0.18);
    }

    .technology-hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.14;
    }

    .technology-hero-title,
    .technology-hero-subtitle {
      position: relative;
      z-index: 1;
    }

    .technology-hero-title {
      font-size: clamp(64px, 8vw, 88px);
      font-weight: 700;
      line-height: 1.04;
      margin: 0 0 18px;
      letter-spacing: 0;
      animation: fadeInUp 1s ease-out;
    }

    .technology-hero-subtitle {
      font-size: clamp(20px, 2.4vw, 24px);
      max-width: 620px;
      margin: 0 auto;
      line-height: 1.5;
      opacity: 0.92;
      animation: fadeInUp 1s ease-out 0.3s both;
    }

    .technology-sections {
      display: flex;
      flex-direction: column;
      gap: 88px;
      padding-bottom: 72px;
    }

    .tech-section {
      display: grid;
      grid-template-columns: minmax(320px, 0.92fr) minmax(0, 1fr);
      gap: clamp(48px, 6vw, 80px);
      align-items: center;
      opacity: 0;
      transform: translateY(60px);
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transition-delay: 0.2s;
    }

    .tech-section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .tech-section.reverse .tech-media {
      order: 2;
    }

    .tech-section.reverse .tech-content {
      order: 1;
    }

    .tech-media {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 0;
    }

    .tech-media-card {
      background: rgba(255, 255, 255, 0.82);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      padding: 36px;
      box-shadow: 0 20px 40px rgba(10, 101, 163, 0.1);
      border: 1px solid rgba(10, 101, 163, 0.1);
    }

    .tech-media img {
      width: min(100%, 420px) !important;
      max-height: 340px;
      object-fit: contain;
    }

    .tech-content {
      max-width: 620px;
      min-width: 0;
    }

    .tech-label-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 16px;
    }

    .tech-label {
      background: linear-gradient(135deg, #0A65A3, #1976D2);
      color: #ffffff;
      padding: 6px 16px;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .tech-scope {
      background: #FFD700;
      color: #0A0A0A;
    }

    .tech-title {
      font-size: clamp(30px, 3.5vw, 40px);
      font-weight: 700;
      color: #0A0A0A;
      margin: 0 0 18px;
      line-height: 1.16;
      letter-spacing: 0;
    }

    .tech-description {
      font-size: 18px;
      color: #555f66;
      line-height: 1.68;
      margin: 0 0 28px;
    }

    .tech-highlights {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 8px;
      align-items: center;
    }

    .highlight-tag {
      background: linear-gradient(135deg, #0A65A3, #1976D2);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      margin: 4px;
      display: inline-block;
    }

    .cta-button {
      background: linear-gradient(135deg, #0A65A3, #1976D2);
      color: white;
      border: none;
      padding: 16px 32px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(10, 101, 163, 0.3);
    }

    .cta-button-secondary {
      background: transparent;
      color: #0A65A3;
      border: 2px solid #0A65A3;
    }

    .cta-button-secondary:hover {
      background: #0A65A3;
      color: white;
    }

    @media (max-width: 900px) {
      .technology-container {
        padding: 0 24px;
      }

      .technology-top-spacer {
        height: 104px;
      }

      .technology-hero {
        margin-bottom: 56px;
        border-radius: 24px;
        padding: 58px 28px 54px;
      }

      .technology-sections {
        gap: 64px;
        padding-bottom: 56px;
      }

      .tech-section,
      .tech-section.reverse {
        grid-template-columns: 1fr;
        gap: 26px;
      }

      .tech-section.reverse .tech-media,
      .tech-section.reverse .tech-content {
        order: initial;
      }

      .tech-content {
        max-width: 680px;
        margin: 0 auto;
        text-align: center;
      }

      .tech-label-row,
      .tech-highlights {
        justify-content: center;
      }

      .tech-media img {
        width: min(100%, 560px) !important;
        max-height: 360px;
      }
    }

    @media (max-width: 560px) {
      .technology-container {
        padding: 0 18px;
      }

      .technology-top-spacer {
        height: 96px;
      }

      .technology-hero {
        margin-bottom: 42px;
        border-radius: 18px;
        padding: 42px 18px 38px;
      }

      .technology-hero-title {
        font-size: clamp(44px, 13vw, 56px);
      }

      .technology-hero-subtitle {
        font-size: 17px;
      }

      .technology-sections {
        gap: 52px;
        padding-bottom: 44px;
      }

      .tech-section {
        gap: 22px;
      }

      .tech-media-card {
        padding: 22px;
        border-radius: 18px;
      }

      .tech-media img {
        width: 100% !important;
        max-height: 280px;
        border-radius: 16px !important;
      }

      .tech-title {
        font-size: 28px;
      }

      .tech-description {
        font-size: 16px;
        line-height: 1.62;
      }

      .tech-label {
        font-size: 12px;
        padding: 6px 12px;
      }

      .highlight-tag {
        font-size: 13px !important;
        padding: 8px 12px !important;
        border-radius: 18px !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="technology-page">
        {/* Hero Section */}
        <div id="hero" className="technology-container">
          {/* Top spacing */}
          <div className="technology-top-spacer"></div>
          <div className="technology-hero">
            <h1 className="technology-hero-title">
              Technology
            </h1>
            <p className="technology-hero-subtitle">
              Where precision meets durability.
            </p>
          </div>

          {/* Technology Sections */}
          <div className="technology-sections">
            {technologies.map((tech, index) => {
              const useMediaCard = !(tech.id === 'triple-ply' || tech.id === 'frame-walking' || tech.id === 'ultra-short-velvet' || tech.id === 'merino-wool');
              const isVisible = visibleSections.has(tech.id);

              return (
                <div 
                  key={tech.id}
                  ref={el => sectionRefs.current[index] = el}
                  data-section={tech.id}
                  className={`tech-section ${index % 2 === 1 ? 'reverse' : ''} ${isVisible ? 'visible' : ''}`}
                >
                  <div className={`tech-media ${useMediaCard ? 'tech-media-card' : ''}`}>
                    {tech.icon}
                  </div>
                  
                  <div className="tech-content">
                    <div className="tech-label-row">
                      <span className="tech-label">
                        {tech.subtitle}
                      </span>
                      {tech.scope && (
                        <span className="tech-label tech-scope">
                          {tech.scope}
                        </span>
                      )}
                    </div>
                    
                    <h2 className="tech-title">
                      {tech.title}
                    </h2>
                    
                    <p className="tech-description">
                      {tech.description}
                    </p>
                    
                    <div className="tech-highlights">
                      {tech.highlights.map((highlight, idx) => (
                        <span 
                          key={idx} 
                          className="highlight-tag"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
