import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Silk from './Silk';
import { SplitRevealText, SpotlightCard } from './AnimatedBits';

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
    if (!('IntersectionObserver' in window)) {
      setVisibleSections(new Set(['about', 'products', 'ambassadors', 'partners']));
      return;
    }

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
    if (product.detailPath) {
      navigate(product.detailPath);
      return;
    }

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
        description: 'Advanced Model — Engineered for greater precision and consistent club performance',
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
        description: 'Professional Grade — Designed for superior control and competitive play',
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
        description: 'Elite Grade — Setting the standard for elite pool performance',
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
    pyramid: [
      {
        title: 'KADILUN 300',
        description: 'Basic Model — Durable and economical cloth for recreational clubs and high-frequency commercial use',
        color: '#2E7D32',
        gradient: 'linear-gradient(135deg, #2E7D32, #43A047)',
        image: '/images/kadilun-300-pyramid.png',
        detailPath: '/pyramid-kadilun-300'
      },
      {
        title: 'KADILUN 500',
        description: 'Standard Model — Smoother surface, improved ball control, and balanced durability for regular club play',
        color: '#2E7D32',
        gradient: 'linear-gradient(135deg, #2E7D32, #43A047)',
        image: '/images/kadilun-500-pyramid.png',
        detailPath: '/pyramid-kadilun-500'
      },
      {
        title: 'PNS 760',
        description: 'Advanced Model — Fast, consistent ball roll and refined response for advanced players and clubs',
        color: '#2E7D32',
        gradient: 'linear-gradient(135deg, #2E7D32, #43A047)',
        image: '/images/pns-760-pyramid.png',
        detailPath: '/pyramid-pns-760'
      },
      {
        title: 'PNS 900',
        description: 'Professional Grade — Premium consistency, precision, and durability for tournaments and elite players',
        color: '#2E7D32',
        gradient: 'linear-gradient(135deg, #2E7D32, #43A047)',
        image: '/images/pns-900-pyramid.png',
        detailPath: '/pyramid-pns-900'
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


  // 合作伙伴数据 —— 占位内容；如需替换为真实Logo：把图片放到 public/images/ 下，
  // 再把对应 logo 改为 '/images/你的文件名.png'，name 改成合作伙伴名称即可。
  const partners = [
    {
      name: 'IBSF',
      subtitle: 'International Billiards & Snooker Federation',
      logo: '/images/ibsf-logo.png',
      width: '360px',
      height: '220px',
      logoFrameHeight: '112px',
      logoMaxWidth: '112px',
      logoMaxHeight: '112px'
    },
    {
      name: 'AFBS',
      subtitle: 'Arab Federation For Billiard & Snooker',
      logo: '/images/afbs-logo.png',
      width: '360px',
      height: '220px',
      logoFrameHeight: '112px',
      logoMaxWidth: '170px',
      logoMaxHeight: '112px'
    }
  ];
  const hasMultiplePartners = partners.length > 1;
  const partnerLoopGroups = hasMultiplePartners ? 4 : 1;

  const renderPartner = (partner, i) => (
    <SpotlightCard className="partner-card" key={i} spotlightColor="rgba(0, 123, 255, 0.14)" style={{
      flex: '0 0 auto',
      width: partner.width || '200px',
      height: partner.height || '120px',
      background: '#ffffff',
      borderRadius: '16px',
      border: '1px solid rgba(0, 0, 0, 0.06)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '16px 20px'
    }}>
      {partner.logo ? (
        <>
          <div style={{
            width: '100%',
            height: partner.logoFrameHeight || '112px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              className="partner-logo-img"
              src={partner.logo}
              alt={partner.name}
              style={{
                maxWidth: partner.logoMaxWidth || '150px',
                maxHeight: partner.logoMaxHeight || '70px',
                objectFit: 'contain'
              }}
            />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textAlign: 'center'
          }}>
            <span style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#1d1d1f',
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
            }}>
              {partner.name}
            </span>
            {partner.subtitle && (
              <span style={{
                fontSize: '11px',
                fontWeight: 500,
                lineHeight: 1.35,
                color: '#6e6e73',
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                whiteSpace: 'nowrap'
              }}>
                {partner.subtitle}
              </span>
            )}
          </div>
        </>
      ) : (
        <>
          <div style={{
            minWidth: '88px',
            height: '52px',
            flexShrink: 0,
            borderRadius: '14px',
            padding: '0 16px',
            background: partner.badgeBackground || 'linear-gradient(135deg, #007BFF, #00A3FF)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            boxShadow: partner.badgeShadow || '0 4px 12px rgba(0, 123, 255, 0.3)'
          }}>
            {partner.badgeText || partner.name}
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textAlign: 'center'
          }}>
            <span style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#1d1d1f',
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
            }}>
              {partner.name}
            </span>
            {partner.subtitle && (
              <span style={{
                fontSize: '11px',
                fontWeight: 500,
                lineHeight: 1.35,
                color: '#6e6e73',
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                whiteSpace: 'nowrap'
              }}>
                {partner.subtitle}
              </span>
            )}
          </div>
        </>
      )}
    </SpotlightCard>
  );

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

    @keyframes partnerScroll {
      from { transform: translateX(0); }
      to { transform: translateX(-25%); }
    }

    .partner-track {
      animation: partnerScroll 28s linear infinite;
      will-change: transform;
    }

    .partner-marquee:hover .partner-track {
      animation-play-state: paused;
    }

    .partner-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .partner-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
    }

    .partner-logo-img {
      filter: none;
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    .partner-card:hover .partner-logo-img {
      opacity: 1;
    }

    .home-hero {
      min-height: min(760px, 88vh);
    }

    .home-hero-inner {
      max-width: 1120px !important;
    }

    .home-section {
      padding: 88px 0 !important;
    }

    .home-section-compact {
      padding-top: 72px !important;
    }

    .home-container {
      max-width: 1200px !important;
      padding-left: 32px !important;
      padding-right: 32px !important;
    }

    .home-section-header {
      max-width: 860px;
      margin-left: auto !important;
      margin-right: auto !important;
      margin-bottom: 48px !important;
    }

    .home-section-header p {
      max-width: 760px !important;
    }

    .home-product-tabs {
      gap: 12px !important;
      margin-bottom: 42px !important;
      max-width: 980px;
      margin-left: auto;
      margin-right: auto;
    }

    .home-product-tab {
      min-height: 44px;
      white-space: nowrap;
    }

    .home-product-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      gap: 28px !important;
      max-width: 1180px !important;
      padding: 0 !important;
    }

    .home-product-card {
      padding: 22px 22px 28px !important;
      border-radius: 18px !important;
    }

    .home-product-image {
      width: 100% !important;
      height: 240px !important;
      margin-bottom: 18px !important;
    }

    .home-ambassadors-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
      gap: 22px !important;
    }

    .home-ambassador-card {
      padding: 18px !important;
      border-radius: 16px !important;
    }

    .home-ambassador-photo {
      aspect-ratio: 4 / 4.65 !important;
    }

    @media (max-width: 1100px) {
      .home-product-grid,
      .home-ambassadors-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }

      .home-product-image {
        height: 230px !important;
      }
    }

    @media (max-width: 768px) {
      .home-hero {
        min-height: auto !important;
        padding: 128px 0 92px !important;
      }

      .home-hero-inner {
        padding-left: 22px !important;
        padding-right: 22px !important;
        transform: none !important;
      }

      .home-hero-eyebrow {
        margin-bottom: 14px !important;
      }

      .home-hero-copy {
        margin-bottom: 30px !important;
      }

      .home-hero-actions {
        gap: 12px !important;
      }

      .home-hero-actions button {
        width: 100%;
        max-width: 280px;
      }

      .home-section,
      .home-section-compact {
        padding: 58px 0 !important;
      }

      .home-container {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }

      .home-section-header {
        margin-bottom: 34px !important;
      }

      .home-section-header p {
        font-size: 16px !important;
        line-height: 1.58 !important;
        padding: 0 !important;
      }

      .home-product-tabs {
        display: grid !important;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px !important;
      }

      .home-product-tab {
        width: 100%;
        min-height: 46px;
        padding: 10px 12px !important;
        font-size: 12px !important;
        letter-spacing: 0 !important;
      }

      .home-product-grid,
      .home-ambassadors-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }

      .home-product-card {
        padding: 18px 18px 24px !important;
      }

      .home-product-image {
        height: 210px !important;
      }

      .home-ambassador-card {
        padding: 18px !important;
      }

      .home-ambassador-photo {
        aspect-ratio: 4 / 4.25 !important;
        max-height: 420px;
      }
    }

    @media (max-width: 480px) {
      .home-hero {
        padding: 116px 0 76px !important;
      }

      .home-hero-copy p:first-child {
        font-size: 17px !important;
      }

      .home-hero-copy p:last-child {
        font-size: 15px !important;
      }

      .home-product-tabs {
        grid-template-columns: 1fr;
      }

      .home-product-image {
        height: 190px !important;
      }

      .home-product-card h3 {
        font-size: 18px !important;
      }

      .home-product-card p {
        font-size: 13px !important;
      }

      .home-ambassador-photo {
        max-height: 360px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="home-page">
        {/* Hero Section */}
        <section id="hero" className="home-hero" style={{
          background: '#000000', // 简化背景色
          padding: '152px 0 144px',
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
          
          <div className="container home-hero-inner" style={{
            maxWidth: '1200px',
            width: '100%',
            padding: '0 40px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 3,
            transform: `translateY(${-scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
            <div className="home-hero-eyebrow" style={{ 
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
            
            <SplitRevealText as="h1" text="The Choice of Champions" className="hero-title" delay={0.25} style={{
              fontSize: '88px',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: 1.2,
              color: '#FFFFFF',
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              animation: 'fadeInUp 1s ease-out 0.3s both'
            }} />
            
            <div className="home-hero-copy" style={{
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
            
            <div className="home-hero-actions" style={{
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
          className="home-section"
          ref={el => sectionRefs.current[0] = el}
          data-section="about"
          style={{
            background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
            padding: '96px 0',
            opacity: visibleSections.has('about') ? 1 : 0,
            transform: visibleSections.has('about') ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <div className="container home-container" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            <div className="home-section-header" style={{
              textAlign: 'center',
              marginBottom: '56px'
            }}>
              <SplitRevealText as="h2" text="About Us" className="section-title" style={{
                fontSize: '52px',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '24px',
                letterSpacing: 0,
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }} />
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
                  As a company with a leading position in high-quality billiard cloth manufacturing, we provide cloth for <em>American Pool, snooker, carom, and pyramid</em>, along with related products.
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
          className="home-section"
          id="products"
          ref={el => sectionRefs.current[1] = el}
          data-section="products"
          style={{
            background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
            padding: '96px 0',
            opacity: visibleSections.has('products') ? 1 : 0,
            transform: visibleSections.has('products') ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s'
          }}
        >
          <div className="container home-container" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            <div className="home-section-header" style={{
              textAlign: 'center',
              marginBottom: '56px'
            }}>
              <SplitRevealText as="h2" text="Our Products" className="section-title" style={{
                fontSize: '52px',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '20px',
                letterSpacing: 0,
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }} />
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
              <div className="home-product-tabs" style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '40px'
              }}>
                <button className="home-product-tab"
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
                <button className="home-product-tab"
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
                  AMERICAN POOL
                </button>
                <button className="home-product-tab"
                  style={{
                    background: activeProductCategory === 'pyramid' 
                      ? '#0056CC' 
                      : (hoveredButtons[6] ? '#0056CC' : '#007BFF'),
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: activeProductCategory === 'pyramid' ? '2px solid #0056CC' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: (activeProductCategory === 'pyramid' || hoveredButtons[6])
                      ? '0 6px 20px rgba(0, 123, 255, 0.4)' 
                      : '0 3px 12px rgba(0, 123, 255, 0.3)',
                    transform: (activeProductCategory === 'pyramid' || hoveredButtons[6]) ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                  onClick={() => handleProductCategoryChange('pyramid')}
                  onMouseEnter={() => handleButtonHover(6, true)}
                  onMouseLeave={() => handleButtonHover(6, false)}
                >
                  PYRAMID
                </button>
                <button className="home-product-tab"
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
                <button className="home-product-tab"
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
            
            <div className="product-grid home-product-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '50px',
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 20px'
            }}
            >
              {productCategories[activeProductCategory].map((product, index) => (
                <SpotlightCard 
                  className="home-product-card"
                  key={`${activeProductCategory}-${index}`}
                  spotlightColor={`${product.color}24`}
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
                      className="home-product-image"
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
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>


        {/* Ambassadors & Partnerships Section */}
        <section 
          className="home-section home-section-compact"
          ref={el => sectionRefs.current[2] = el}
          data-section="ambassadors"
          style={{
            background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
            padding: '96px 0 40px',
            color: '#1d1d1f',
            opacity: visibleSections.has('ambassadors') ? 1 : 0,
            transform: visibleSections.has('ambassadors') ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s'
          }}
        >
          <div className="container home-container" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            <div className="home-section-header" style={{
              textAlign: 'center',
              marginBottom: '56px'
            }}>
              <SplitRevealText as="h2" text="Ambassadors & Partnerships" className="section-title" style={{
                fontSize: '52px',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '24px',
                letterSpacing: 0,
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }} />
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
            <div className="ambassadors-grid home-ambassadors-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              marginBottom: '16px'
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
                  name: 'Chang Bing Yu',
                  country: 'China',
                  color: '#007BFF',
                  photo: '/images/chang-bing-yu.png',
                  achievements: [
                    '2025 Scottish Open — Runner-up',
                    '2025 Saudi Masters — Last 16',
                    '2018 World Snooker Under-21 Championship & World Snooker Under-18 Championship — Runner-up (both)'
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
                <SpotlightCard 
                  className="ambassador-card home-ambassador-card"
                  key={index}
                  spotlightColor="rgba(0, 123, 255, 0.16)"
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
                    className="home-ambassador-photo"
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
                </SpotlightCard>
              ))}
            </div>

          </div>
        </section>

        {/* Our Partners Section - 滚动展示合作伙伴 */}
        <section
          className="home-section home-section-compact"
          ref={el => sectionRefs.current[3] = el}
          data-section="partners"
          style={{
            background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
            padding: '56px 0 96px',
            color: '#1d1d1f',
            opacity: visibleSections.has('partners') ? 1 : 0,
            transform: visibleSections.has('partners') ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <div className="home-section-header home-container" style={{
            textAlign: 'center',
            maxWidth: '1200px',
            margin: '0 auto 48px auto',
            padding: '0 40px'
          }}>
            <SplitRevealText as="h2" text="Our Partners" className="section-title" style={{
              fontSize: '52px',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '24px',
              letterSpacing: 0,
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
            }} />
            <p style={{
              fontSize: '19px',
              color: '#6e6e73',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.5,
              fontWeight: 400
            }}>
              Proud to collaborate with leading brands and organizations around the world
            </p>
          </div>

          {/* Scrolling marquee */}
          <div className="partner-marquee" style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '20px 0',
            WebkitMaskImage: hasMultiplePartners ? 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' : 'none',
            maskImage: hasMultiplePartners ? 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' : 'none'
          }}>
            <div className="partner-track" style={{
              display: 'flex',
              justifyContent: hasMultiplePartners ? 'flex-start' : 'center',
              width: hasMultiplePartners ? 'max-content' : '100%',
              animation: hasMultiplePartners ? undefined : 'none'
            }}>
              {Array.from({ length: partnerLoopGroups }).map((_, groupIndex) => (
                <div
                  className="partner-group"
                  key={`partner-group-${groupIndex}`}
                  aria-hidden={groupIndex > 0 ? 'true' : undefined}
                  style={{ display: 'flex', flexShrink: 0, gap: '24px', paddingRight: '24px' }}
                >
                  {partners.map((partner, partnerIndex) => renderPartner(partner, `${groupIndex}-${partnerIndex}`))}
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
