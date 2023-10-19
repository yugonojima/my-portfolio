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
        <div className="About-container">
          <div className="About-container1">
            <div className="About-body-title">
              <p>my name is</p>
              <h4>Yugo Nojima</h4>
            </div>
            <div className="About-body-text">
              <div className="picture-container">
                <div className="picture picture4"></div>
                <div className="picture picture5"></div>
                <div className="picture picture6"></div>
              </div>
              <p>
               {'<高校>'}<br></br>
               埼玉県立川口北高等学校<br></br>
               {'<大学/大学院>'}<br></br>
               東京海洋大学 海洋資源環境学部/東京海洋大学大学院 海洋科学技術研究科<br></br>
               <a
                  href="https://www.kaiyodai.ac.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  →大学ホームページ
                </a><br></br>
               {'<部活>'}<br></br>
               中学 : サッカー部 、  高校-大学 : 硬式庭球部<br></br>
               大学三年次には男子主将をしておりました<br></br>
                <br></br>
              </p>
              <p>
                {'<研究テーマ>'}<br></br>
                「セメント系材料表面における深海微生物のバイオフィルム形成能およびその機能の解明」<br></br>
                {'<研究における活動実績>'}<br></br>
                資源素材学会 関東支部 ポスター賞受賞 (2022.8)<br></br>
                学長賞受賞 (2022.9)
                <br></br><br></br>
                海洋研究開発機構(JAMSTEC)の研究船に乗船し、サンプリングを行わせていただいております。
                <br></br><br></br>
              </p>
              <p>
                {'<将来像(2024卒)>'}<br></br>
                ソフトウェアエンジニア、データサイエンティスト、MLOps、AIエンジニア
              </p>
              <p>
               現在は大学での研究が忙しく、プログラミングに時間を割けないことが悩みですが、<br></br>
               時間に余裕ができた際にはコードを書くようにしています。<br></br>
               ほぼ独学です、、。<br></br><br></br>
               AIにも関心があり、G検定とE資格を取得しております。<br></br>
               現在はSignate,kaggleのコンペでメダル獲得に向け奮闘しています。
              </p>
            </div>
            
          </div>
          <div className="About-container2">
            <div className="About-body-title">
              <p>These are my</p>
              <h4>Skills</h4>
            </div>
            <div className="About-skills-icons">
              <div className="Qualification">Qualifications</div>
              <div className="Qualification-icons">
                <div className="Deeplearning-div">
                  <div className="Qualification-icon Qualification-icon1"></div>
                  <p className="Qualification-p">G検定</p>
                </div>
                <div className="Deeplearning-div">
                  <div className="Qualification-icon Qualification-icon2"></div>
                  <p className="Qualification-p">E資格</p>
                </div>
                <div className="toeic-div">
                  <div className="Qualification-icon3"></div>
                  <p className="Qualification-p">TOEIC 780点</p>
                </div>
              </div>


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
