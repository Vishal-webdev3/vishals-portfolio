import React from 'react';

const Contact = () => {
  return (
    <section style={{ padding: '3rem 2rem', maxWidth: '700px', margin: 'auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Contact Me</h2>
      <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
        I’m always open to freelance opportunities, collaborations, or just good conversations. Feel free to reach out using the info below!
      </p>

      <div style={{ lineHeight: '2', fontSize: '1rem' }}>
        📧 Email: <a href="mailto:vishalpayrumandala.dev@gmail.com" style={{ color: '#007BFF' }}>vishalpayrumandala.dev@gmail.com</a><br />
        🌐 GitHub: <a href="https://github.com/Vishal-webdev3" target="_blank" rel="noreferrer" style={{ color: '#28a745' }}>github.com/Vishal-webdev3</a><br />
        📍 Location: Hyderabad, India<br />
        🔗  <a href="http://www.linkedin.com/in/vishal-payrumandala-3497b136b/" target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>

      </div>
    </section>
  );
};

export default Contact;
