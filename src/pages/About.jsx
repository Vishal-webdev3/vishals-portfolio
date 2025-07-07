import React from 'react';
import vishalImage from '../assets/vishal.jpg';

const About = () => {
  return (
    <section style={{ padding: '3rem 2rem', maxWidth: '800px', margin: 'auto', lineHeight: '1.8', textAlign: 'center' }}>
      
      {/* 🌟 Vishal's Profile Photo */}
      <img
        src={vishalImage}
        alt="Vishal Payrumandala"
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      />

      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>About Me</h2>

      <p>
        I’m Vishal, a frontend developer with a strong foundation in React.js and a focus on clean, responsive UI development. With a self-driven transition from operations into development, I've built multiple real-world web applications using modern JavaScript, API integration, and reusable component design.
      </p>
      <p>
        My experience spans working with mock clients, live deployment using GitHub Pages & Netlify, and contributing to client-ready tools across different domains. I enjoy transforming ideas into practical digital interfaces that are fast, scalable, and user-focused.
      </p>
      <p>
        I’m confident in tools like React Router, state management, form handling, and chart visualization. I approach every project with attention to detail, clear logic, and adaptability to evolving requirements.
      </p>
      <p>
        Currently open to frontend roles where I can continue to grow and contribute to meaningful development teams.
      </p>
    </section>
  );
};

export default About;
