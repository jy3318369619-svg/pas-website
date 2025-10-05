import React from 'react';

const Home = () => {
  const heroStyle = {
    height: '100vh',
    background: 'linear-gradient(135deg, #0A0F1C, #000000)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    position: 'relative'
  };

  const contentStyle = {
    maxWidth: '800px',
    padding: '0 40px'
  };

  const titleStyle = {
    fontSize: '4em',
    fontWeight: 700,
    marginBottom: '24px',
    letterSpacing: '-0.02em',
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
  };

  const subtitleStyle = {
    fontSize: '1.5em',
    marginBottom: '40px',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.6
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #007AFF, #00D4FF)',
    border: 'none',
    borderRadius: '50px',
    padding: '16px 32px',
    color: 'white',
    fontSize: '1.1em',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '0 10px'
  };

  return (
    <section style={heroStyle}>
      <div style={contentStyle}>
        <div style={{ marginBottom: '20px' }}>
          <span style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9em',
            fontWeight: 500,
            letterSpacing: '0.05em'
          }}>
            PREMIUM QUALITY
          </span>
        </div>
        
        <h1 style={titleStyle}>The Choice of Champions</h1>
        
        <p style={subtitleStyle}>
          PNS Billiard Cloth — precision-engineered and trusted by world champions. Built for speed, control, and consistency on every table.
        </p>
        
        <div>
          <button style={buttonStyle}>
            Our Products
          </button>
          <button style={{
            ...buttonStyle,
            background: 'transparent',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
