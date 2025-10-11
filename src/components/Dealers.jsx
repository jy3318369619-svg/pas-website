import React, { useState, useEffect, useRef } from 'react';
// Import removed - using direct path instead

const Dealers = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [expandedContinents, setExpandedContinents] = useState({});
  const [hoveredCards, setHoveredCards] = useState({});
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

  // 处理大洲展开/收缩
  const toggleContinent = (continentId) => {
    setExpandedContinents(prev => ({
      ...prev,
      [continentId]: !prev[continentId]
    }));
  };

  // 处理卡片悬停
  const handleCardHover = (index, isHovered) => {
    setHoveredCards(prev => ({ ...prev, [index]: isHovered }));
  };

  // 大洲数据
  const continentsData = [
    {
      id: 'asia',
      name: 'Asia',
      color: '#000000',
      gradient: '#000000',
      countries: [
        { 
          name: 'Indonesia', 
          dealers: (
            <>
              <strong>Eutopia Billiards & Co</strong><br />
              Tel: +62 851 9454 9686<br />
              Address: Jl. Teuku Umar No.39, Dauh Puri Klod, Kecamatan Denpasar Baru, Kota Denpasar, Bali, 80114 (Postal Code)<br />
              Email: <a href="mailto:eutopia.idn@gmail.com" style={{ color: '#007AFF', textDecoration: 'none' }}>eutopia.idn@gmail.com</a><br />
              Instagram: <a href="https://www.instagram.com/eutopiabilliards?igsh=MXE3NjlwNGhlZXdiNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: '#007AFF', textDecoration: 'none' }}>@eutopiabilliards</a>
            </>
          )
        },
        { 
          name: 'Malaysia', 
          dealers: (
            <>
              <strong>Arena Billiards Sport Trading</strong><br />
              Tel: +60 17-741 6133<br />
              Address: No 23-2 Jalan Sepah Puteri 5/1b, Kota Damansara, PJU 5, 47810 Petaling Jaya, Selangor
            </>
          )
        },
        { 
          name: 'Pakistan', 
          dealers: (
            <>
              <strong>Al-Madina Sports</strong><br />
              Contact Person: Jahanzaib Sheikh<br />
              Tel: +92 3097147147<br />
              Branch 1: Shop #13 & 14B, Ichhra Shopping Centre, Main Ferozpur Road, Lahore, Pakistan<br />
              Branch 2: Shop #1 & 2, Ground Floor, Umer Farooq Plaza, Murree Road, Near Chandni Chowk, Rawalpindi, Pakistan
            </>
          )
        },
        { 
          name: 'Thailand', 
          dealers: (
            <>
              <strong>Grand999</strong><br />
              Tel: +66 835935939<br />
              Address: 55/12 Moo.1 Phetchakasem R. Omyai Sampran Nakhonpathom<br />
              Email: <a href="mailto:grandtriplenine@gmail.com" style={{ color: '#007AFF', textDecoration: 'none' }}>grandtriplenine@gmail.com</a>
            </>
          )
        },
        { 
          name: 'Vietnam', 
          dealers: (
            <>
              <strong>HSP Billiards Equipment</strong><br />
              Contact Person: Ho So Phat<br />
              Tel: +84 933 18 68 18<br />
              Address: 1D/7 Binh Gia, Ward 13, Tan Binh District, Ho Chi Minh City, Vietnam
            </>
          )
        }
      ]
    },
    {
      id: 'europe',
      name: 'Europe',
      color: '#000000',
      gradient: '#000000',
      countries: [
        { 
          name: 'Belgium', 
          dealers: (
            <>
              <strong>Pro Fit Billiards</strong><br />
              Contact Person: Edwin Depoorter<br />
              Tel: +32 499 186 978<br />
              Email: <a href="mailto:edwindepoorter@gmail.com" style={{ color: '#007AFF', textDecoration: 'none' }}>edwindepoorter@gmail.com</a><br />
              Website: <a href="https://profitbilliards.be" target="_blank" rel="noopener noreferrer" style={{ color: '#007AFF', textDecoration: 'none' }}>profitbilliards.be</a>
            </>
          )
        },
        { 
          name: 'United Kingdom', 
          dealers: (
            <>
              <strong>Mark Williams Snooker</strong><br />
              Website: <a href="https://markwilliamssnooker.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007AFF', textDecoration: 'none' }}>markwilliamssnooker.com</a><br />
              Facebook: <a href="https://www.facebook.com/share/1EJNKKs7Pi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ color: '#007AFF', textDecoration: 'none' }}>Mark Williams Snooker</a>
            </>
          )
        }
      ]
    },
    {
      id: 'africa',
      name: 'Africa',
      color: '#000000',
      gradient: '#000000',
      countries: [
        { 
          name: 'South Africa', 
          dealers: (
            <>
              <strong>Crown Snooker & Pool Shop</strong><br />
              Contact Person: Cuban Moodley<br />
              Tel: +27 840689572<br />
              Email: <a href="mailto:ceo@prosnooker.co.za" style={{ color: '#007AFF', textDecoration: 'none' }}>ceo@prosnooker.co.za</a>
            </>
          )
        }
      ]
    },
    {
      id: 'north-america',
      name: 'North America',
      color: '#000000',
      gradient: '#000000',
      countries: []
    },
    {
      id: 'south-america',
      name: 'South America',
      color: '#000000',
      gradient: '#000000',
      countries: []
    },
    {
      id: 'oceania',
      name: 'Oceania',
      color: '#000000',
      gradient: '#000000',
      countries: [
        { 
          name: 'Australia', 
          dealers: (
            <>
              <strong>The Snooker Shop</strong><br />
              Contact Person: Jason Hastings<br />
              Tel: +61 448429059<br />
              Email: <a href="mailto:jason@thesnookershop.com.au" style={{ color: '#007AFF', textDecoration: 'none' }}>jason@thesnookershop.com.au</a><br />
              Website: <a href="https://thesnookershop.com.au" target="_blank" rel="noopener noreferrer" style={{ color: '#007AFF', textDecoration: 'none' }}>thesnookershop.com.au</a>
            </>
          )
        }
      ]
    }
  ];

  const pageStyle = {
    background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 10,
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
  };

  // Hero Section
  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/dealers.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    padding: '200px 0 180px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const heroOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)',
    zIndex: 1
  };


  const heroContentStyle = {
    position: 'relative',
    zIndex: 3,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    textAlign: 'center'
  };

  const heroTitleStyle = {
    fontSize: '88px',
    fontWeight: 800,
    marginBottom: '40px',
    letterSpacing: '-0.04em',
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    background: 'linear-gradient(135deg, #ffffff 0%, #e6f3ff 50%, #cce7ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'fadeInUp 1.2s ease-out',
    textShadow: '0 8px 30px rgba(0, 122, 255, 0.3), 0 4px 15px rgba(0, 0, 0, 0.5)',
    lineHeight: 1.1,
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
  };

  const heroSubtitleStyle = {
    fontSize: '26px',
    opacity: 0.95,
    margin: '0 auto',
    lineHeight: 1.7,
    fontWeight: 400,
    animation: 'fadeInUp 1.2s ease-out 0.4s both',
    color: '#ffffff',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 122, 255, 0.3)',
    letterSpacing: '0.01em',
    filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5))'
  };

  // Content Section
  const contentSectionStyle = {
    padding: '120px 0',
    background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px'
  };

  const sectionTitleStyle = {
    fontSize: '52px',
    fontWeight: 700,
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: '-0.02em'
  };

  const sectionSubtitleStyle = {
    fontSize: '18px',
    color: '#666666',
    textAlign: 'center',
    marginBottom: '80px',
    margin: '0 auto 80px',
    fontWeight: 400,
    maxWidth: '600px'
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

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }


    .floating-element {
      animation: float 3s ease-in-out infinite;
    }

    .continent-card {
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      cursor: pointer;
    }

    .continent-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }

    .countries-content {
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .country-item {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
    }

    .country-item.visible {
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
      <div style={pageStyle}>
        {/* Hero Section */}
        <div id="hero" style={heroStyle}>
          <div style={heroOverlayStyle}></div>
          <div style={heroContentStyle}>
            <h1 style={heroTitleStyle}>Our Dealers</h1>
            <p style={heroSubtitleStyle}>
              Find authorized PNS dealers worldwide for premium billiard cloth and exceptional service.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div style={contentSectionStyle}>
          <div style={containerStyle}>
            <h2 style={sectionTitleStyle}>Global Network</h2>
            <p style={sectionSubtitleStyle}>
              Our trusted partners deliver PNS quality across the globe.<br />
              Click on any continent to explore dealers in different countries.
            </p>

            {/* Continents Grid */}
            <div 
              ref={el => sectionRefs.current[0] = el}
              data-section="continents"
              style={{
                opacity: visibleSections.has('continents') ? 1 : 0,
                transform: visibleSections.has('continents') ? 'translateY(0)' : 'translateY(60px)',
                transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <div 
                className="continent-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '30px',
                  marginBottom: '40px',
                  alignItems: 'start'
                }}
              >
                {continentsData.map((continent, index) => (
                  <div 
                    key={continent.id}
                    className="continent-card"
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
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                    onMouseEnter={() => handleCardHover(index, true)}
                    onMouseLeave={() => handleCardHover(index, false)}
                  >
                    {/* Continent Header */}
                    <div 
                      style={{
                        padding: '32px 32px 24px',
                        background: continent.gradient,
                        color: '#ffffff',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onClick={() => toggleContinent(continent.id)}
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
                              fontSize: '1.6em',
                              fontWeight: 700,
                              margin: 0,
                              fontFamily: "'SF Pro Display', sans-serif",
                              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                            }}>
                              {continent.name}
                            </h3>
                            <p style={{
                              fontSize: '0.9em',
                              margin: '4px 0 0',
                              opacity: 0.9,
                              fontWeight: 500
                            }}>
                              {continent.countries.length} countries
                            </p>
                          </div>
                        </div>
                        <div 
                          className={`expand-icon ${expandedContinents[continent.id] ? 'expanded' : ''}`}
                          style={{
                            fontSize: '1.5rem',
                            transform: expandedContinents[continent.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }}
                        >
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Countries Content */}
                    <div 
                      className="countries-content"
                      style={{
                        maxHeight: expandedContinents[continent.id] ? '2500px' : '0',
                        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        overflow: 'hidden'
                      }}
                    >
                      <div style={{
                        padding: expandedContinents[continent.id] ? '24px 32px 32px' : '0 32px'
                      }}>
                        {continent.countries.map((country, countryIndex) => (
                          <div 
                            key={country.name}
                            className={`country-item ${expandedContinents[continent.id] ? 'visible' : ''}`}
                            style={{
                              marginBottom: '20px',
                              padding: '20px',
                              background: 'rgba(255, 255, 255, 0.5)',
                              borderRadius: '16px',
                              border: `1px solid ${continent.color}20`,
                              opacity: expandedContinents[continent.id] ? 1 : 0,
                              transform: expandedContinents[continent.id] ? 'translateY(0)' : 'translateY(20px)',
                              transition: `all 0.3s ease ${countryIndex * 0.1}s`,
                              borderLeft: `4px solid ${continent.color}`
                            }}
                          >
                            <h4 style={{
                              fontSize: '19px',
                              fontWeight: 600,
                              color: '#1a1a1a',
                              margin: '0 0 12px',
                              fontFamily: "'SF Pro Display', sans-serif"
                            }}>
                              {country.name}
                            </h4>
                            <p style={{
                              fontSize: '0.95em',
                              color: '#666666',
                              lineHeight: 1.5,
                              margin: 0
                            }}>
                              {country.dealers}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information for Dealers */}
            <div 
              ref={el => sectionRefs.current[1] = el}
              data-section="dealer-contact"
              style={{
                marginTop: '80px',
                opacity: visibleSections.has('dealer-contact') ? 1 : 0,
                transform: visibleSections.has('dealer-contact') ? 'translateY(0)' : 'translateY(60px)',
                transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: '0.2s'
              }}
            >
              <div style={{
                background: '#000000',
                borderRadius: '24px',
                padding: '60px 40px',
                textAlign: 'center',
                color: '#ffffff'
              }}>
                <h3 style={{
                  fontSize: '35px',
                  fontWeight: 700,
                  marginBottom: '24px',
                  color: '#ffffff'
                }}>
                  Dealer Inquiries
                </h3>
                <p style={{
                  fontSize: '19px',
                  marginBottom: '32px',
                  color: '#e0e0e0',
                  lineHeight: 1.6,
                  maxWidth: '800px',
                  margin: '0 auto 32px'
                }}>
                  Interested in becoming a PNS dealer or need dealer support?<br />
                  Contact our partnership team.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  <a
                    href="mailto:pnsbilliardcloth@gmail.com"
                    style={{
                      background: '#007AFF',
                      color: '#ffffff',
                      padding: '14px 28px',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://wa.me/8618505200972"
                    style={{
                      background: 'transparent',
                      color: '#ffffff',
                      padding: '14px 28px',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      border: '2px solid #ffffff',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dealers;
