import React from 'react';

const Resume = () => {
  return (
    <section style={{ padding: '3rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>My Resume</h2>
      <p style={{ maxWidth: '700px', margin: 'auto', lineHeight: '1.6' }}>
        I bring experience as a freelance frontend developer with a background in operations. My portfolio reflects real-world React.js projects, strong design logic, and a story of growth. You can view or download my resume below.
      </p>

      <a 
        href="https://Vishal-webdev3.github.io/vishals-portfolio/Vishal-Resume.pdf"
        download="Vishal-Payrumandala-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          display: 'inline-block', 
          marginTop: '2rem', 
          padding: '0.75rem 1.5rem', 
          backgroundColor: '#007BFF', 
          color: '#fff', 
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        📥 Download Resume (PDF)
      </a>
    </section>
  );
};

export default Resume;
