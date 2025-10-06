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
      description: 'Each set of billiard cloth has a round NFC chip embedded on the cushion cloth. Simply tap with a smartphone to verify authenticity, trace production batches, and manage dealers.',
      highlights: ['Anti-counterfeiting', 'Batch traceability', 'Reliable dealer management'],
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
  `;

  return (
    <>
      <style>{styles}</style>
      <div style={{ 
        background: 'linear-gradient(180deg, #ECEFF1 0%, #ffffff 50%, #ECEFF1 100%)', 
        minHeight: '100vh',
        fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
      }}>
        {/* Hero Section */}
        <div id="hero" className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Top spacing */}
          <div style={{ height: '120px' }}></div>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '120px',
            background: 'linear-gradient(135deg, #0A65A3, #1976D2)',
            borderRadius: '32px',
            padding: '60px 40px',
            paddingTop: '80px',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              opacity: 0.1
            }} />
            <h1 className="hero-title" style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 700,
              marginBottom: '24px',
              letterSpacing: '-0.03em',
              position: 'relative',
              zIndex: 1,
              animation: 'fadeInUp 1s ease-out'
            }}>
              Technology
            </h1>
            <p style={{
              fontSize: '24px',
              marginBottom: '48px',
              maxWidth: '600px',
              margin: '0 auto 48px',
              lineHeight: 1.6,
              opacity: 0.9,
              position: 'relative',
              zIndex: 1,
              animation: 'fadeInUp 1s ease-out 0.3s both'
            }}>
              Where precision meets durability.
            </p>
          </div>

          {/* Technology Sections */}
          {technologies.map((tech, index) => (
                <div 
                  key={tech.id}
                  ref={el => sectionRefs.current[index] = el}
                  data-section={tech.id}
                  className="tech-section"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: index === technologies.length - 1 ? '60px' : '120px',
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                    gap: '80px',
                    opacity: visibleSections.has(tech.id) ? 1 : 0,
                    transform: visibleSections.has(tech.id) ? 'translateY(0)' : 'translateY(60px)',
                    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transitionDelay: '0.2s'
                  }}
                >
                  {(tech.id === 'triple-ply' || tech.id === 'frame-walking' || tech.id === 'ultra-short-velvet' || tech.id === 'merino-wool') ? (
                    <div style={{
                      flex: '0 0 auto',
                      opacity: visibleSections.has(tech.id) ? 1 : 0,
                      transform: visibleSections.has(tech.id) ? 'translateY(0)' : 'translateY(60px)',
                      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transitionDelay: `${0.4 + index * 0.1}s`
                    }}>
                      {tech.icon}
                    </div>
                  ) : (
                    <div 
                      style={{
                        flex: '0 0 420px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '24px',
                        padding: '40px',
                        boxShadow: '0 20px 40px rgba(10, 101, 163, 0.1)',
                        border: '1px solid rgba(10, 101, 163, 0.1)',
                        opacity: visibleSections.has(tech.id) ? 1 : 0,
                        transform: visibleSections.has(tech.id) 
                          ? (index === 0 ? 'translateY(0)' : 'translateX(0) scale(1) rotate(0deg)')
                          : (index === 0 ? 'translateY(60px)' : `translateX(${index % 2 === 0 ? '-100px' : '100px'}) scale(0.8) rotate(${index % 2 === 0 ? '-5deg' : '5deg'})`),
                        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        transitionDelay: index === 0 ? '0.1s' : `${0.4 + index * 0.1}s`,
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          transform: visibleSections.has(tech.id) ? 'scale(1)' : (index === 0 ? 'scale(0.9)' : 'scale(0.5)'),
                          transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          transitionDelay: index === 0 ? '0.2s' : `${0.6 + index * 0.1}s`
                        }}>
                          {tech.icon}
                        </div>
                      </div>
                    )
                  }
                  
                  <div className="tech-content" style={{ flex: 1, maxWidth: '600px' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <span style={{
                        background: 'linear-gradient(135deg, #0A65A3, #1976D2)',
                        color: 'white',
                        padding: '6px 16px',
                        borderRadius: '16px',
                        fontSize: '14px',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {tech.subtitle}
                      </span>
                      {tech.scope && (
                        <span style={{
                          background: '#FFD700',
                          color: '#0A0A0A',
                          padding: '6px 16px',
                          borderRadius: '16px',
                          fontSize: '14px',
                          fontWeight: 500,
                          marginLeft: '12px'
                        }}>
                          {tech.scope}
                        </span>
                      )}
                    </div>
                    
                    <h2 style={{
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#0A0A0A',
                      marginBottom: '24px',
                      lineHeight: 1.2
                    }}>
                      {tech.title}
                    </h2>
                    
                    <p style={{
                      fontSize: '18px',
                      color: '#666',
                      lineHeight: 1.6,
                      marginBottom: '32px'
                    }}>
                      {tech.description}
                    </p>
                    
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '12px',
                      marginTop: '8px',
                      justifyContent: 'flex-start',
                      alignItems: 'center'
                    }}>
                      {tech.highlights.map((highlight, idx) => (
                        <span 
                          key={idx} 
                          className="highlight-tag"
                          style={{
                            background: 'linear-gradient(135deg, #0A65A3, #1976D2)',
                            color: 'white',
                            padding: '10px 18px',
                            borderRadius: '25px',
                            fontSize: '15px',
                            fontWeight: '600',
                            display: 'inline-block',
                            boxShadow: '0 4px 12px rgba(10, 101, 163, 0.25)',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

          {/* Bottom spacing */}
          <div style={{ height: '80px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Technology;
