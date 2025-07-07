import React from 'react';

const projects = [
  {
    title: "To-Do App",
    liveLink: "https://vishal-webdev3.github.io/todoapp",
    github: "https://github.com/Vishal-webdev3/todoapp",
    image: "/screenshots/todo.png",
    description: "CRUD functionality, localStorage persistence, responsive layout."
  },
  {
    title: "Weather App",
    liveLink: "https://vishal-webdev3.github.io/weather-app/",
    github: "https://github.com/Vishal-webdev3/weather-app",
    image: "/screenshots/weather.png",
    description: "API-based live weather fetch with async/await and conditional rendering."
  },
  {
    title: "Expense Tracker",
    liveLink: "https://Vishal-webdev3.github.io/expense-tracker",
    github: "https://github.com/Vishal-webdev3/expense-tracker",
    image: "/screenshots/expense.png",
    description: "Budget visualizer using React, charts, and form-based state updates."
  },
  {
    title: "Notes App",
    liveLink: "https://vishal-webdev3.github.io/notes-app",
    github: "https://github.com/Vishal-webdev3/notes-app",
    image: "/screenshots/notes.png",
    description: "Simple folder-based notes with edit/delete and localStorage."
  },
  {
    title: "Login/Signup UI",
    liveLink: "https://vishal-webdev3.github.io/react-login-signup/",
    github: "https://github.com/Vishal-webdev3/react-login-signup",
    image: "/screenshots/login.png",
    description: "Form validation, mock auth structure, responsive layout."
  }
];

const Projects = () => {
  return (
    <section style={{ padding: '3rem 2rem' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Projects</h2>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {projects.map((proj, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
            <img 
              src={proj.image} 
              alt={proj.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '6px',
                marginBottom: '1rem',
                boxShadow: '0 1px 8px rgba(0,0,0,0.1)'
              }}
            />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div style={{ marginTop: '1rem' }}>
              <a href={proj.liveLink} target="_blank" rel="noreferrer" style={{ marginRight: '1rem', color: '#007BFF' }}>Live</a>
              <a href={proj.github} target="_blank" rel="noreferrer" style={{ color: '#28a745' }}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
