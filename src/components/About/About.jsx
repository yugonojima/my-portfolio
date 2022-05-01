import React from "react";
import "./About.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript1} from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMaterialUi, SiPython ,SiTensorflow, SiPhp} from "react-icons/si";

import ContactArea from "../Home/Contact-Area";

const About = ({ checked }) => {
  let className = "";
  if (checked) {
    className = "none";
  }

  return (
    <div className={className}>
      <div className="About-top">
        <div className="About-top-container">
          <h3>About</h3>
          <p>what I am & what I do</p>
        </div>
      </div>
      <div className="About-body">
        <div>
          <div className="About-container1">
            <div className="About-body-title">
              <p>my name is</p>
              <h4>Yugo Nojima</h4>
            </div>
            <div className="About-body-text">
              <p>
                中学はサッカー部、高校、大学ではテニス部に所属していました。
                <br></br>
                埼玉県で生まれ育ち、大学１年生のときに東京に引っ越してきました。
              </p>
              <p>
                現在は、修士1年で、深海に浸漬したセメント系材料に繁茂する微生物の研究を行なっています。
                <br></br>
                大学には海が好きな学生が多いので、友達とはたまにダイビングや釣りをしに行ったりしています。
                <br></br>
                よかったら大学のホームページも見てみてください →
                <a
                  href="https://www.kaiyodai.ac.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  大学ホームページ
                </a>
              </p>
              <p>
                データサイエンティストやAIエンジニアを目指しており、現在E資格の取得を目指して勉強に励んでいます。
              </p>
              <p>
               現段階で、大きな成果物はありませんが、<div></div>将来的には、画像認識や物体検出、画像生成などのアプリケーションを作成してみたいと考えています。
              </p>
            </div>
          </div>
          <div className="About-container2">
            <div className="About-body-title">
              <p>These are my</p>
              <h4>Skills</h4>
            </div>
            <div className="About-skills-icons">
              <div className="Front-end">Front-end</div>
              <div className="Front-end-icons">
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

              <div className="Back-end">Back-end</div>
              <div className="Back-end-icons">
                <div className="About-skill-icon">
                  <SiPython size="5rem"></SiPython>
                  <p>Python</p>
                </div>
                <div className="About-skill-icon">
                  <SiTensorflow size="5rem"></SiTensorflow>
                  <p>Tensorflow</p>
                </div>
                <div className="About-skill-icon">
                  <SiPhp size="5rem"></SiPhp>
                  <p>Php</p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactArea></ContactArea>
    </div>
  );
};

export default About;
