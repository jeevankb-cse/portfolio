import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/jeevankb-cse" target="_blank" rel="noreferrer" title="GitHub"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/jeevankb-cse" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/jeevankb-cse" target="_blank" rel="noreferrer">Jeevan K B</a> with 💜</p>
    </footer>
  );
}

export default Footer;