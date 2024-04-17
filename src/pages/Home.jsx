import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import app from "../styles/css/app.module.css";
import "../styles/css/main.css";
import devImg from "../assets/developer.svg";
import workImg from "../assets/working.svg";
import Image from "next/image";

function Home() {
  const getTheme = useOutletContext();
  const [randLook, setRandomLook] = React.useState(true);
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 2)
    randomNum >= 1 ? setRandomLook(true) : setRandomLook(false);
  }, []);


  return (
    <>
      <main>
        <Hero isDarkTheme={getTheme} randLook={randLook} />
        {/* <Service /> */}
      </main>
    </>
  );
}

function Service() {
  const serviceArr = [
    {
      title: "Design",
      icon: (
        <>
          <svg
            height="24"
            version="1.1"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M17.484 12c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM14.484 8.016c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM9.516 8.016c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM6.516 12c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM12 3c4.969 0 9 3.609 9 8.016 0 2.766-2.25 4.969-5.016 4.969h-1.734c-0.844 0-1.5 0.656-1.5 1.5 0 0.375 0.141 0.703 0.375 0.984s0.375 0.656 0.375 1.031c0 0.844-0.656 1.5-1.5 1.5-4.969 0-9-4.031-9-9s4.031-9 9-9z" />
          </svg>
        </>
      ),
      url: "#",
    },
    {
      title: "Component",
      icon: (
        <>
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m3.553 18.895 4 2a1.001 1.001 0 0 0 .894 0L12 19.118l3.553 1.776a.99.99 0 0 0 .894.001l4-2c.339-.17.553-.516.553-.895v-5c0-.379-.214-.725-.553-.895L17 10.382V6c0-.379-.214-.725-.553-.895l-4-2a1 1 0 0 0-.895 0l-4 2C7.214 5.275 7 5.621 7 6v4.382l-3.447 1.724A.998.998 0 0 0 3 13v5c0 .379.214.725.553.895zM8 12.118l2.264 1.132-2.913 1.457-2.264-1.132L8 12.118zm4-2.5 3-1.5v2.264l-3 1.5V9.618zm6.264 3.632-2.882 1.441-2.264-1.132L16 12.118l2.264 1.132zM8 18.882l-.062-.031V16.65L11 15.118v2.264l-3 1.5zm8 0v-2.264l3-1.5v2.264l-3 1.5zM12 5.118l2.264 1.132-2.882 1.441-2.264-1.132L12 5.118z" />
          </svg>
        </>
      ),
      url: "#",
    },
    {
      title: "Templates",
      icon: (
        <>
          <svg
            id="Lager_1"
            style={{ enableBackground: "new -265 388.9 64 64;" }}
            version="1.1"
            viewBox="-265 388.9 64 64"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M-210.6,411.3h-44.8c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h44.8c0.9,0,1.6,0.7,1.6,1.6v9.6   C-209,410.6-209.7,411.3-210.6,411.3z" />
              <path d="M-236.2,427.3h-19.2c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h19.2c0.9,0,1.6,0.7,1.6,1.6v9.6   C-234.6,426.6-235.3,427.3-236.2,427.3z" />
              <path d="M-210.6,427.3h-19.2c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h19.2c0.9,0,1.6,0.7,1.6,1.6v9.6   C-209,426.6-209.7,427.3-210.6,427.3z" />
              <path d="M-245.8,443.3h-9.6c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h9.6c0.9,0,1.6,0.7,1.6,1.6v9.6   C-244.2,442.6-244.9,443.3-245.8,443.3z" />
              <path d="M-226.6,443.3h-12.8c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h12.8c0.9,0,1.6,0.7,1.6,1.6v9.6   C-225,442.6-225.7,443.3-226.6,443.3z" />
              <path d="M-210.6,443.3h-9.6c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h9.6c0.9,0,1.6,0.7,1.6,1.6v9.6   C-209,442.6-209.7,443.3-210.6,443.3z" />
            </g>
          </svg>
        </>
      ),
      url: "#",
    },
  ];
  return (
    <>
      <section className={app.service_body}>
        <div className="service-container">
          <ul className="service-list">
            {serviceArr.map((el, key) => {
              return (
                <>
                  <li key={key} className="service-item">
                    <a key={key} href={el.url} className="service-link">
                      {el.icon}
                      {el.title}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

function Hero({ isDarkTheme, randLook }) {
  return (
    <>
      <section className={`${app.hero_body} ${isDarkTheme}`}>
        <div className={`hero-container ${isDarkTheme}`}>
          <div className="hero-container__text">
            <HeroHeader randLook={randLook} />
            <HeroRedirect
              isDarkTheme={isDarkTheme}
              randLook={randLook}
              githubUrl={"https://github.com/unnamed-lab/cypheir-creative"}
            />
          </div>
          <div className="hero-container__image">
            <HeroImagery randLook={randLook} />
          </div>
        </div>
      </section>
    </>
  );
}

function HeroImagery({ randLook }) {
  const imagery = randLook ? devImg : workImg;
  return (
    <>
      <Image src={imagery} alt="Get started" />
      <svg
        className="hero-container__image__bg"
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stopColor="rgba(240.272, 240.272, 240.272, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stopColor="rgba(255, 255, 255, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M22.5,-27C28.9,-26.3,33.7,-19.4,35.5,-12C37.3,-4.6,36.1,3.4,33.4,10.6C30.7,17.8,26.5,24.2,20.7,28.2C14.8,32.1,7.4,33.5,2,30.8C-3.4,28,-6.8,21.1,-10.1,16.3C-13.3,11.5,-16.2,8.9,-18,5.4C-19.7,1.9,-20.2,-2.4,-19,-6.2C-17.8,-10,-14.9,-13.2,-11.4,-14.9C-8,-16.6,-4,-16.7,2,-19.5C8.1,-22.3,16.1,-27.8,22.5,-27Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: "all 0.3s ease 0s;" }}
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
    </>
  );
}

function HeroHeader({ randLook }) {
  const greetingTypo = randLook ? "Welcome to" : "This is";
  const description = randLook
    ? "Your go-to destination for web design inspiration and a collection of web components to spark creativity in developers."
    : "Collaborate with other developers and have fun building awesome web creations.";
  const subheading = randLook
    ? "Design. Learn. Collaborate."
    : "Build. Innovate. Grow.";
  return (
    <>
      <div className="text-container">
        <h1 className="hero-header">
          {greetingTypo}
          <br />
          <span className="company">Cypheir</span>
          <span className="project">Creative</span>
        </h1>

        <h4 className="hero-subheading">{subheading}</h4>
        <div className="hero-description">{description}</div>
      </div>
    </>
  );
}

function HeroRedirect({ isDarkTheme, randLook, githubUrl }) {
  const redirectTypo = randLook ? "Get started" : "Let's explore";
  return (
    <>
      <div className="extra-container">
        <a href="#" className="btn primary-btn">
          {redirectTypo}
        </a>
        <a href={githubUrl} className={`btn icon-btn  ${isDarkTheme}`}>
          <svg
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
          </svg>
        </a>
      </div>
    </>
  );
}

export default Home;
