import React, { useState, useRef, useEffect } from 'react';

const WhyNotPureWool = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 40px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: 700,
    color: '#1d1d1f',
    textAlign: 'center',
    marginBottom: '60px',
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: '-0.02em'
  };

  const contentBoxStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    borderRadius: '28px',
    padding: '50px 60px',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#1d1d1f',
    marginBottom: '28px',
    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
  };

  const listItemStyle = {
    fontSize: '17px',
    lineHeight: '1.7',
    color: '#1d1d1f',
    marginBottom: '14px',
    paddingLeft: '28px',
    position: 'relative',
    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
  };

  const bulletStyle = {
    position: 'absolute',
    left: '0',
    top: '9px',
    width: '7px',
    height: '7px',
    background: '#007AFF',
    borderRadius: '50%'
  };

  const strongStyle = {
    fontWeight: 600,
    color: '#1d1d1f'
  };

  const highlightTextStyle = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#1d1d1f',
    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
    marginBottom: '28px'
  };

  const finalNoteStyle = {
    fontSize: '19px',
    lineHeight: '1.8',
    color: '#1d1d1f',
    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 500,
    textAlign: 'center',
    marginTop: '40px',
    padding: '30px',
    background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.05), rgba(0, 212, 255, 0.05))',
    borderRadius: '20px',
    border: '2px solid rgba(0, 122, 255, 0.1)'
  };

  return (
    <div ref={sectionRef} style={containerStyle}>
      <h2 style={titleStyle}>Why Not 100% Wool?</h2>

      <div style={contentBoxStyle}>
        <p style={paragraphStyle}>
          At PNS, every cloth composition is the result of years of refinement and continuous 
          feedback from players, club owners, and table fitters. We've carefully balanced the 
          ratio of wool and nylon to meet all three perspectives:
        </p>

        <div style={{ marginBottom: '28px' }}>
          <div style={listItemStyle}>
            <div style={bulletStyle}></div>
            <span style={strongStyle}>Players</span> demand fast, smooth motion and consistent end speed.
          </div>
          <div style={listItemStyle}>
            <div style={bulletStyle}></div>
            <span style={strongStyle}>Club owners</span> seek longer cloth lifespan to reduce operational costs.
          </div>
          <div style={listItemStyle}>
            <div style={bulletStyle}></div>
            <span style={strongStyle}>Fitters</span> require softness and flexibility for easier installation.
          </div>
        </div>

        <p style={paragraphStyle}>
          Through countless trials, we found that a touch of nylon reinforcement not only enhances 
          durability and dimensional stability but also preserves the cloth's smooth feel and precision 
          performance.
        </p>

        <p style={paragraphStyle}>
          Our final wool-to-nylon ratio represents a deliberate balance — <span style={strongStyle}>engineered 
          for performance, endurance, and craftsmanship.</span>
        </p>

        <p style={highlightTextStyle}>
          From the surface, many of our snooker cloths contain 80% or 90% wool. However, <span style={strongStyle}>the 
          quality of wool differs among models</span> — higher-end editions are woven from finer, 
          higher-count Merino wool fibers, providing superior smoothness, consistency, and precision.
        </p>

        <div style={finalNoteStyle}>
          A truly great product is not defined by the quantity of materials alone, but by the 
          <span style={strongStyle}> technology, craftsmanship, and relentless pursuit of optimal performance</span> behind it.
        </div>
      </div>
    </div>
  );
};

export default WhyNotPureWool;

