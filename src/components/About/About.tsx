import React from "react";
import "./About.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiRedux,SiMaterialUi } from "react-icons/si";
import ContactArea from "../Home/Contact-Area";


const About = () => {
  return (
    <>
      <div className="About-top">
        <div className="About-top-container">
          <h3>About</h3>
          <p>what I am & what I do</p>
        </div>
      </div>
      <div className="About-body">
        <div className="About-container1">
          <div className="About-body-title">
            <p>my name is</p>
            <h4>Yugo Nojima</h4>
          </div>
          <div className="About-body-text">
            <p>
              体育会系出身で、フロントエンドエンジニアを目指しています。
              <br></br>
              埼玉県で生まれ育ち、大学１年生のときに東京に引っ越してきました。
            </p>
            <p>
              現在は、大学三年生で、主に海の環境について学んでいます。<br></br>
              海が好きな学生が多いので、友達とはたまにダイビングや釣りをしに行ったりしています。
              <br></br>
              よかったら大学のホームページも見てみてください →
              <a href="https://www.kaiyodai.ac.jp/" target="_blank" rel="noopener noreferrer">
                大学ホームページ
              </a>
            </p>
            <p>
              そんな中、コロナで外出を制限されたことをきっかけに、プログラミングの勉強を始めました。
              <br></br>
              基本的には、独学で勉強していますが、週に１回リモートで友達に勉強会を開いてもらっています。
            </p>
            <p>
              まだまだ未熟物ですが、少しでも成長できるように、日々努力していきたいと思います。
            </p>
          </div>
        </div>
        <div className="About-container2">
          <div className="About-body-title">
            <p>These are my</p>
            <h4>Skills</h4>
          </div>
          <div className="About-skills-icons">
            <div className="About-skill-icon">
              <AiFillHtml5 size="5rem"></AiFillHtml5>
              <p>html5</p>
            </div>
            <div className="About-skill-icon">
              <DiCss3 size="5rem"></DiCss3>
              <p>css3</p>
            </div>
            <div className="About-skill-icon">
              <DiJavascript1 size="5rem"></DiJavascript1>
              <p>JavaScript</p>
            </div>
            <div className="About-skill-icon">
              <p></p>
              <BsFillBootstrapFill size="5rem"></BsFillBootstrapFill>
              <p>BootStrap</p>
            </div>

            <div className="About-skill-icon">
              <FaReact size="5rem"></FaReact>
              <p>React</p>
            </div>
            <div className="About-skill-icon">
              <SiRedux size="5rem"></SiRedux>
              <p>Redux</p>
            </div>
            <div className="About-skill-icon">
              <SiMaterialUi size="5rem"></SiMaterialUi>
              <p>MaterialUi</p>
            </div>
          </div>
        </div>
        <ContactArea></ContactArea>
      </div>
    </>
  );
};

export default About;
