import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Logo moved to public/images folder - using direct path

const Navigation = () => {
  const location = useLocation();

  // 样式定义
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: '#000000',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '16px 0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    logo: {
      height: '40px',
      width: 'auto',
      transition: 'opacity 0.3s ease'
    },
    menuContainer: {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1em',
      fontWeight: 500,
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      transition: 'all 0.3s ease',
      position: 'relative',
      padding: '6px 0',
      cursor: 'pointer'
    },
    activeLink: {
      color: '#007AFF'
    },
    socialIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    socialIcon: {
      width: '24px',
      height: '24px',
      opacity: 0.8,
      transition: 'opacity 0.3s ease',
      cursor: 'pointer'
    }
  };

  // 导航链接数据
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/technology', label: 'Technology' },
    { path: '/dealers', label: 'Dealers' },
    { path: '/contact', label: 'Contact' }
  ];

  // 社交媒体链接数据
  const socialLinks = [
    {
      href: 'https://www.facebook.com/share/1C9zJsasvF/?mibextid=wwXIfr',
      title: 'Facebook',
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
    },
    {
      href: 'https://www.instagram.com/pns_billiard_cloth?igsh=MWw1aDE1aGVvODBqbA%3D%3D&utm_source=qr',
      title: 'Instagram',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z'
    },
    {
      href: 'https://x.com/pns_cloth?s=21',
      title: 'X',
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
    }
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo - 左侧 */}
        <div style={styles.logoContainer}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/images/pns logo.png" 
              alt="PNS Logo" 
              style={styles.logo}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            />
          </Link>
        </div>
        
        {/* 导航菜单 - 居中 */}
        <div style={styles.menuContainer}>
          <div style={styles.menu}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...styles.link,
                  ...(location.pathname === link.path ? styles.activeLink : {})
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* 社交媒体图标 - 右侧 */}
        <div style={styles.socialIcons}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.title}
              style={styles.socialIcon}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.8'}
            >
              <svg viewBox="0 0 24 24" fill="#ffffff">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
