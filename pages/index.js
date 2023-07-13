import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";
import AboutMe from "../components/home/AboutMe";
import Experience from "../components/home/Experience";
import FavouriteTec from "../components/home/FavouriteTec";
import Portfolio from "../components/home/Portfolio";
import Header from "../components/Header";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const links = (
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
      <a href="https://twitter.com/KashifI53135239">
        <AiFillTwitterCircle />
      </a>
      <a href="https://www.linkedin.com/in/kashif-hussain-1b81231a1/">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/IamKashifHussain">
        <AiFillGithub />
      </a>
      <a href="https://www.youtube.com/channel/UCxJ7aNTPhhQxiIk7D9-nENg">
        <AiFillYoutube />
      </a>
    </div>
  );
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kashif Hussain</title>
        <meta name="description" content="Kashif Hussain's Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          {/* Header */}
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          {/* AboutMe */}
          <AboutMe />
          {/* links */}
          {links}
        </section>
        <Portfolio />
        {/* experince */}
        <Experience />
        {/* FavouriteTec */}
        <FavouriteTec />
      </main>
    </div>
  );
}
