import React from 'react';
import vishalImage from '../assets/vishal.jpg'; // adjust this if you're inside 'pages/'

const Home = () => {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      
      {/* Vishal Profile Image */}
      <img 
        src={vishalImage}
        alt="Vishal Profile"
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1.5rem',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
        }}
      />

      <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
        Hi, I'm Vishal 👋
      </h1>
      <h2 style={{ fontSize: '1.2rem', color: '#555', marginBottom: '1rem' }}>
        Frontend Developer | React.js Enthusiast | Clean UI Creator
      </h2>
      <p style={{ maxWidth: '600px', fontSize: '1rem', lineHeight: '1.6' }}>
        I build responsive and real-world React applications with a focus on clean design, reusability, and performance.
        I'm self-taught, driven by curiosity, and always growing through hands-on experience.
      </p>
    </section>
  );
};

export default Home;
