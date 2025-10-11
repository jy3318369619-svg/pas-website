import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BaekelandOrangeSeriesDetail = () => {
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
              border: '1px solid #ff6b00',
              color: '#ff6b00',
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
              src="/images/orange.png" 
              alt="Baekeland Orange Series"
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
                Baekeland Orange Series
              </h1>
              
              <p style={{
                fontSize: '1.3rem',
                color: '#ff6b00',
                marginBottom: '10px',
                fontWeight: 600
              }}>
                TV POOL BALL
              </p>

              <p style={{
                fontSize: '1.1rem',
                color: '#86868b',
                marginBottom: '30px',
                fontStyle: 'italic'
              }}>
                A Tribute to the Classics
              </p>


              <div className="button-group">
                <button 
                  onClick={() => navigate('/dealers')}
                  style={{
                    background: '#ff6b00',
                    color: '#ffffff',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(255, 107, 0, 0.3)'
                  }}
                >
                  Search Dealers
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  style={{
                    background: 'transparent',
                    color: '#ff6b00',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    border: '2px solid #ff6b00',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Specifications Section */}
          <div style={{
            marginTop: '80px',
            background: '#ffffff',
            padding: '60px 40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e5e7eb'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              Specifications
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {[
                { label: 'Product Size', value: '57.2 mm' },
                { label: 'Product Weight', value: '169 g ± 1 g' },
                { label: 'Product Density', value: '1.73' },
                { label: 'Product Roundness', value: '< 0.03 mm' },
                { label: 'Product Hardness', value: '> 40 Rockwell' },
                { label: 'Material', value: 'Phenolic Resin' }
              ].map((spec, index) => (
                <div key={index} style={{
                  padding: '24px',
                  background: '#fff5f0',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '1px solid #fed7aa'
                }}>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#6e6e73',
                    marginBottom: '8px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {spec.label}
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    color: '#1d1d1f',
                    fontWeight: 700,
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Set Includes Section */}
            <div style={{
              marginTop: '32px',
              padding: '32px',
              background: 'linear-gradient(135deg, #fff5f0 0%, #fed7aa 100%)',
              borderRadius: '16px',
              textAlign: 'center',
              border: '2px solid #ff6b00'
            }}>
              <div style={{
                fontSize: '1rem',
                color: '#6e6e73',
                marginBottom: '12px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Set Includes
              </div>
              <div style={{
                fontSize: '1.3rem',
                color: '#1d1d1f',
                fontWeight: 700,
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                1 cue ball, 7 striped balls, 8 solid balls
              </div>
            </div>
          </div>

          {/* Brand Introduction Section */}
          <div style={{
            marginTop: '60px',
            background: 'linear-gradient(135deg, #fff5f0 0%, #fed7aa 100%)',
            padding: '60px 50px',
            borderRadius: '24px',
            border: '2px solid #ff6b00',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative Elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: '#ff6b00',
              borderRadius: '2px'
            }} />
            
            <h2 style={{
              fontSize: '2.4rem',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '16px',
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              letterSpacing: '-0.02em'
            }}>
              The Baekeland Legacy
            </h2>
            
            {/* Decorative Divider */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              gap: '12px'
            }}>
              <div style={{ width: '40px', height: '1px', background: '#ff6b00', opacity: 0.6 }} />
              <div style={{ 
                width: '8px', 
                height: '8px', 
                background: '#ff6b00', 
                borderRadius: '50%',
                opacity: 0.8
              }} />
              <div style={{ width: '40px', height: '1px', background: '#ff6b00', opacity: 0.6 }} />
            </div>
            
            <div style={{
              maxWidth: '850px',
              margin: '0 auto'
            }}>
              <div style={{
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: '#1d1d1f',
                marginBottom: '32px',
                fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 400
              }}>
                Baekeland Crystal Balls are named after{' '}
                <a 
                  href="https://en.wikipedia.org/wiki/Leo_Baekeland" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    fontWeight: 700, 
                    color: '#ff6b00', 
                    textDecoration: 'none',
                    borderBottom: '2px solid #ff6b00',
                    transition: 'all 0.3s ease',
                    paddingBottom: '2px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#e55a00';
                    e.target.style.borderBottomColor = '#e55a00';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#ff6b00';
                    e.target.style.borderBottomColor = '#ff6b00';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >Leo Hendrik Baekeland</a>,{' '}
                the inventor of phenolic resin.
              </div>
              
              <div style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#4a4a4a',
                marginBottom: '32px',
                fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                fontStyle: 'italic'
              }}>
                We pay tribute to his creation of the world's first phenolic resin in 1910.
              </div>
              
              <div style={{
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: '#1d1d1f',
                fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 500,
                padding: '24px 32px',
                background: 'rgba(255, 255, 255, 0.7)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 107, 0, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                Our balls not only inherit the legacy of tradition but also symbolize
                <br />
                <span style={{ 
                  fontWeight: 700, 
                  color: '#ff6b00',
                  fontSize: '1.1em'
                }}>innovation and exceptional quality</span>.
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div style={{
            marginTop: '60px',
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
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {[
                {
                  title: 'Surface Wear-Resistant and Beautiful',
                  description: 'A special surface vitrification process ensures that the cue ball remains bright and shiny even after prolonged use, maintaining its smooth texture and aesthetic appeal.'
                },
                {
                  title: 'Responsive and Highly Elastic',
                  description: 'Quickly rebounds and returns to its original shape upon impact, enhancing game fluidity and the precision of cue control.'
                },
                {
                  title: 'Stable Center of Gravity',
                  description: 'A precisely balanced core ensures superior stability and control during every shot, making each strike smoother and more accurate.'
                },
                {
                  title: 'Crisp and Pleasant Sound',
                  description: 'Each hit produces a clean, satisfying sound, enhancing the sensory experience and overall enjoyment of professional play.'
                },
                {
                  title: 'Durable, Resilient, and Tough',
                  description: 'Made from high-purity phenolic resin, this cue ball offers exceptional durability, resilience, and toughness to withstand continuous impact.'
                }
              ].map((feature, index) => (
                <div key={index} style={{
                  padding: '32px',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  borderLeft: '4px solid #ff6b00',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    color: '#1d1d1f',
                    marginBottom: '14px',
                    fontWeight: 700,
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

          {/* Core Technologies Section */}
          <div style={{
            marginTop: '60px',
            background: 'linear-gradient(135deg, #fff5f0 0%, #fed7aa 100%)',
            padding: '60px 40px',
            borderRadius: '20px',
            border: '1px solid #ff6b00'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              Core Technologies
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{
                padding: '40px',
                background: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#ff6b00',
                  marginBottom: '20px',
                  fontWeight: 700,
                  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  Innovative Composition – Wear and Impact Resistant
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#1d1d1f',
                  lineHeight: 1.7,
                  marginBottom: '12px'
                }}>
                  The phenolic resin formula is extremely hard, capable of withstanding repeated 
                  powerful impacts and friction between balls and cloth.
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: '#1d1d1f',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  It resists cracking, chipping, or denting, ensuring a remarkably long service 
                  life — a premium phenolic resin cue ball can last for decades.
                </p>
              </div>

              <div style={{
                padding: '40px',
                background: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#ff6b00',
                  marginBottom: '20px',
                  fontWeight: 700,
                  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  Exceptional Stability and Consistency
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#1d1d1f',
                  lineHeight: 1.7,
                  marginBottom: '12px'
                }}>
                  Uniform material density guarantees consistent weight, balance, and rolling 
                  performance for every ball.
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: '#1d1d1f',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  Stable under changing temperature and humidity conditions, it maintains reliable 
                  performance in all environments.
                </p>
              </div>

              <div style={{
                padding: '40px',
                background: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#ff6b00',
                  marginBottom: '20px',
                  fontWeight: 700,
                  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  Fully Intelligent Production Line
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#1d1d1f',
                  lineHeight: 1.7,
                  marginBottom: '12px'
                }}>
                  A fully automated, precision-controlled manufacturing line ensures perfect 
                  roundness and minimal dimensional tolerance.
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: '#1d1d1f',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  Each ball's numbers and color marks are permanently embedded, clear, and durable 
                  for long-term professional use.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BaekelandOrangeSeriesDetail;

