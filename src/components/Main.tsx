import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import jeevanAvatar from '../assets/images/jeevan.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={jeevanAvatar} alt="Jeevan K B" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jeevankb-cse" target="_blank" rel="noreferrer" title="GitHub"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/jeevankb-cse" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:jeevankenchalli514@gmail.com" target="_blank" rel="noreferrer" title="Email"><EmailIcon/></a>
          </div>
          <h1>Jeevan K B</h1>
          <p>AI/ML & Python Developer | Full Stack Enthusiast</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jeevankb-cse" target="_blank" rel="noreferrer" title="GitHub"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/jeevankb-cse" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:jeevankenchalli514@gmail.com" target="_blank" rel="noreferrer" title="Email"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;