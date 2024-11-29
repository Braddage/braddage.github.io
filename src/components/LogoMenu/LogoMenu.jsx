import "./LogoMenu.css";
import Headshot from "../../assets/headshot.jpg";
import GitHubLogo from "../../assets/github.png";
import LinkedInLogo from "../../assets/linkedin.png";

const LogoMenu = () => {
  return (
    <div className="logo-menu-container">
    <br></br>
      <img src={Headshot} alt="headshot" className="logo-image"/>

      <div className="logo-list">
        <a href="https://github.com/Braddage" target="_blank" rel="noreferrer">
          <img src={GitHubLogo} alt="GitHub Logo" className="logo-icon" />
        </a>

        <a href="https://www.linkedin.com/in/bradley-greaves-9394b7192/" target="_blank" rel="noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn Logo" className="logo-icon" />
        </a>

      </div>
    </div>
  );
};

export default LogoMenu;