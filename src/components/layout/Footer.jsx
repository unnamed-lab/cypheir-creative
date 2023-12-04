import "../../styles/css/footer.css";
import xLogo from "../../assets/icons/x.svg";
import gitHub from "../../assets/icons/github.svg";
import globe from "../../assets/icons/globe.svg";
import discord from "../../assets/icons/discord.svg";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-credits">
          Copyright &copy;{year} All rights reserved. Made by{" "}
          <span>Unnamed</span>, <span>Cypheir</span> and many others with love.
          💙
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">
            <img src={xLogo} alt="X/Twitter" />
          </a>
          <a href="#" className="social-icon">
            <img src={discord} alt="Discord" />
          </a>
          <a href="#" className="social-icon">
            <img src={gitHub} alt="GitHub" />
          </a>
          <a href="#" className="social-icon">
            <img src={globe} alt="Web" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
