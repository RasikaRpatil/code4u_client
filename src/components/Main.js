import React from "react";

import Codehacks from "../screens/codehacks/Codehacks";
import Home from "../screens/home/Home";
import PseudoCode from "../screens/pseudoCode/PseudoCode";
import StudyMaterial from "../screens/studyMaterial/StudyMaterial";
import WebsiteInfo from "../screens/websiteInfo/WebsiteInfo";
import Code4uNavBar from "../screens/code4uNavBar/Code4uNavBar";
import About from "../screens/about/About";
import Blog from "../screens/blog/Blog";

function Main() {
  return (
    <div>
    <section id="code4uNavBar" className="mSection">
      <Code4uNavBar />
    </section>
    
      <section id="home" className="mSection">
        <Home />
      </section>

      <section id="about" className="mSection">
        <About />
      </section>

      <section id="blog" className="mSection">
        <Blog />
      </section>

      <section id="pseudocode" className="mSection">
        <PseudoCode />
      </section>

      <section id="codehacks" className="mSection">
        <Codehacks />
      </section>
      <WebsiteInfo />
      <section id="studymaterial" className="mSection">
        <StudyMaterial />
      </section>
    </div>
  );
}

export default Main;
