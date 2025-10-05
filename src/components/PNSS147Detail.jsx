import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PNSS147Detail = () => {
  const navigate = useNavigate();

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
            <img 
              src="/images/PNS S147.png" 
              alt="PNS S147"
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
                PNS S147
              </h1>
              
              <p style={{
                fontSize: '1.3rem',
                color: '#007BFF',
                marginBottom: '30px',
                fontWeight: 600
              }}>
                Snooker Speed Edition
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
                  Engineered to meet the snooker player's pursuit of ultimate speed. Enhanced through multiple rounds of steam pressing, resulting in a 15% reduction in thickness. Delivers smooth and steady motion with light strokes, lightning-fast response on power shots, strong end speed, and pinpoint accuracy.
                </p>
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
                { label: 'Weight', value: '800g/m (28.2 oz/m)' },
                { label: 'Composition', value: '90% Wool\n10% Nylon' },
                { label: 'Width', value: '195cm' }
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
                  3.75m bed cloth + 0.15m cushion cloth × 6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PNSS147Detail;
