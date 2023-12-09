import app from "../styles/css/app.module.css";
import "../styles/css/main.css";
import devImg from "../assets/developer.svg";
import { useOutletContext } from "react-router-dom";

function Home() {
  // const isDarkTheme = true ? "dark" : "";
  const getTheme = useOutletContext(); 
  return (
    <>
      <main>
        <Hero isDarkTheme={getTheme} />
      </main>
    </>
  );
}

function Hero({isDarkTheme}) {
  return (
    <>
      <section className={`${app.main_body} ${isDarkTheme}`}>
        <div className={`hero-container ${isDarkTheme}`}>
          <div className="hero-container__text">
            <div className="text-container">
              <h1 className="hero-header">
                Welcome to
                <br />
                <span className="company">Cypheir</span>
                <span className="project">Creative</span>
              </h1>

              <h4 className="hero-subheading">Design. Learn. Collaborate.</h4>
              <div className="hero-description">
                Your go-to destination for web design inspiration and a
                collection of web components to spark creativity in developers
              </div>
            </div>
            <div className="extra-container">
              <a href="#" className="btn primary-btn">
                Get started
              </a>
              {/* <a href="#" className="btn icon-btn"></a> */}
            </div>
          </div>
          <div className="hero-container__image">
            <img src={devImg} alt="Get started" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
