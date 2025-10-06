import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Silk from './Silk';

const Home = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredCards, setHoveredCards] = useState({});
  const [hoveredButtons, setHoveredButtons] = useState({});
  const [activeProductCategory, setActiveProductCategory] = useState('snooker');
  const [selectedColors, setSelectedColors] = useState({});
  const [expandedAchievements, setExpandedAchievements] = useState({});
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

  // 处理颜色选择
  const handleColorSelect = (productIndex, colorIndex) => {
    setSelectedColors(prev => ({
      ...prev,
      [`${activeProductCategory}-${productIndex}`]: colorIndex
    }));
  };

  // 处理成就展开/收缩 - 确保独立性
  const toggleAchievements = (ambassadorIndex) => {
    setExpandedAchievements(prev => ({
      ...prev,
      [`ambassador-${ambassadorIndex}`]: !prev[`ambassador-${ambassadorIndex}`]
    }));
  };

  // 处理Learn More按钮点击
  const handleLearnMore = (product) => {
    // Snooker、Pool和Chinese pool分类的产品都有详情页面
    if (activeProductCategory === 'snooker' || activeProductCategory === 'woollen' || activeProductCategory === 'gloves') {
      const productSlug = product.title.toLowerCase().replace(/\s+/g, '-');
      navigate(`/${productSlug}`);
    }
  };

  // 新增：定义不同类别的产品数据
  const productCategories = {
    snooker: [
      {
        title: 'PNS 520',
        description: 'Standard Model — The Go-To Choice for Clubs Seeking Great Value',
        color: '#0066CC',
        gradient: 'linear-gradient(135deg, #0066CC, #0080FF)',
        image: '/images/PNS 520.png'
      },
      {
        title: 'PNS 600',
        description: 'Advanced Model — Designed to Meet All Playing Demands',
        color: '#3B82F6',
        gradient: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
        image: '/images/PNS 600.png'
      },
      {
        title: 'PNS 720',
        description: 'Professional Grade — Balancing Speed and Durability',
        color: '#2563EB',
        gradient: 'linear-gradient(135deg, #2563EB, #3B82F6)',
        image: '/images/PNS 720.png'
      },
      {
        title: 'PNS S147',
        description: 'Snooker Speed Edition — Magnetic Suspension Sensation, Precision at Will',
        color: '#059669',
        gradient: 'linear-gradient(135deg, #059669, #10B981)',
        image: '/images/PNS S147.png'
      },
      {
        title: 'PNS 990',
        description: 'Tournament Grade — Experience the Standard of Professional Sports',
        color: '#7C3AED',
        gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
        image: '/images/PNS 990.png'
      }
    ],
    woollen: [
      {
        title: 'PNS 760',
        description: 'Basic Model — The Smart Start for Clubs and Players',
        color: '#AF52DE',
        gradient: 'linear-gradient(135deg, #AF52DE, #FF2D92)',
        image: '/images/pns 760-electric blue.png',
        colors: [
          { name: 'Electric Blue', value: '#003366', image: '/images/pns 760-electric blue.png' },
          { name: 'Power Blue', value: '#4682B4', image: '/images/pns 760-power blue.png' },
          { name: 'Yellow Green', value: '#9ACD32', image: '/images/pns 760-yellow green.png' },
          { name: 'Iron Grey', value: '#708090', image: '/images/pns 760-iron grey.png' }
        ]
      },
      {
        title: 'PNS 900',
        description: 'Advanced Model — Engineered for Greater Precision',
        color: '#5AC8FA',
        gradient: 'linear-gradient(135deg, #5AC8FA, #007AFF)',
        image: '/images/PNS 900 Electric blue.png',
        colors: [
          { name: 'Teal', value: '#5AC8FA' },
          { name: 'Blue', value: '#007AFF' },
          { name: 'Navy', value: '#1D3A78' },
          { name: 'Cyan', value: '#32D74B' },
          { name: 'Purple', value: '#AF52DE' },
          { name: 'Green', value: '#30D158' },
          { name: 'Indigo', value: '#5856D6' }
        ]
      },
      {
        title: 'PNS 988',
        description: 'Professional Grade — Setting the Standard for Elite Play',
        color: '#FF3B30',
        gradient: 'linear-gradient(135deg, #FF3B30, #FF9500)',
        image: '/images/PNS 988 Electric blue.png',
        colors: [
          { name: 'Red', value: '#FF3B30' },
          { name: 'Orange', value: '#FF9500' },
          { name: 'Yellow', value: '#FFCC02' },
          { name: 'Green', value: '#34C759' },
          { name: 'Blue', value: '#007AFF' },
          { name: 'Purple', value: '#AF52DE' },
          { name: 'Pink', value: '#FF2D92' },
          { name: 'Black', value: '#1D1D1F' }
        ]
      }
    ],
    gloves: [
      {
        title: 'PNS 520',
        description: 'Standard Model — The Go-To Choice for Clubs Seeking Great Value',
        color: '#007AFF',
        gradient: 'linear-gradient(135deg, #007AFF, #00D4FF)',
        image: '/images/PNS 520.png'
      },
      {
        title: 'PNS 600',
        description: 'Advanced Model — Designed to Meet All Playing Demands',
        color: '#34C759',
        gradient: 'linear-gradient(135deg, #34C759, #30D158)',
        image: '/images/PNS 600.png'
      },
      {
        title: 'PNS 720',
        description: 'Professional Grade — Balancing Speed and Durability',
        color: '#FF9500',
        gradient: 'linear-gradient(135deg, #FF9500, #FF6B00)',
        image: '/images/PNS 720.png'
      },
      {
        title: 'PNS 990',
        description: 'Tournament Grade — Experience the Standard of Professional Sports',
        color: '#7C3AED',
        gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
        image: '/images/PNS 990.png'
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
  `;

  return (
    <>
      <style>{styles}</style>
      <div>
        {/* Hero Section */}
        <section id="hero" style={{
          background: '#000000', // 简化背景色
          padding: '160px 0 180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Silk Background - 使用 reactbits.dev 的默认参数 */}
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
              speed={5}
              scale={1}
              color="#007BFF"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>
          
          {/* 减少渐变覆盖层的不透明度，让 Silk 效果更明显 */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(10, 15, 28, 0.3), rgba(0, 0, 0, 0.4))',
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
              fontSize: '88px',
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
                onClick={() => navigate('/products')}
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
                onClick={() => navigate('/technology')}
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
                fontSize: '52px',
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
                  fontSize: '21px',
                  color: '#1d1d1f',
                  marginBottom: '20px',
                  lineHeight: 1.6,
                  fontWeight: 500
                }}>
                  <strong style={{ color: '#007AFF' }}>PNS Billiard Cloth</strong> was founded in <strong>1995</strong> in China.
                </p>
                <p style={{
                  fontSize: '18px',
                  color: '#6e6e73',
                  marginBottom: '16px',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}>
                  As a company with a leading position in high-quality billiard cloth manufacturing, we provide cloth for <em>pool, snooker, carom, and pyramid</em>, along with related products.
                </p>
                <p style={{
                  fontSize: '18px',
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
              <button 
                style={{
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
                }}
                onClick={() => navigate('/about')}
              >
                More Details
              </button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section 
          id="products"
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
                fontSize: '52px',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '20px',
                letterSpacing: '-0.02em',
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                Our Products
              </h2>
              <p style={{
                fontSize: '19px',
                color: '#6e6e73',
                maxWidth: '800px',
                margin: '0 auto 40px auto',
                lineHeight: 1.5,
                fontWeight: 400,
                textAlign: 'center',
                padding: '20px 0'
              }}>
                <span style={{
                  color: '#9ca3af',
                  fontWeight: 500
                }}>
                  Engineered billiard cloths crafted for ultimate precision and durability
                </span>
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
                    background: activeProductCategory === 'snooker' 
                      ? '#0056CC' 
                      : (hoveredButtons[2] ? '#0056CC' : '#007BFF'),
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: activeProductCategory === 'snooker' ? '2px solid #0056CC' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: (activeProductCategory === 'snooker' || hoveredButtons[2])
                      ? '0 6px 20px rgba(0, 123, 255, 0.4)' 
                      : '0 3px 12px rgba(0, 123, 255, 0.3)',
                    transform: (activeProductCategory === 'snooker' || hoveredButtons[2]) ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                  onClick={() => handleProductCategoryChange('snooker')}
                  onMouseEnter={() => handleButtonHover(2, true)}
                  onMouseLeave={() => handleButtonHover(2, false)}
                >
                  SNOOKER
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
                  POOL
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
                  CHINESE POOL/HEYBALL
                </button>
                <button 
                  style={{
                    background: hoveredButtons[5] ? '#0056CC' : '#007BFF',
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: hoveredButtons[5]
                      ? '0 6px 20px rgba(0, 123, 255, 0.4)' 
                      : '0 3px 12px rgba(0, 123, 255, 0.3)',
                    transform: hoveredButtons[5] ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                  onClick={() => navigate('/products')}
                  onMouseEnter={() => handleButtonHover(5, true)}
                  onMouseLeave={() => handleButtonHover(5, false)}
                >
                  MORE
                </button>
              </div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '50px',
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 20px'
            }}
            className="product-grid"
            >
              {productCategories[activeProductCategory].map((product, index) => (
                <div 
                  key={`${activeProductCategory}-${index}`}
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
                    borderRadius: '24px',
                    padding: '24px 24px 32px 24px',
                    textAlign: 'left',
                    boxShadow: hoveredCards[index] 
                      ? '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
                      : '0 10px 35px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    transform: hoveredCards[index] ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => handleCardHover(index, true)}
                  onMouseLeave={() => handleCardHover(index, false)}
                >
                  {/* 背景装饰 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle, ${product.color}08 0%, transparent 70%)`,
                    opacity: hoveredCards[index] ? 0.6 : 0.3,
                    transition: 'opacity 0.4s ease'
                  }}></div>
                  
                  {/* Image Area */}
                  {product.image ? (
                    <img 
                       src={product.image}
                      alt={product.title}
                       style={{
                         position: 'relative',
                         zIndex: 1,
                         width: '90%',
                         height: '280px',
                         objectFit: 'contain',
                         objectPosition: 'center',
                         transition: 'transform 0.3s ease',
                         transform: hoveredCards[index] ? 'scale(1.05)' : 'scale(1)',
                         display: 'block',
                         margin: '0 auto 20px auto',
                         borderRadius: '0'
                       }}
                    />
                  ) : (
                    <div style={{
                      position: 'relative',
                      zIndex: 1,
                      height: '280px',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f8f9fa',
                      border: '2px dashed #e0e0e0',
                      color: '#9ca3af',
                      fontSize: '13px',
                      fontWeight: 500,
                      textAlign: 'center'
                    }}>
                      Product Image
                      <br />
                      <span style={{ fontSize: '11px', opacity: 0.7 }}>
                        {product.title}
                      </span>
                    </div>
                  )}

                  {/* Content Area */}
                  <div style={{
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <h3 style={{
                      color: '#1d1d1f',
                      fontSize: '19px',
                      marginBottom: '12px',
                      fontWeight: 700,
                      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                      letterSpacing: '-0.02em'
                    }}>
                      {product.title}
                    </h3>
                    <p style={{
                      color: '#6e6e73',
                      fontSize: '14px',
                      lineHeight: 1.5,
                      marginBottom: '24px',
                      fontWeight: 400
                    }}>
                      {product.description}
                    </p>
                    
                    <button 
                      onClick={() => handleLearnMore(product)}
                      style={{
                        background: '#2563EB',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        boxShadow: '0 4px 15px rgba(37, 99, 235, 0.25)',
                        transform: hoveredCards[index] ? 'translateY(-2px)' : 'translateY(0)',
                        letterSpacing: '0.3px'
                      }}>
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Ambassadors & Partnerships Section */}
        <section 
          ref={el => sectionRefs.current[2] = el}
          data-section="ambassadors"
          style={{
            background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
            padding: '120px 0',
            color: '#1d1d1f',
            opacity: visibleSections.has('ambassadors') ? 1 : 0,
            transform: visibleSections.has('ambassadors') ? 'translateY(0)' : 'translateY(60px)',
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
                fontSize: '52px',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                Ambassadors & Partnerships
              </h2>
              <p style={{
                fontSize: '19px',
                color: '#6e6e73',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.5,
                fontWeight: 400
              }}>
                Trusted by world-class players and prestigious tournaments worldwide
              </p>
            </div>
            
            {/* Ambassadors Grid */}
            <div style={{
                display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              marginBottom: '80px'
            }}>
              {[
                { 
                  name: 'Mark Williams', 
                  country: 'United Kingdom', 
                  color: '#007BFF',
                  photo: '/images/mark williams.png',
                  achievements: [
                    'World Champion — 2000, 2003, 2018',
                    'Triple Crown Winner — World Championship, Masters, UK Championship (2002–03)',
                    '26 Ranking Titles',
                    'World No.1 (2000–2002, 2003–2004, 2011)',
                    'Special Records — First left-handed World Champion; oldest World Championship finalist (2025, age 50)'
                  ]
                },
                { 
                  name: 'Phone Myint Kyaw', 
                  country: 'Myanmar', 
                  color: '#007BFF',
                  photo: '/images/phone myint kyaw.jpg',
                  achievements: [
                    'Champion — 2022 Joy Billiards Chinese 8-Ball Masters (Changzhou, Jiangsu – Division A)',
                    'Champion — Dingguan Billiards Chain Cup, Duyá Legendary Chinese 9-Ball Championship',
                    'Champion — Chinese 8-Ball International Exchange Tournament (Dangshan Stop)'
                  ]
                },
                { 
                  name: 'Johann Chua', 
                  country: 'Philippines', 
                  color: '#007BFF',
                  photo: '/images/johann chua.jpg',
                  achievements: [
                    'Champion — 2015, 2017 All Japan Championship (Ten-ball)',
                    'Champion — 2021 SEA Games, 9-Ball Singles',
                    'Champion — 2022 WPA World Mixed Teams Ten-Ball (Philippines team)',
                    'Champion — 2023 World Cup of Pool (with James Aranas)',
                    'Champion — 2024 Hanoi Open, Shanghai Zen & Yuan8 Open, Ibalong Festival 9-Ball',
                    'Champion — 2025 Knight Shot Dubai Open, Battle of the Bull, Hoang Phu Tho Pool Arena Open (9-Ball)'
                  ]
                },
                { 
                  name: 'Duong Quoc Hoang', 
                  country: 'Vietnam', 
                  color: '#007BFF',
                  photo: '/images/duong quoc hoang.jpg',
                  achievements: [
                    'Champion — 2017 Vietnam National 9-Ball Championship',
                    'Champion — Vietnam National 10-Ball Championship (2019, 2020, 2021, 2025)',
                    'Champion — 2024 Jacoby Scottish Open (World Nineball Tour)',
                    'Champion — 2024 Reyes Cup (Team Asia vs Europe)'
                  ]
                },
                { 
                  name: 'Andri Januarta', 
                  country: 'Indonesia', 
                  color: '#007BFF',
                  photo: '/images/andri januatra.jpg',
                  achievements: [
                    'Champion — 2024 Aileex 9-Ball Open Tournament (Indonesia)',
                    'Runner-up — 2024 PON XXI Aceh–Sumut, Men\'s 9-Ball Doubles (with Albert Januarta)'
                  ]
                },
                { 
                  name: 'Gebby Adi Wibawa Putra', 
                  country: 'Indonesia', 
                  color: '#007BFF',
                  photo: '/images/gebby.jpg',
                  achievements: [
                    'Champion — POBSI Pool Circuit Series II 2024 (Bali, Indonesia)',
                    'Champion — 10-Ball Rama Open Handicap (regional)',
                    'Runner-up — 2025 Batulicin Open (Indonesia)'
                  ]
                },
                { 
                  name: 'Waratthanun Sukritthanes', 
                  country: 'Thailand', 
                  color: '#007BFF',
                  photo: '/images/Waratthanun Sukritthanes.jpg',
                  achievements: [
                    'Champion — 2018 IBSF World Women\'s Snooker',
                    'Champion — 2018 World Women\'s 6-Red',
                    'Champion — 2019 Women\'s Snooker World Cup',
                    'Champion — 2022 World Women\'s 6-Red',
                    'Champion — 2024 Asian Heyball (Qatar)',
                    'Champion — 2024 WPA World Heyball'
                  ]
                }
              ].map((ambassador, index) => (
                <div 
                  key={index}
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '24px',
                    borderRadius: '20px',
                    textAlign: 'center',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    opacity: visibleSections.has('ambassadors') ? 1 : 0,
                    transform: visibleSections.has('ambassadors') ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transitionDelay: `${0.6 + index * 0.1}s`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Color accent bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: ambassador.color
                  }} />
                  
                  {/* Ambassador Photo - 4:5 ratio */}
                  <img 
                    src={ambassador.photo}
                    alt={ambassador.name}
                    style={{
                      width: '100%',
                      aspectRatio: '4/5',
                      borderRadius: '12px',
                      margin: '0 auto 12px auto',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      border: '2px solid rgba(0, 123, 255, 0.1)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  
                  {/* Text area - dynamic height */}
                  <div style={{
                    minHeight: '100px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {/* Name and Country */}
                    <div style={{ marginBottom: '12px' }}>
                      <h3 style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#1d1d1f',
                        marginBottom: '4px',
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                        {ambassador.name}
                      </h3>
                      <p style={{
                        fontSize: '0.8rem',
                        color: ambassador.color,
                        fontWeight: 600,
                        margin: 0
                      }}>
                        {ambassador.country}
                      </p>
                  </div>
                    
                    {/* Achievements placeholder */}
                  <div style={{
                      background: 'rgba(248, 249, 250, 0.8)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      flex: '1'
                    }}>
                      <div 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer'
                        }}
                        onClick={() => toggleAchievements(index)}
                      >
                        <h4 style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          color: '#6e6e73',
                          margin: 0,
                    textTransform: 'uppercase',
                          letterSpacing: '0.3px'
                        }}>
                          Key Achievements
                        </h4>
                        <div style={{
                          fontSize: '0.8rem',
                          color: '#007BFF',
                          transform: expandedAchievements[`ambassador-${index}`] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}>
                          ▼
                  </div>
                </div>
                      
                      {/* Expandable content */}
                      <div style={{
                        maxHeight: expandedAchievements[`ambassador-${index}`] ? '400px' : '0',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease',
                        marginTop: expandedAchievements[`ambassador-${index}`] ? '8px' : '0'
                      }}>
                        <div style={{
                          paddingTop: expandedAchievements[`ambassador-${index}`] ? '8px' : '0',
                          borderTop: expandedAchievements[`ambassador-${index}`] ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
                          textAlign: 'left'
                        }}>
                          <ul style={{
                            fontSize: '0.65rem',
                            color: '#6e6e73',
                            margin: 0,
                            paddingLeft: '12px',
                            lineHeight: 1.4,
                            textAlign: 'left'
                          }}>
                            {ambassador.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} style={{ marginBottom: '2px' }}>
                                {achievement}
                              </li>
                            ))}
                          </ul>
            </div>
                      </div>
                      
                      {/* Collapsed state text */}
                      {!expandedAchievements[`ambassador-${index}`] && (
                        <p style={{
                          fontSize: '0.65rem',
                          color: '#9aa0a6',
                          margin: '4px 0 0 0',
                          fontStyle: 'italic'
                        }}>
                          Click to view achievements
                        </p>
                      )}
                    </div>
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
