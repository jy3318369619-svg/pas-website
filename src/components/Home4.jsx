import React, { useState, useEffect, useRef } from 'react';
import Silk from './Silk';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredCards, setHoveredCards] = useState({});
  const [hoveredButtons, setHoveredButtons] = useState({});
  const [activeProductCategory, setActiveProductCategory] = useState('worsted');
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

  const handleButtonHover = (index, isHovered) => {
    setHoveredButtons(prev => ({ ...prev, [index]: isHovered }));
  };

  // 新增：处理产品类别切换
  const handleProductCategoryChange = (category) => {
    setActiveProductCategory(category);
  };

  // 新增：定义不同类别的产品数据
  const productCategories = {
    worsted: [
      {
        icon: '🎱',
        title: 'S147 Tournament',
        description: 'Championship-grade worsted cloth for international tournaments, trusted by world champions.',
        color: '#007AFF',
        gradient: 'linear-gradient(135deg, #007AFF, #00D4FF)'
      },
      {
        icon: '⭐',
        title: '988 Professional',
        description: 'Professional-grade worsted cloth for clubs and serious players, offering exceptional performance.',
        color: '#34C759',
        gradient: 'linear-gradient(135deg, #34C759, #30D158)'
      },
      {
        icon: '🏆',
        title: 'Elite Worsted',
        description: 'Premium worsted cloth series designed for competitive play and professional tournaments.',
        color: '#FF9500',
        gradient: 'linear-gradient(135deg, #FF9500, #FF6B00)'
      }
    ],
    woollen: [
      {
        icon: '🎯',
        title: 'Classic Woollen',
        description: 'Traditional woollen cloth offering excellent durability and consistent play characteristics.',
        color: '#AF52DE',
        gradient: 'linear-gradient(135deg, #AF52DE, #FF2D92)'
      },
      {
        icon: '💎',
        title: 'Premium Woollen',
        description: 'High-quality woollen cloth with superior nap retention and smooth ball roll.',
        color: '#5AC8FA',
        gradient: 'linear-gradient(135deg, #5AC8FA, #007AFF)'
      },
      {
        icon: '🥇',
        title: 'Tournament Woollen',
        description: 'Competition-grade woollen cloth meeting international standards for professional play.',
        color: '#FF3B30',
        gradient: 'linear-gradient(135deg, #FF3B30, #FF9500)'
      }
    ],
    gloves: [
      {
        icon: '🧤',
        title: 'Professional Gloves',
        description: 'High-quality billiard gloves designed for smooth cue action and enhanced grip.',
        color: '#007AFF',
        gradient: 'linear-gradient(135deg, #007AFF, #00D4FF)'
      },
      {
        icon: '✋',
        title: 'Competition Gloves',
        description: 'Tournament-grade gloves used by professional players worldwide for consistent performance.',
        color: '#34C759',
        gradient: 'linear-gradient(135deg, #34C759, #30D158)'
      },
      {
        icon: '👐',
        title: 'Premium Gloves',
        description: 'Luxury billiard gloves with superior comfort and durability for serious players.',
        color: '#FF9500',
        gradient: 'linear-gradient(135deg, #FF9500, #FF6B00)'
      }
    ]
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

    @keyframes countUp {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem !important;
      }
      .section-title {
        font-size: 2rem !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div>
        {/* Hero Section */}
        <section style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0A0F1C, #000000)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Silk Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
            <Silk
              color="#4A90E2"
              speed={3}
              scale={1.5}
              noiseIntensity={2.0}
              rotation={0.1}
            />
          </div>
          
          {/* Gradient Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(10, 15, 28, 0.6), rgba(0, 0, 0, 0.7))',
            zIndex: 2
          }} />
          
          <div style={{
            maxWidth: '1200px',
            width: '100%',
            padding: '0 40px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 3,
            transform: `translateY(${-scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
            <div style={{ 
              marginBottom: '20px',
              animation: 'fadeInUp 1s ease-out'
            }}>
              <span style={{
                color: '#00A3FF',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                PREMIUM QUALITY
              </span>
            </div>
            
            <h1 className="hero-title" style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: 1.2,
              color: '#FFFFFF',
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              animation: 'fadeInUp 1s ease-out 0.3s both'
            }}>
              The Choice of Champions
            </h1>
            
            <div style={{
              marginBottom: '40px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              animation: 'fadeInUp 1s ease-out 0.6s both'
            }}>
              <p style={{
                fontSize: '20px',
                color: '#E0E0E0',
                lineHeight: 1.6,
                fontWeight: 400,
                fontFamily: "'Inter', sans-serif",
                margin: '0 0 16px 0'
              }}>
                <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>PNS Billiard Cloth</strong> — precision-engineered and trusted by world champions.
              </p>
              <p style={{
                fontSize: '18px',
                color: '#B0B0B0',
                lineHeight: 1.5,
                fontWeight: 400,
                fontFamily: "'Inter', sans-serif",
                margin: 0
              }}>
                Built for speed, control, and consistency on every table.
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeInUp 1s ease-out 0.9s both'
            }}>
              <button 
                style={{
                  background: hoveredButtons[0] ? '#0056CC' : '#007BFF',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  fontFamily: "'Montserrat', sans-serif",
                  boxShadow: hoveredButtons[0] 
                    ? '0 8px 25px rgba(0, 123, 255, 0.4)' 
                    : '0 4px 16px rgba(0, 123, 255, 0.3)',
                  transform: hoveredButtons[0] ? 'translateY(-2px)' : 'translateY(0)'
                }}
                onMouseEnter={() => handleButtonHover(0, true)}
                onMouseLeave={() => handleButtonHover(0, false)}
              >
                Products
              </button>
              <button 
                style={{
                  background: hoveredButtons[1] ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: '1.5px solid #FFFFFF',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  fontFamily: "'Montserrat', sans-serif",
                  backdropFilter: 'blur(10px)',
                  transform: hoveredButtons[1] ? 'translateY(-2px)' : 'translateY(0)'
                }}
                onMouseEnter={() => handleButtonHover(1, true)}
                onMouseLeave={() => handleButtonHover(1, false)}
              >
                Why Choose PNS?
              </button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section 
          ref={el => sectionRefs.current[0] = el}
          data-section="about"
          style={{
            background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
            padding: '120px 0',
            opacity: visibleSections.has('about') ? 1 : 0,
            transform: visibleSections.has('about') ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '80px'
            }}>
              <h2 className="section-title" style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                About Us
              </h2>
              <div style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <p style={{
                  fontSize: '1.3em',
                  color: '#1d1d1f',
                  marginBottom: '20px',
                  lineHeight: 1.6,
                  fontWeight: 500
                }}>
                  <strong style={{ color: '#007AFF' }}>PNS Billiard Cloth</strong> was founded in <strong>1995</strong> in China.
                </p>
                <p style={{
                  fontSize: '1.1em',
                  color: '#6e6e73',
                  marginBottom: '16px',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}>
                  As a company with a leading position in high-quality billiard cloth manufacturing, we provide cloth for <em>pool, snooker, carom, and pyramid</em>, along with related products.
                </p>
                <p style={{
                  fontSize: '1.1em',
                  color: '#6e6e73',
                  margin: 0,
                  lineHeight: 1.6,
                  fontWeight: 400
                }}>
                  With <strong style={{ color: '#34C759' }}>innovation and craftsmanship</strong> at our core, PNS delivers reliable performance trusted by clubs and tournaments worldwide.
                </p>
              </div>
            </div>
            
            <div style={{
              textAlign: 'center',
              marginTop: '40px'
            }}>
              <button style={{
                background: '#1d1d1f',
                color: '#FFFFFF',
                padding: '14px 40px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 500,
                border: '2px solid #1d1d1f',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fontFamily: "'Inter', sans-serif",
                boxShadow: '0 4px 20px rgba(29, 29, 31, 0.2)'
              }}>
                More Details
              </button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section 
          ref={el => sectionRefs.current[1] = el}
          data-section="products"
          style={{
            background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
            padding: '120px 0',
            opacity: visibleSections.has('products') ? 1 : 0,
            transform: visibleSections.has('products') ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '80px'
            }}>
              <h2 className="section-title" style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '20px',
                letterSpacing: '-0.02em',
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                Our Products
              </h2>
              <p style={{
                fontSize: '1.2em',
                color: '#6e6e73',
                maxWidth: '600px',
                margin: '0 auto 40px auto',
                lineHeight: 1.5,
                fontWeight: 400
              }}>
                Professional billiard cloths engineered for precision and durability
              </p>
              
              {/* Product Category Buttons */}
              <div style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '40px'
              }}>
                <button 
                  style={{
                    background: activeProductCategory === 'worsted' 
                      ? '#0056CC' 
                      : (hoveredButtons[2] ? '#0056CC' : '#007BFF'),
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: activeProductCategory === 'worsted' ? '2px solid #0056CC' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: (activeProductCategory === 'worsted' || hoveredButtons[2])
                      ? '0 6px 20px rgba(0, 123, 255, 0.4)' 
                      : '0 3px 12px rgba(0, 123, 255, 0.3)',
                    transform: (activeProductCategory === 'worsted' || hoveredButtons[2]) ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                  onClick={() => handleProductCategoryChange('worsted')}
                  onMouseEnter={() => handleButtonHover(2, true)}
                  onMouseLeave={() => handleButtonHover(2, false)}
                >
                  CPBA WORSTED CLOTH
                </button>
                <button 
                  style={{
                    background: activeProductCategory === 'woollen' 
                      ? '#0056CC' 
                      : (hoveredButtons[3] ? '#0056CC' : '#007BFF'),
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: activeProductCategory === 'woollen' ? '2px solid #0056CC' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: (activeProductCategory === 'woollen' || hoveredButtons[3])
                      ? '0 6px 20px rgba(0, 123, 255, 0.4)' 
                      : '0 3px 12px rgba(0, 123, 255, 0.3)',
                    transform: (activeProductCategory === 'woollen' || hoveredButtons[3]) ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                  onClick={() => handleProductCategoryChange('woollen')}
                  onMouseEnter={() => handleButtonHover(3, true)}
                  onMouseLeave={() => handleButtonHover(3, false)}
                >
                  CPBA WOOLLEN CLOTH
                </button>
                <button 
                  style={{
                    background: activeProductCategory === 'gloves' 
                      ? '#0056CC' 
                      : (hoveredButtons[4] ? '#0056CC' : '#007BFF'),
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: activeProductCategory === 'gloves' ? '2px solid #0056CC' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: (activeProductCategory === 'gloves' || hoveredButtons[4])
                      ? '0 6px 20px rgba(0, 123, 255, 0.4)' 
                      : '0 3px 12px rgba(0, 123, 255, 0.3)',
                    transform: (activeProductCategory === 'gloves' || hoveredButtons[4]) ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                  onClick={() => handleProductCategoryChange('gloves')}
                  onMouseEnter={() => handleButtonHover(4, true)}
                  onMouseLeave={() => handleButtonHover(4, false)}
                >
                  CPBA GLOVES
                </button>
              </div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '32px'
            }}>
              {productCategories[activeProductCategory].map((product, index) => (
                <div 
                  key={`${activeProductCategory}-${index}`}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '48px 32px',
                    textAlign: 'left',
                    boxShadow: hoveredCards[index] 
                      ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
                      : '0 8px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    transform: hoveredCards[index] ? 'translateY(-8px)' : 'translateY(0)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => handleCardHover(index, true)}
                  onMouseLeave={() => handleCardHover(index, false)}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: product.gradient,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    fontSize: '32px',
                    transform: hoveredCards[index] ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    {product.icon}
                  </div>
                  
                  <h3 style={{
                    color: '#1d1d1f',
                    fontSize: '1.4em',
                    marginBottom: '16px',
                    fontWeight: 600,
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {product.title}
                  </h3>
                  <p style={{
                    color: '#6e6e73',
                    fontSize: '1em',
                    lineHeight: 1.6,
                    marginBottom: '24px'
                  }}>
                    {product.description}
                  </p>
                  
                  <button style={{
                    background: product.color,
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    fontSize: '0.9em',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievement Section */}
        <section 
          ref={el => sectionRefs.current[2] = el}
          data-section="achievements"
          style={{
            background: '#1d1d1f',
            padding: '120px 0',
            color: '#ffffff',
            opacity: visibleSections.has('achievements') ? 1 : 0,
            transform: visibleSections.has('achievements') ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '80px'
            }}>
              <h2 className="section-title" style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                Championship Achievements
              </h2>
              <p style={{
                fontSize: '1.2em',
                color: '#a0a0a0',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.5,
                fontWeight: 400
              }}>
                PNS Cloth - The Choice of Champions Worldwide
              </p>
            </div>
            
            <div 
              className="stats-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '48px'
              }}
            >
              {[
                { number: '500+', label: 'World Champions' },
                { number: '50+', label: 'Major Tournaments' },
                { number: '100+', label: 'Countries' },
                { number: '4.9', label: 'Rating' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  style={{ 
                    textAlign: 'center',
                    opacity: visibleSections.has('achievements') ? 1 : 0,
                    transform: visibleSections.has('achievements') ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transitionDelay: `${0.6 + index * 0.1}s`
                  }}
                >
                  <div style={{
                    fontSize: '2.5em',
                    fontWeight: 200,
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.9em',
                    color: '#a0a0a0',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 500
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
