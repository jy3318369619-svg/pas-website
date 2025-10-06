import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PNSGlovesDetail = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = React.useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 定义4种颜色
  const colors = [
    { name: 'Black', value: '#1a1a1a', hex: '#000000', image: '/images/pns gloves black.png' },
    { name: 'Grey', value: '#808080', hex: '#808080', image: '/images/pns gloves grey.png' },
    { name: 'Red', value: '#dc2626', hex: '#dc2626', image: '/images/pns gloves red.png' },
    { name: 'Blue', value: '#2563eb', hex: '#2563eb', image: '/images/pns gloves blue.png' }
  ];

  const responsiveStyles = `
    .product-detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }
    
    .button-group {
      display: flex;
      gap: 16px;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <div style={{
        minHeight: '100vh',
        background: '#ffffff',
        padding: '120px 0 80px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          {/* Back Button */}
          <button 
            onClick={() => navigate('/products')}
            style={{
              background: 'transparent',
              border: '1px solid #007BFF',
              color: '#007BFF',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              marginBottom: '40px',
              transition: 'all 0.3s ease'
            }}
          >
            ← Back to Products
          </button>

          <div className="product-detail-grid">
            {/* Product Image */}
            <div style={{
              width: '100%',
              aspectRatio: '1/1',
              background: '#ffffff',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #e5e7eb',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
            }}>
              <img 
                src={colors[selectedColor].image}
                alt={`PNS Gloves - ${colors[selectedColor].name}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '40px',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '20px',
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                PNS Gloves
              </h1>
              
              <p style={{
                fontSize: '1.3rem',
                color: '#007BFF',
                marginBottom: '30px',
                fontWeight: 600
              }}>
                Professional Model
              </p>

              <div style={{
                marginBottom: '40px'
              }}>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#1d1d1f',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  Crafted with premium Lycra fabric for a skin-like fit that moves with you. The seamless design and 360° airflow system keep your hand cool and dry, while anti-slip silicone grip ensures smooth strokes and total control.
                </p>

                {/* Color Selector */}
                <div style={{
                  marginTop: '30px'
                }}>
                  <h3 style={{
                    fontSize: '1rem',
                    color: '#1d1d1f',
                    marginBottom: '16px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Available Colors
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}>
                    {colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          backgroundColor: color.hex,
                          border: selectedColor === index ? '3px solid #007BFF' : '2px solid #e0e0e0',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: selectedColor === index 
                            ? '0 4px 16px rgba(0, 123, 255, 0.3)' 
                            : '0 2px 8px rgba(0, 0, 0, 0.1)',
                          transform: selectedColor === index ? 'scale(1.1)' : 'scale(1)'
                        }}
                        title={color.name}
                      />
                    ))}
                  </div>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#6e6e73',
                    marginTop: '8px',
                    fontStyle: 'italic'
                  }}>
                    Selected: {colors[selectedColor].name}
                  </p>
                </div>
              </div>

              <div className="button-group">
                <button 
                  onClick={() => navigate('/dealers')}
                  style={{
                    background: '#007BFF',
                    color: '#ffffff',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(0, 123, 255, 0.3)'
                  }}
                >
                  Search Dealers
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div style={{
            marginTop: '80px',
            background: '#ffffff',
            padding: '60px 40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              Key Features
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}
            className="features-grid">
              {[
                {
                  title: 'Premium',
                  description: 'Lycra fabric support, skin-like fit, sweat-wicking, precision guaranteed.'
                },
                {
                  title: 'Seamless',
                  description: 'Ultimate conformity, feels weightless, comfort that moves with you.'
                },
                {
                  title: 'Airflow',
                  description: '360° ventilation system, keeps your palm dry and fresh.'
                },
                {
                  title: 'Stability',
                  description: 'Anti-slip silicone, smooth stroke, championship-level control.'
                }
              ].map((feature, index) => (
                <div key={index} style={{
                  padding: '32px',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  borderTop: '4px solid #007BFF',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #007BFF10 0%, transparent 70%)',
                    borderRadius: '0 0 0 80px'
                  }} />
                  <h3 style={{
                    fontSize: '1.3rem',
                    color: '#1d1d1f',
                    marginBottom: '14px',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#6e6e73',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Section */}
          <div style={{
            marginTop: '60px',
            padding: '40px',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: '20px',
            border: '1px solid #dee2e6'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#1d1d1f',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Why Choose PNS Gloves?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: '#495057',
              lineHeight: 1.8,
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              PNS Gloves are engineered to give you the competitive edge. Whether you're practicing or competing, our gloves provide the consistency and reliability that serious players demand. Experience the difference that professional-grade accessories can make in your game.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PNSGlovesDetail;
