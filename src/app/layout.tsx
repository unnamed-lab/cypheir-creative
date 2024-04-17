import type { Metadata, ResolvingMetadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/css/globals.css";
import xLogo from "../assets/icons/x.svg";
import gitHub from "../assets/icons/github.svg";
import globe from "../assets/icons/globe.svg";
import discord from "../assets/icons/discord.svg";
import thumbnail from "../assets/img/seoThumb.png";
import Image from "next/image";
import Head from "next/head";
import { WebVitals } from "./web-vitals";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const webData = {
  title: "Cypheir Creative: An Open-Source Hub for Designers & Devs 🌐🎨💻",
  desc: `Connect, create, and grow at Cypheir Creative—where designers and developers unite to innovate and share in an open-source world.`,
  siteName: "Cypheir Creative",
  url: "https://www.cypheir.xyz",
  img: {
    url: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1713341461/cypheir_creative/thumb/thumbnail_main_yabey9.png",
    alt: "Connect, create, and grow at Cypheir Creative—where designers and developers unite to innovate and share in an open-source world.",
    width: 800,
    height: 600,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.svg",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  creator: "@unnamedcodes",
  keywords: [
    "cypheir",
    "cypheir creative",
    "nextjs",
    "developers",
    "cypher",
    "cipher",
    "unnamed",
    "color",
    "colour",
    "palette",
    "colour palette",
    "colour palatte",
    "cypheir-color-scheme",
  ],
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  const { id } = params;
  const siteURL = webData.url;
  return {
    title: webData.title,
    description: webData.desc,
    alternates: {
      canonical: `${siteURL}/${!id ? "" : id}`,
    },
    openGraph: {
      title: webData.title,
      description: webData.desc,
      url: webData.url,
      siteName: webData.siteName,
      images: {
        url: webData.img.url,
        alt: webData.img.alt,
        width: webData.img.width,
        height: webData.img.height,
      },

      locale: "en_UK",
      type: "website",
    },
    // robots: webData.robots,
    twitter: {
      card: "summary_large_image",
      title: webData.title,
      description: webData.desc,
      creator: webData.creator,
      images: webData.img, // Must be an absolute URL
    },
    keywords: webData.keywords,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Head>
          <link
            rel="icon"
            href={
              "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1713345413/cypheir_creative/static/favicon_mn9bzz.ico" ||
              "/favicon.ico"
            }
            sizes="any"
          />
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </Head>
        <WebVitals />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className={`footer`}>
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
            <Image src={xLogo} alt="Visit Cypheir's X(Twitter) Page" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <Image src={discord} alt="Discord" />
          </a>
          <a
            href="https://github.com/unnamed-lab/cypheir-creative"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <Image src={gitHub} alt="GitHub" />
          </a>
          <a
            href="https://www.cypheir.xyz"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <Image src={globe} alt="Web" />
          </a>
        </div>
      </footer>
    </>
  );
}
