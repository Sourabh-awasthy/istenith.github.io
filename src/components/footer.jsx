/* eslint-disable */

import BlueLogo from "../static/images/iste-logo-blue.png";
export default function footer (){

  const footerNavs = [
      {
          href: 'https://github.com/istenith',
          name: 'Github'
      },
      {
          href: 'https://www.linkedin.com/company/iste-nith/',
          name: 'LinkedIn'
      },
      {
          href: 'https://www.facebook.com/teamistenith/',
          name: 'Facebook'
      },
      {
          href: 'https://www.instagram.com/teamistenith',
          name: 'Instagram'
      }
  ];

  const footerStyles = {
      paddingTop: '10rem',
  };

  const containerStyles = {
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '0 1rem',
      color: '#f3f4f6',
  };

  const logoContainerStyles = {
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
      textAlign: 'center',
      maxWidth: '28rem',
      margin: '0 auto',
  };

  const logoStyles = {
      width: '8rem',
      margin: '0 auto',
  };

  const bottomContainerStyles = {
      marginTop: '2.5rem',
      paddingTop: '2.5rem',
      paddingBottom: '2.5rem',
      borderTop: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
  };

  const ulStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '1.5rem',
      marginBottom: '0',
      fontSize: '0.875rem',
  };

  const liStyles = {
      color: '#f3f4f6',
      transition: 'color 0.15s',
  };

  const aStyles = {
      color: '#f3f4f6',
      textDecoration: 'none',
  };

  return (
      <footer style={footerStyles}>
          <div style={containerStyles}>
              <div style={logoContainerStyles}>
                  <img 
                    src={BlueLogo} 
                    alt="ISTE Logo"
                    style={logoStyles} 
                  />
                  <p>
                      ISTE NITH
                  </p>
              </div>
              <div style={bottomContainerStyles}>
                  <p>© 2024 All rights reserved.</p>
                  <ul style={ulStyles}>
                      {
                          footerNavs.map((item, idx) => (
                              <li
                                  key={idx}
                                  style={liStyles}
                                  onMouseEnter={e => e.target.style.color = '#6b7280'}
                                  onMouseLeave={e => e.target.style.color = '#f3f4f6'}
                              >
                                  <a style={aStyles} href={item.href}>
                                      {item.name}
                                  </a>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          </div>
          <style jsx>{`
              @media (max-width: 600px) {
                  ul {
                      gap: 0.1px;
                  }
              }

              @media (min-width: 601px) {
                  ul {
                      gap: 2rem;
                  }
              }
          `}</style>
      </footer>
  );
};
