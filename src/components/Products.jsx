import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredCards, setHoveredCards] = useState({});
  const [expandedProducts, setExpandedProducts] = useState({});
  const [hoveredProductItems, setHoveredProductItems] = useState({});
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

  // 处理产品展开/收缩
  const toggleProduct = (productId) => {
    setExpandedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  // 处理产品项目hover
  const handleProductItemHover = (key, isHovered) => {
    setHoveredProductItems(prev => ({ ...prev, [key]: isHovered }));
  };

  // 处理产品项目点击
  const handleProductItemClick = (productName, categoryId) => {
    // Snooker、Chinese Pool、Pool和Other Accessories都有详情页
    if (categoryId === 'snooker' || categoryId === 'chinese-pool' || categoryId === 'pool' || categoryId === 'other-accessories') {
      const productSlug = productName.toLowerCase().replace(/\s+/g, '-');
      navigate(`/${productSlug}`);
    }
  };

  const products = [
    {
      id: 'snooker',
      name: 'Snooker',
      description: 'Professional snooker cloth designed for championship tournaments and serious players. Engineered for precise ball control and consistent play on full-size tables.',
      gradient: '#1B5E20',
      color: '#1B5E20',
      productList: [
        { name: 'PNS 520', description: 'Standard Model — The Go-To Choice for Clubs Seeking Great Value' },
        { name: 'PNS 600', description: 'Advanced Model — Designed to Meet All Playing Demands' },
        { name: 'PNS 720', description: 'Professional Grade — Balancing Speed and Durability' },
        { name: 'PNS S147', description: 'Snooker Speed Edition — Magnetic Suspension Sensation, Precision at Will' },
        { name: 'PNS 990', description: 'Tournament Grade — Experience the Standard of Professional Sports' }
      ]
    },
    {
      id: 'pool',
      name: 'Pool',
      description: 'High-performance pool cloth delivering smooth playability, precise control, and lasting durability. Designed for both competition and leisure play.',
      gradient: '#1565C0',
      color: '#1565C0',
      productList: [
        { name: 'PNS 760', description: 'Basic Model — The Smart Start for Clubs and Players' },
        { name: 'PNS 900', description: 'Advanced Model — Engineered for Greater Precision' },
        { name: 'PNS 988', description: 'Professional Grade — Setting the Standard for Elite Play' }
      ]
    },
    {
      id: 'chinese-pool',
      name: 'Chinese Pool/Heyball',
      description: 'Premium cloth crafted for Chinese Pool and Heyball. Ensures stable performance, fine texture, and reliable quality for tournament-level play.',
      gradient: '#388E3C',
      color: '#388E3C',
      productList: [
        { name: 'PNS 520', description: 'Standard Model — The Go-To Choice for Clubs Seeking Great Value' },
        { name: 'PNS 600', description: 'Advanced Model — Designed to Meet All Playing Demands' },
        { name: 'PNS 720', description: 'Professional Grade — Balancing Speed and Durability' },
        { name: 'PNS 990', description: 'Tournament Grade — Experience the Standard of Professional Sports' }
      ]
    },
    {
      id: 'other-accessories',
      name: 'Other Accessories',
      description: 'Professional accessories designed to support players and clubs. More high-quality products are coming soon to enhance your playing experience.',
      gradient: '#546E7A',
      color: '#546E7A',
      productList: [
        { name: 'PNS Gloves', description: 'Professional Model — Enhanced Grip for Precision Play' }
      ]
    }
  ];

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

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .product-card {
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      cursor: pointer;
    }

    .product-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }

    .product-content {
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .product-item {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
    }

    .product-item.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .expand-icon {
      transition: transform 0.3s ease;
    }

    .expand-icon.expanded {
      transform: rotate(180deg);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div style={{ 
        background: 'linear-gradient(180deg, #fff 0%, #f8f9fa 50%, #fff 100%)', 
        minHeight: '100vh',
        paddingBottom: '80px',
        marginTop: '-80px',
        paddingTop: '80px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          {/* Hero Section */}
          <div id="hero" style={{ 
            textAlign: 'center', 
            marginBottom: '80px',
            paddingTop: '200px'
          }}>
            <h1 style={{
              fontSize: '88px',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '30px',
              letterSpacing: '-0.03em',
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              background: 'linear-gradient(135deg, #1d1d1f 0%, #666 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fadeInUp 1s ease-out'
            }}>
              Our Products
            </h1>
            <p style={{
              fontSize: '24px',
              color: '#86868b',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.5,
              animation: 'fadeInUp 1s ease-out 0.3s both'
            }}>
              Premium billiard cloths for Snooker, Pool, Chinese Pool/Heyball games, and professional accessories.<br />
              <span style={{ fontSize: '19px', opacity: 0.8 }}>Click on any category to explore our product collection.</span>
            </p>
          </div>

          {/* Products Grid */}
          <div 
            ref={el => sectionRefs.current[0] = el}
            data-section="products-grid"
            className="products-grid"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              marginBottom: '80px',
              opacity: visibleSections.has('products-grid') ? 1 : 0,
              transform: visibleSections.has('products-grid') ? 'translateY(0)' : 'translateY(60px)',
              transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="product-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: hoveredCards[index] 
                    ? '0 25px 50px rgba(0, 0, 0, 0.15)' 
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transform: hoveredCards[index] ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  opacity: visibleSections.has('products-grid') ? 1 : 0,
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                {/* Product Header */}
                <div 
                  style={{
                    padding: '32px 32px 24px',
                    background: product.gradient,
                    color: '#ffffff',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onClick={() => toggleProduct(product.id)}
                >
                  {/* Background pattern */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    opacity: 0.1
                  }} />
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div>
                        <h3 style={{
                          fontSize: '26px',
                          fontWeight: 700,
                          margin: 0,
                          fontFamily: "'SF Pro Display', sans-serif",
                          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                        }}>
                          {product.name}
                        </h3>
                        <p style={{
                          fontSize: '14px',
                          margin: '4px 0 0',
                          opacity: 0.9,
                          fontWeight: 500
                        }}>
                          {product.productList.length} products
                        </p>
                      </div>
                    </div>
                    <div 
                      className={`expand-icon ${expandedProducts[product.id] ? 'expanded' : ''}`}
                      style={{
                        fontSize: '1.5rem',
                        transform: expandedProducts[product.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      ▼
                    </div>
                  </div>
                  
                  <p style={{
                    fontSize: '15px',
                    margin: '16px 0 0',
                    opacity: 0.9,
                    lineHeight: 1.5,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {product.description}
                  </p>
                </div>

                {/* Product List Content */}
                <div 
                  className="product-content"
                  style={{
                    maxHeight: expandedProducts[product.id] ? '1000px' : '0',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    padding: expandedProducts[product.id] ? '24px 32px 32px' : '0 32px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px'
                  }}>
                    {product.productList.map((item, itemIndex) => {
                      const itemKey = `${product.id}-${itemIndex}`;
                      const hasDetailPage = product.id === 'snooker' || product.id === 'chinese-pool' || product.id === 'pool' || product.id === 'other-accessories';
                      
                      return (
                        <div 
                          key={item.name}
                          className={`product-item ${expandedProducts[product.id] ? 'visible' : ''}`}
                          style={{
                            padding: '20px',
                            background: hoveredProductItems[itemKey] ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)',
                            borderRadius: '16px',
                            border: `1px solid ${product.color}20`,
                            opacity: expandedProducts[product.id] ? 1 : 0,
                            transform: expandedProducts[product.id] 
                              ? (hoveredProductItems[itemKey] ? 'translateY(-4px)' : 'translateY(0)') 
                              : 'translateY(20px)',
                            transition: `all 0.3s ease ${itemIndex * 0.1}s`,
                            borderLeft: `4px solid ${product.color}`,
                            cursor: hasDetailPage ? 'pointer' : 'default',
                            position: 'relative'
                          }}
                          onMouseEnter={() => hasDetailPage && handleProductItemHover(itemKey, true)}
                          onMouseLeave={() => hasDetailPage && handleProductItemHover(itemKey, false)}
                          onClick={() => handleProductItemClick(item.name, product.id)}
                        >
                          <h4 style={{
                            fontSize: '1.2em',
                            fontWeight: 600,
                            color: '#1d1d1f',
                            margin: '0 0 12px',
                            fontFamily: "'SF Pro Display', sans-serif"
                          }}>
                            {item.name}
                            {hasDetailPage && (
                              <span style={{
                                fontSize: '0.8em',
                                color: product.color,
                                marginLeft: '8px',
                                opacity: hoveredProductItems[itemKey] ? 1 : 0.7,
                                transition: 'opacity 0.3s ease'
                              }}>
                                →
                              </span>
                            )}
                          </h4>
                          <p style={{
                            fontSize: '0.95em',
                            color: '#666666',
                            lineHeight: 1.5,
                            margin: 0
                          }}>
                            {item.description}
                          </p>
                          
                          {hasDetailPage && (
                            <div style={{
                              position: 'absolute',
                              top: '16px',
                              right: '20px',
                              opacity: hoveredProductItems[itemKey] ? 1 : 0,
                              transition: 'opacity 0.3s ease',
                              fontSize: '0.8em',
                              color: product.color,
                              fontWeight: 600
                            }}>
                              View Details
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Products;
