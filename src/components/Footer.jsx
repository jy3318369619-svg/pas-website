import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: '#000000',
      color: '#ffffff',
      padding: '60px 0 30px 0',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              marginBottom: '20px',
              textAlign: 'left'
            }}>
              <img 
                src="/images/pns-logo.png" 
                alt="PNS Logo" 
                style={{
                  height: '80px',
                  width: 'auto',
                  marginBottom: '16px',
                  display: 'block'
                }}
                onError={(e) => {
                  console.log('Logo failed to load, trying alternative path');
                  e.target.src = '/images/pns logo.png';
                }}
              />
              <p style={{
                color: '#b0b0b0',
                lineHeight: 1.6,
                fontSize: '0.95em',
                margin: 0
              }}>
                Gallop with Passion And Exaltation.
              </p>
            </div>
            
            {/* Follow Us Section */}
            <h4 style={{
              fontSize: '1.1em',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '15px',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Follow Us
            </h4>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1C9zJsasvF/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '18px',
                  opacity: 0.8
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#1877F2';
                  e.target.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.opacity = '0.8';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/pns_billiard_cloth?igsh=MWw1aDE1aGVvODBqbA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '18px',
                  opacity: 0.8
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(45deg, #F56040, #E1306C, #833AB4)';
                  e.target.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.opacity = '0.8';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a 
                href="https://x.com/pns_cloth?s=21"
                target="_blank"
                rel="noopener noreferrer"
                title="X"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '18px',
                  opacity: 0.8
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#000000';
                  e.target.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.opacity = '0.8';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{
            marginLeft: '30px'
          }}>
            <h4 style={{
              fontSize: '1.1em',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Technology', href: '/technology' },
                { name: 'Dealers', href: '/dealers' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a 
                    href={link.href}
                    style={{
                      color: '#b0b0b0',
                      textDecoration: 'none',
                      fontSize: '0.95em',
                      transition: 'color 0.3s ease',
                      display: 'block',
                      padding: '4px 0'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#007BFF'}
                    onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1.1em',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Contact Info
            </h4>
            <div style={{
              color: '#b0b0b0',
              fontSize: '0.95em',
              lineHeight: 1.8
            }}>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#ffffff' }}>Contact Person:</strong><br />
                Stevie Jiang
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#ffffff' }}>WhatsApp:</strong><br />
                +86 18505200972
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#ffffff' }}>Email:</strong><br />
                pnsbilliardcloth@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{
            color: '#888888',
            fontSize: '0.9em',
            textAlign: 'center'
          }}>
            © 2025 PNS Billiard Cloth. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
