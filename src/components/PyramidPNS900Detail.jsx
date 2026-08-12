import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PyramidPNS900Detail = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    { name: 'Yellow Green', value: '#4A8B6F', image: '/images/pns-900-pyramid.png' }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const specs = [
    { label: 'Weight', value: '755g/m (26.6oz/m)' },
    { label: 'Composition', value: '80% Wool\n20% Nylon' },
    { label: 'Width', value: '1.95m' },
    { label: 'Table Size', value: '3.85m bed cloth + 0.17m cushion cloth × 6' }
  ];

  const keyFeatures = [
    'Professional-grade Pyramid billiard cloth',
    'Premium 80% wool construction',
    'Fast, smooth and highly consistent ball roll',
    'Excellent precision and predictable ball response',
    'High durability and dimensional stability',
    'Designed for professional clubs, tournaments and elite players'
  ];

  return (
    <div className="product-detail-page" style={{ minHeight: '100vh', background: '#ffffff', padding: '104px 0 64px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <button
          onClick={() => navigate('/products')}
          style={{
            background: 'transparent',
            border: '1px solid #2E7D32',
            color: '#2E7D32',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            marginBottom: '32px'
          }}
        >
          ← Back to Products
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <img src={colors[selectedColor].image} alt="Pyramid PNS 900" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />

          <div>
            <p style={{ fontSize: '1rem', color: '#2E7D32', marginBottom: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Pyramid Series
            </p>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '20px', fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
              PNS 900
            </h1>
            <p style={{ fontSize: '1.3rem', color: '#2E7D32', marginBottom: '30px', fontWeight: 600 }}>
              Professional Grade
            </p>
            <p style={{ fontSize: '1.1rem', color: '#1d1d1f', lineHeight: 1.6, marginBottom: '32px' }}>
              PNS 900 is the professional-grade Pyramid cloth in the range, developed for high-level competition and demanding professional players. With 80% wool, it provides a dense, smooth and highly consistent playing surface that delivers excellent ball speed, precise roll and predictable response.
              <br /><br />
              The 20% nylon content enhances strength and wear resistance while maintaining the premium playing characteristics expected from professional Pyramid cloth. PNS 900 is designed for professional clubs, tournaments and players who require maximum consistency and performance.
            </p>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '14px' }}>Key Features</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#1d1d1f', lineHeight: 1.7, fontSize: '1rem' }}>
                {keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '16px' }}>
                Available Colors
              </h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(index)}
                    title={color.name}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: color.value,
                      border: selectedColor === index ? '3px solid #2E7D32' : '2px solid #e0e0e0',
                      cursor: 'pointer',
                      boxShadow: selectedColor === index ? '0 4px 16px rgba(46, 125, 50, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                      transform: selectedColor === index ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#6e6e73', marginTop: '8px', fontStyle: 'italic' }}>
                Selected: {colors[selectedColor].name}
              </p>
            </div>

            <button
              onClick={() => navigate('/dealers')}
              style={{
                background: '#2E7D32',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(46, 125, 50, 0.3)'
              }}
            >
              Search Distributors
            </button>
          </div>
        </div>

        <div style={{ marginTop: '64px', background: '#ffffff', padding: '60px 40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '32px', textAlign: 'center' }}>
            Technical Specifications
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {specs.map((spec) => (
              <div key={spec.label} style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#6e6e73', marginBottom: '8px' }}>{spec.label}</div>
                <div style={{ fontSize: '1.1rem', color: '#1d1d1f', fontWeight: 600, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PyramidPNS900Detail;
