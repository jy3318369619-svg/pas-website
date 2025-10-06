import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Images moved to public/images folder - using direct paths

const About = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
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

  const pageStyle = {
    background: '#ffffff',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 10,
    overflow: 'hidden'
  };

  // Hero Section
  const heroStyle = {
    backgroundImage: `url('/images/about%20us.jpg')`,
    backgroundSize: '110%',
    backgroundPosition: 'center 45%',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    padding: '160px 0 180px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const heroOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)',
    zIndex: 1
  };

  const heroContentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    textAlign: 'center',
    transform: 'translateY(-30px)'
  };

  const heroTitleStyle = {
    fontSize: '88px',
    fontWeight: 800,
    marginBottom: '40px',
    letterSpacing: '-0.04em',
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #e0e0e0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'fadeInUp 1.2s ease-out',
    textShadow: '0 4px 20px rgba(255,255,255,0.1)',
    lineHeight: 1.1
  };

  const heroSubtitleStyle = {
    fontSize: '26px',
    opacity: 0.95,
    margin: '-30px auto 0 auto',
    lineHeight: 1.7,
    fontWeight: 400,
    animation: 'fadeInUp 1.2s ease-out 0.4s both',
    color: '#f5f5f5',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
    letterSpacing: '0.01em',
    whiteSpace: 'nowrap'
  };

  // Content Section - Professional Textile Industry Style
  const contentSectionStyle = {
    padding: '100px 0',
    background: '#f8f9fa',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px'
  };

  const sectionTitleStyle = {
    fontSize: '56px',
    fontWeight: 600,
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '24px',
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: '-0.01em',
    position: 'relative'
  };

  const sectionSubtitleStyle = {
    fontSize: '19px',
    color: '#5a6c7d',
    textAlign: 'center',
    marginBottom: '70px',
    margin: '0 auto 70px',
    fontWeight: 400,
    maxWidth: '700px',
    lineHeight: 1.6
  };

  const timelineItemStyle = (index, isVisible) => ({
    display: 'flex',
    alignItems: 'stretch',
    gap: '60px',
    marginBottom: '80px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transitionDelay: `${index * 0.15}s`,
    background: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(44, 62, 80, 0.08)'
  });

  const timelineContentStyle = {
    flex: '1',
    padding: '0',
    background: 'transparent',
    transition: 'all 0.3s ease'
  };

  const timelineContentHoverStyle = {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
  };

  const timelineYearStyle = {
    fontSize: '29px',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '16px',
    fontFamily: "'SF Pro Display', sans-serif",
    letterSpacing: '-0.01em',
    borderLeft: '4px solid #3498db',
    paddingLeft: '20px'
  };

  const timelineTextStyle = {
    fontSize: '17px',
    color: '#34495e',
    lineHeight: 1.7,
    marginBottom: '20px',
    fontWeight: 400,
    paddingLeft: '24px'
  };

  const quoteStyle = {
    background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(0, 122, 255, 0.05) 100%)',
    padding: '32px',
    borderRadius: '16px',
    borderLeft: '4px solid #007AFF',
    fontStyle: 'italic',
    fontSize: '18px',
    color: '#1a1a1a',
    lineHeight: 1.6,
    margin: '30px 0',
    position: 'relative',
    overflow: 'hidden'
  };

  const imageContainerStyle = (isHovered) => ({
    width: '100%',
    height: '400px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '64px',
    color: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    boxShadow: isHovered 
      ? '0 25px 50px rgba(0, 0, 0, 0.25)' 
      : '0 10px 30px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer'
  });

  const [hoveredItems, setHoveredItems] = useState({});
  const [hoveredImages, setHoveredImages] = useState({});

  const handleItemHover = (index, isHovered) => {
    setHoveredItems(prev => ({ ...prev, [index]: isHovered }));
  };

  const handleImageHover = (index, isHovered) => {
    setHoveredImages(prev => ({ ...prev, [index]: isHovered }));
  };

  // CSS animations
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

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .floating-element {
      animation: float 3s ease-in-out infinite;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div style={pageStyle}>
        {/* Hero Section */}
        <div id="hero" style={heroStyle}>
          <div style={heroOverlayStyle}></div>
          <div style={heroContentStyle}>
            <h1 style={heroTitleStyle}>About Us</h1>
            <p style={heroSubtitleStyle}>Crafting world-class billiard cloths with precision, innovation, and heritage.</p>
          </div>
        </div>

        {/* The Origin of Innovation */}
        <div style={contentSectionStyle}>
          <div style={containerStyle}>

            {/* 1995 Timeline */}
            <div 
              ref={el => sectionRefs.current[0] = el}
              data-section="timeline-1"
              style={timelineItemStyle(0, visibleSections.has('timeline-1'))}
              className="timeline-item"
            >
              <div style={timelineContentStyle}>
                <div style={timelineYearStyle}>1995: Foundation & Vision</div>
                <p style={timelineTextStyle}>
                  Founded in 1995 and headquartered in Changzhou, Jiangsu Province, PNS Billiard Cloth holds a leading position in the field of premium billiard cloth manufacturing. Over the past decades, we have grown into a trusted name supplying billiard cloth for pool, snooker, carom, and pyramid, along with a comprehensive range of related products.
                </p>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.05))',
                  borderRadius: '12px',
                  padding: '20px',
                  marginTop: '20px',
                  marginLeft: '24px',
                  borderLeft: '3px solid #3498db'
                }}>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#2c3e50',
                    marginBottom: '8px'
                  }}>
                    Manufacturing Excellence
                  </h4>
                  <p style={{
                    fontSize: '15px',
                    color: '#5a6c7d',
                    margin: 0,
                    lineHeight: 1.5
                  }}>
                    Located in China's textile manufacturing hub, our facility combines traditional craftsmanship with modern technology.
                  </p>
                </div>
              </div>
              <div style={{
                flex: '0 0 400px',
                position: 'relative'
              }}>
                <img 
                  src="/images/1995 history_副本.jpg" 
                  alt="PNS History 1995" 
                  style={{ 
                    width: '100%',
                    height: '320px', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                    filter: 'drop-shadow(0 8px 25px rgba(44, 62, 80, 0.12))',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.filter = 'drop-shadow(0 12px 35px rgba(44, 62, 80, 0.18))';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.filter = 'drop-shadow(0 8px 25px rgba(44, 62, 80, 0.12))';
                  }}
                />
              </div>
            </div>

            {/* Core Philosophy Section */}
            <div 
              ref={el => sectionRefs.current[3] = el}
              data-section="core-philosophy"
              style={timelineItemStyle(1, visibleSections.has('core-philosophy'))}
              className="timeline-item"
            >
              <div style={{
                flex: '0 0 400px',
                position: 'relative'
              }}>
                <img 
                  src="/images/ Manufacturing Philosophy.jpg" 
                  alt="PNS Manufacturing Philosophy" 
                  style={{ 
                    width: '100%',
                    height: '320px', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                    filter: 'drop-shadow(0 8px 25px rgba(44, 62, 80, 0.12))',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.filter = 'drop-shadow(0 12px 35px rgba(44, 62, 80, 0.18))';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.filter = 'drop-shadow(0 8px 25px rgba(44, 62, 80, 0.12))';
                  }}
                />
              </div>
              
              <div style={timelineContentStyle}>
                <div style={timelineYearStyle}>Our Manufacturing Philosophy</div>
                <p style={timelineTextStyle}>
                  At PNS, we combine craftsmanship, technological expertise, and continuous innovation. Our commitment to independent research and development has allowed us to refine manufacturing techniques, enhance durability, and optimize the playability of our cloth.
                </p>
                
                <button 
                  onClick={() => navigate('/technology')}
                  style={{
                    background: 'linear-gradient(135deg, #3498db, #2980b9)',
                    color: '#ffffff',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '24px',
                    marginLeft: '24px',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    boxShadow: '0 8px 25px rgba(52, 152, 219, 0.3)',
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: '0.01em'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 12px 35px rgba(52, 152, 219, 0.4)';
                    e.target.style.background = 'linear-gradient(135deg, #2980b9, #1f6391)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.3)';
                    e.target.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
                  }}
                >
                  Explore Our Technology →
                </button>
              </div>
            </div>

            {/* Professional Excellence */}
            <div 
              ref={el => sectionRefs.current[1] = el}
              data-section="timeline-2"
              style={timelineItemStyle(2, visibleSections.has('timeline-2'))}
              className="timeline-item"
            >
              <div style={timelineContentStyle}>
                <div style={timelineYearStyle}>Excellence in Every Thread</div>
                <p style={timelineTextStyle}>
                  We work closely with leading textile engineers and industry professionals to ensure that our products deliver consistency, speed, and reliability. These qualities have made PNS cloth widely adopted in tournaments and clubs across multiple regions, where players—from amateurs to professionals—experience dependable performance on the table.
                </p>
                <p style={timelineTextStyle}>
                  Through rigorous internal quality management, we aim to meet the expectations of international markets and serve both professional tournaments and billiard clubs.
                </p>
              </div>
              
              <div style={{
                flex: '0 0 400px',
                position: 'relative'
              }}>
                <img 
                  src="/images/专家_副本2.jpg" 
                  alt="PNS Expert" 
                  style={{ 
                    width: '100%',
                    height: '320px', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                    filter: 'drop-shadow(0 8px 25px rgba(44, 62, 80, 0.12))',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.filter = 'drop-shadow(0 12px 35px rgba(44, 62, 80, 0.18))';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.filter = 'drop-shadow(0 8px 25px rgba(44, 62, 80, 0.12))';
                  }}
                />
              </div>
            </div>

            {/* Global Impact */}
            <div 
              ref={el => sectionRefs.current[2] = el}
              data-section="timeline-3"
              style={timelineItemStyle(3, visibleSections.has('timeline-3'))}
              className="timeline-item"
            >
              <div style={timelineContentStyle}>
                <div style={timelineYearStyle}>Global Impact & Future Vision</div>
                <p style={timelineTextStyle}>
                  In addition to product excellence, PNS emphasizes global collaboration and market adaptability. Our cloth has been used in a variety of events, contributing to the promotion of cue sports and supporting the development of billiards communities worldwide.
                </p>
                <p style={timelineTextStyle}>
                  As of 2025, PNS continues to build on its reputation for reliability, performance, and value. By balancing innovation with tradition, we remain dedicated to strengthening our presence in the global billiards industry and contributing to the sport's future growth.
                </p>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
