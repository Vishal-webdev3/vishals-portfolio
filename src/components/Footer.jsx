import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#222", color: "#fff", textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
      <p>&copy; {new Date().getFullYear()} Vishal Payrumandala • Frontend Developer</p>
    </footer>
  );
};

export default Footer;
