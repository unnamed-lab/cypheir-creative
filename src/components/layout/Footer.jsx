import "../../styles/css/footer.css";
import xLogo from "../../assets/icons/x.svg";
import gitHub from "../../assets/icons/github.svg";
import globe from "../../assets/icons/globe.svg";
import discord from "../../assets/icons/discord.svg";

function Footer({ getTheme }) {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className={`footer ${getTheme}`}>
        <div className="footer-credits">
          Copyright &copy;{year} All rights reserved. Made by{" "}
          <span>Unnamed</span> and many others with love. 💙
        </div>
        <div className="footer-social">
          <a
            href="https://twitter.com/cypheir_tech"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <img src={xLogo} alt="Visit Cypheir's X(Twitter) Page" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <img src={discord} alt="Discord" />
          </a>
          <a
            href="https://github.com/unnamed-lab/cypheir-creative"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <img src={gitHub} alt="GitHub" />
          </a>
          <a
            href="https://www.cypheir.xyz"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <img src={globe} alt="Web" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
