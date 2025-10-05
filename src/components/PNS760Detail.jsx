import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PNS760Detail = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    { name: 'Electric Blue', value: '#003366', image: '/images/pns 760-electric blue.png' },
    { name: 'Powder Blue', value: '#4682B4', image: '/images/pns 760-power blue.png' },
    { name: 'Yellow Green', value: '#4A8B6F', image: '/images/pns 760-yellow green.png' },
    { name: 'Iron Grey', value: '#708090', image: '/images/pns 760-iron grey.png' }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
    
    .specs-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1.5fr;
      gap: 30px;
    }
    
    @media (max-width: 768px) {
      .product-detail-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .specs-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }
    
    @media (max-width: 480px) {
      .button-group {
        flex-direction: column;
      }
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
              border: '1px solid #1565C0',
              color: '#1565C0',
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
            <img 
              src={colors[selectedColor].image} 
              alt="PNS 760"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
            />

            {/* Product Details */}
            <div>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '20px',
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                PNS 760
              </h1>
              
              <p style={{
                fontSize: '1.3rem',
                color: '#1565C0',
                marginBottom: '30px',
                fontWeight: 600
              }}>
                Basic Model
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
                  The smart start for clubs and players. This cloth offers exceptional durability and reliable performance for recreational and competitive pool play.
                </p>
              </div>

              {/* Color Selection */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  marginBottom: '16px'
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
                        backgroundColor: color.value,
                        border: selectedColor === index ? '3px solid #1565C0' : '2px solid #e0e0e0',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: selectedColor === index 
                          ? '0 4px 16px rgba(21, 101, 192, 0.3)' 
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

              <div className="button-group">
                <button 
                  onClick={() => navigate('/dealers')}
                  style={{
                    background: '#1565C0',
                    color: '#ffffff',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(21, 101, 192, 0.3)'
                  }}
                >
                  Search Dealers
                </button>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
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
              Technical Specifications
            </h2>
            
            <div className="specs-grid">
              {[
                { label: 'Weight', value: '600g/m (21.2 oz/m)' },
                { label: 'Composition', value: '60% Wool\n40% Nylon' },
                { label: 'Width', value: '1.55m' }
              ].map((spec, index) => (
                <div key={index} style={{
                  padding: '20px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#6e6e73',
                    marginBottom: '8px'
                  }}>
                    {spec.label}
                  </div>
                  <div style={{
                    fontSize: '1.1rem',
                    color: '#1d1d1f',
                    fontWeight: 600,
                    whiteSpace: 'pre-line',
                    lineHeight: 1.4
                  }}>
                    {spec.value}
                  </div>
                </div>
              ))}
              
              {/* Table Size - wider box */}
              <div style={{
                padding: '20px',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                textAlign: 'center',
                gridColumn: '1 / -1'
              }}>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#6e6e73',
                  marginBottom: '8px'
                }}>
                  Table Size
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#1d1d1f',
                  fontWeight: 600,
                  whiteSpace: 'pre-line',
                  lineHeight: 1.4
                }}>
                  2.78m bed cloth + 0.15m cushion cloth × 6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PNS760Detail;
