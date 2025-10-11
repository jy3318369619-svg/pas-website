import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredInputs, setHoveredInputs] = useState({});
  const [focusedInputs, setFocusedInputs] = useState({});
  const [hoveredButton, setHoveredButton] = useState(false);
  const [hoveredContactItems, setHoveredContactItems] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    
    // 禁用按钮防止重复提交
    button.disabled = true;
    button.innerHTML = 'Sending...';
    button.style.transform = 'scale(0.95)';
    
    // EmailJS 配置
    const serviceID = 'service_edvtntk';
    const templateID = 'template_f2votpp';
    const publicKey = 'yiMfjO2OchmDlyYzQ';
    
    // 准备发送的数据
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'pnsbilliardcloth@gmail.com'
    };
    
    // 发送邮件
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        // 成功
        button.style.background = '#34C759';
        button.innerHTML = '✓ Sent!';
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        // 失败
        console.error('EmailJS Error:', error);
        button.style.background = '#FF3B30';
        button.innerHTML = '✗ Failed';
        alert('Sorry, there was an error sending your message. Please try contacting us directly via email or WhatsApp.');
      })
      .finally(() => {
        // 恢复按钮状态
        setTimeout(() => {
          button.disabled = false;
          button.style.transform = 'scale(1)';
          button.style.background = '#007AFF';
          button.innerHTML = 'Send Message';
        }, 2000);
      });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputHover = (field, isHovered) => {
    setHoveredInputs(prev => ({ ...prev, [field]: isHovered }));
  };

  const handleInputFocus = (field, isFocused) => {
    setFocusedInputs(prev => ({ ...prev, [field]: isFocused }));
  };

  const handleContactItemHover = (item, isHovered) => {
    setHoveredContactItems(prev => ({ ...prev, [item]: isHovered }));
  };

  const getInputStyle = (field) => ({
    width: '100%',
    padding: '18px 24px',
    border: `2px solid ${
      focusedInputs[field] ? '#007AFF' : 
      hoveredInputs[field] ? '#007AFF80' : '#e5e5e7'
    }`,
    borderRadius: '16px',
    fontSize: '1.1em',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
    transform: hoveredInputs[field] || focusedInputs[field] ? 'translateY(-3px) scale(1.01)' : 'translateY(0) scale(1)',
    boxShadow: focusedInputs[field] 
      ? '0 12px 35px rgba(0, 122, 255, 0.25), 0 0 0 1px rgba(0, 122, 255, 0.1)' 
      : hoveredInputs[field] 
        ? '0 8px 25px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 122, 255, 0.05)' 
        : '0 4px 12px rgba(0, 0, 0, 0.08)'
  });

  const getContactItemStyle = (item) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '24px',
    borderRadius: '20px',
    background: hoveredContactItems[item] 
      ? 'rgba(255, 255, 255, 0.8)' 
      : 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    cursor: 'pointer',
    transform: hoveredContactItems[item] ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: hoveredContactItems[item]
      ? '0 15px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3)'
      : '0 8px 25px rgba(0, 0, 0, 0.08)'
  });

  const styles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-60px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(60px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .hero-section {
      animation: fadeInUp 1s ease-out;
    }

    .form-section {
      animation: slideInLeft 0.8s ease-out 0.2s both;
    }

    .contact-info-section {
      animation: slideInRight 0.8s ease-out 0.4s both;
    }

    .floating-element {
      animation: float 6s ease-in-out infinite;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: start;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div style={{ 
        background: 'linear-gradient(180deg, #fff 0%, #f8f9fa 30%, #f0f2f5 70%, #fff 100%)', 
        minHeight: '100vh',
        position: 'relative'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(0, 212, 255, 0.1))',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(175, 82, 222, 0.1), rgba(191, 90, 242, 0.1))',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'float 6s ease-in-out infinite reverse'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          {/* Hero Section */}
           <div 
             id="hero"
             className="hero-section"
             style={{ 
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               textAlign: 'center',
               padding: '230px 0 180px',
               marginBottom: '0px'
             }}
           >
            <div>
              <h1 className="hero-title" style={{
            fontSize: '88px',
            fontWeight: 700,
            color: '#1d1d1f',
            marginBottom: '30px',
            letterSpacing: '-0.02em',
            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            background: 'linear-gradient(135deg, #1d1d1f 0%, #007AFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '24px',
            color: '#86868b',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.5,
            fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
          }}>
            Get in touch with our team for inquiries, feedback, or partnership opportunities
          </p>
            </div>
          </div>

        {/* Contact Form Section */}
        <div className="contact-grid">
          {/* Contact Form */}
          <div 
            className="form-section"
            style={{
              background: 'rgba(245, 245, 247, 0.8)',
              backdropFilter: 'blur(20px)',
              borderRadius: '28px',
              padding: '60px 50px',
              paddingBottom: '100px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h2 style={{
              fontSize: '32px',
              color: '#1d1d1f',
              marginBottom: '30px',
              fontWeight: 600,
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
            }}>
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  color: '#1d1d1f',
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '18px',
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onMouseEnter={() => handleInputHover('name', true)}
                  onMouseLeave={() => handleInputHover('name', false)}
                  onFocus={() => handleInputFocus('name', true)}
                  onBlur={() => handleInputFocus('name', false)}
                  style={getInputStyle('name')}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  color: '#1d1d1f',
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '18px',
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onMouseEnter={() => handleInputHover('email', true)}
                  onMouseLeave={() => handleInputHover('email', false)}
                  onFocus={() => handleInputFocus('email', true)}
                  onBlur={() => handleInputFocus('email', false)}
                  style={getInputStyle('email')}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  color: '#1d1d1f',
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '18px',
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your inquiry..."
                  rows="6"
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  onMouseEnter={() => handleInputHover('message', true)}
                  onMouseLeave={() => handleInputHover('message', false)}
                  onFocus={() => handleInputFocus('message', true)}
                  onBlur={() => handleInputFocus('message', false)}
                  style={{
                    ...getInputStyle('message'),
                    resize: 'vertical',
                    minHeight: '120px',
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}
                />
              </div>
              <button
                type="submit"
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
                style={{
                  background: hoveredButton 
                    ? 'linear-gradient(135deg, #007AFF 0%, #0056CC 100%)' 
                    : '#007AFF',
                  color: '#fff',
                  padding: '20px 40px',
                  borderRadius: '16px',
                  fontSize: '19px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: hoveredButton
                    ? '0 15px 40px rgba(0, 122, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    : '0 8px 25px rgba(0, 122, 255, 0.3)',
                  transform: hoveredButton ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2 style={{
              fontSize: '32px',
              color: '#1d1d1f',
              marginBottom: '40px',
              fontWeight: 600,
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
            }}>
              Get in touch
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Contact Person */}
              <div 
                style={getContactItemStyle('person')}
                onMouseEnter={() => handleContactItemHover('person', true)}
                onMouseLeave={() => handleContactItemHover('person', false)}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #007AFF, #00D4FF)',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  boxShadow: '0 8px 25px rgba(0, 122, 255, 0.3)',
                  transition: 'all 0.4s ease'
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="white"/>
                    <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '21px',
                    color: '#1d1d1f',
                    marginBottom: '8px',
                    fontWeight: 600,
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    Contact Person
                  </h3>
                  <p style={{
                    color: '#86868b',
                    fontSize: '18px',
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    Stevie Jiang
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div 
                style={getContactItemStyle('whatsapp')}
                onMouseEnter={() => handleContactItemHover('whatsapp', true)}
                onMouseLeave={() => handleContactItemHover('whatsapp', false)}
                onClick={() => window.open('https://wa.me/8618505200972', '_blank')}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
                  transition: 'all 0.4s ease'
                }}>
                  <svg width="32" height="32" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '21px',
                    color: '#1d1d1f',
                    marginBottom: '8px',
                    fontWeight: 600,
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    WhatsApp
                  </h3>
                  <p style={{
                    color: '#86868b',
                    fontSize: '18px',
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    +86 18505200972
                  </p>
                </div>
              </div>

              {/* WeChat */}
              <div 
                style={getContactItemStyle('wechat')}
                onMouseEnter={() => handleContactItemHover('wechat', true)}
                onMouseLeave={() => handleContactItemHover('wechat', false)}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1AAD19, #2BA245)',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  boxShadow: '0 8px 25px rgba(26, 173, 25, 0.3)',
                  transition: 'all 0.4s ease'
                }}>
                  <svg width="32" height="32" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
                    <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '21px',
                      color: '#1d1d1f',
                      marginBottom: '8px',
                      fontWeight: 600,
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}>
                      WeChat
                    </h3>
                    <p style={{
                      color: '#86868b',
                      fontSize: '18px',
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}>
                      pns_stevie
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div 
                  style={getContactItemStyle('email')}
                  onMouseEnter={() => handleContactItemHover('email', true)}
                  onMouseLeave={() => handleContactItemHover('email', false)}
                  onClick={() => window.open('mailto:pnsbilliardcloth@gmail.com', '_blank')}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #4285F4, #34A853)',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    boxShadow: '0 8px 25px rgba(66, 133, 244, 0.3)',
                    transition: 'all 0.4s ease'
                  }}>
                    <svg width="32" height="32" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '21px',
                      color: '#1d1d1f',
                      marginBottom: '8px',
                      fontWeight: 600,
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}>
                      Email
                    </h3>
                    <p style={{
                      color: '#86868b',
                      fontSize: '18px',
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}>
                      pnsbilliardcloth@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="floating-element" style={{
                background: 'rgba(245, 245, 247, 0.8)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '32px',
                marginTop: '40px',
                marginBottom: '60px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    background: '#34C759',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px rgba(52, 199, 89, 0.5)',
                    animation: 'pulse 2s ease-in-out infinite'
                  }} />
                  <h4 style={{
                    fontSize: '19px',
                    color: '#1d1d1f',
                    fontWeight: 600,
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    Quick Response
                  </h4>
                </div>
                <p style={{
                  color: '#86868b',
                  fontSize: '18px',
                  lineHeight: 1.6,
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  We typically respond to all inquiries within 24 hours. For urgent matters, please contact us directly via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px 80px',
        }}>
          <div style={{
            background: 'rgba(245, 245, 247, 0.8)',
            backdropFilter: 'blur(20px)',
            borderRadius: '28px',
            padding: '50px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Factory Address */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#007AFF" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="#007AFF" strokeWidth="2" fill="none"/>
                  </svg>
                  <h3 style={{
                    fontSize: '21px',
                    color: '#1d1d1f',
                    fontWeight: 600,
                    margin: 0,
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    Factory Address
                  </h3>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <p style={{
                    color: '#1d1d1f',
                    fontSize: '18px',
                    margin: 0,
                    fontWeight: 500,
                    lineHeight: 1.4,
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    No. 100, Huayang North Road, Jintan District, Changzhou City, Jiangsu Province, China
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '8px'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z" fill="#86868b"/>
                    </svg>
                    <span style={{
                      color: '#86868b',
                      fontSize: '16px',
                      fontWeight: 500,
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}>
                      Contact: Stevie Jiang
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#86868b"/>
                    </svg>
                    <span style={{
                      color: '#86868b',
                      fontSize: '16px',
                      fontWeight: 500,
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}>
                      TEL: +86 18505200972
                    </span>
                  </div>
                </div>
              </div>

              {/* Guangzhou Office */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#007AFF" strokeWidth="2" fill="none"/>
                    <polyline points="9,22 9,12 15,12 15,22" stroke="#007AFF" strokeWidth="2" fill="none"/>
                  </svg>
                  <h3 style={{
                    fontSize: '21px',
                    color: '#1d1d1f',
                    fontWeight: 600,
                    margin: 0,
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    Guangzhou Office
                  </h3>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <p style={{
                    color: '#1d1d1f',
                    fontSize: '18px',
                    margin: 0,
                    fontWeight: 500,
                    lineHeight: 1.4,
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    No. 64, Jinghu Avenue, Times Cloud Harbor, Huadu District, Guangzhou, Guangdong Province, China
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '8px'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z" fill="#86868b"/>
                    </svg>
                    <span style={{
                      color: '#86868b',
                      fontSize: '16px',
                      fontWeight: 500,
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}>
                      Contact: Edwin Liu
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#86868b"/>
                    </svg>
                    <span style={{
                      color: '#86868b',
                      fontSize: '16px',
                      fontWeight: 500,
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}>
                      TEL: +86 13824032283
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
