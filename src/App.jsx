import "./App.css";

function App() {
  return (
   <>
      <header className="navbar">
      <h2 className="logo"></h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </header>

      <section id="home" className="hero">
      <div className="hero-text">

        <p>What's Up?</p>
        <h1>Julian Sevilla</h1>
        <h3>BSIT Student | UI/UX Designer</h3>

        

        <div className="buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn outline">Contact Me</a>
        </div>
        </div>

        <div className="hero-img">
        <img src="public/profile.jpg" alt="profile" />
        </div>
      </section>



      <section id="about" className="about">
      <div className="about-box">
      <h2>About Me</h2>

        <p>
          I am an IT student passionate about UI/UX design and frontend development. 
          I enjoy creating clean, responsive, 
          and user-friendly websites that combine design and functionality.
        </p>

        <p>
          I focus on building well-structured layouts and improving user experience, 
          while continuously learning new tools and technologies to enhance my skills.
      </p>
      </div>
      </section>



      <section id="skills" className="skills-section">
  <h2>Skills</h2>

  <div className="skills-container">
    <div className="skill-card">
      <img src="public/htmllogo.jpg" alt="HTML" />
      <p>HTML</p>
    </div>

    <div className="skill-card">
      <img src="public/css.jpg.png" alt="CSS" />
      <p>CSS</p>
    </div>

    <div className="skill-card">
      <img src="public/jsscript.jpg" alt="JavaScript" />
      <p>JavaScript</p>
    </div>

    

    <div className="skill-card">
      <img src="public/figma.jpg.png" alt="Figma" />
      <p>Figma</p>
    </div>
  </div>
</section>



      <section id="projects" className="projects">
  <h2>My Projects</h2>

  <div className="project-list">

    <div className="card">
      <h3>Portfolio Website</h3>
      <p> 
        A personal website showcasing my skills and projects
        using a clean and responsive design.
      </p>
      <a 
        href="https://www.figma.com/proto/ZQ7xST3X0wWnkib89gRsq3?node-id=0-1&t=xkFodHyU3WOzc0UA-6" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn"
      >
        View Project
      </a>
    </div>

    <div className="card">
      <h3>Commnect Barangay</h3>
      <p>
        A group project that provides a simple platform for sharing 
        announcements, events, and services within the community.
      </p>
      <a 
        href="https://www.figma.com/design/ilQePnLsQ2UcLWBLGx0Sp6/Commnect?m=auto&t=xkFodHyU3WOzc0UA-6" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn"
      >
        View Project
      </a>
    </div>

    <div className="card">
      <h3>UI/UX Design</h3>
      <p>
        A collection of interface designs focused on clarity, simplicity,
        and user-friendly layouts.
      </p>
      <a 
        href="https://www.figma.com/proto/IvXj0QjCI5fKZ2fGVnOpSv?node-id=0-1&t=xkFodHyU3WOzc0UA-6" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn"
      >
        View Project
      </a>
    </div>

  </div>
</section>




    <section id="contact" className="contact">
    <div className="contact-box">
    <h2>Contact Me</h2>

    

    <div className="contact-links">
    <a href="mailto:juliansevilla0809@gmail.com">juliansevilla0809@gmail.com</a>
    <a href="https://github.com/Julyan446">Julyan446</a>
    <a>09915908049</a>
    </div>
    </div>
    </section>

    <footer className="footer">
    <p></p>
    </footer>
    </>
  );
}

export default App;