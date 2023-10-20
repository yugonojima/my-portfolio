import React from "react";
import "./Home.css";
import SwichButton from "../Button";
import ContactArea from "./Contact-Area";
const Home = () => {
  return (
    <div>
      <div id="top" className="top">
        <div className="top-container">
          <p>Yugo Nojima </p>
        </div>
      </div>
      <div className="Area">
        <div className="Area-container">
          <div className="picture-container">
            <div className="picture picture1"></div>
            <div className="picture picture2"></div>
            <div className="picture picture3"></div>
          </div>
          <h3 className="Area-title"> About Me</h3>
          <p>
            現在、都内の大学に通う大学院二年生<br></br>
            他ではできない貴重な経験・研究がしたいと考え、現在の大学に入学<br></br>
            研究と並行してプログラミングや機械学習を学んでいる<br></br>
          </p>
          <SwichButton route="About" color="outline-success"></SwichButton>
        </div>
      </div>
      <div className="Thought-area">
        <div className="Area-container">
          <h3>Thought</h3>
          <p>
            現在は研究に重点を置いているが、<br></br>
            卒業後は少しでも早く最前線で活躍できるエンジニアになりたいと考えている<br></br>
            <br></br>
            研究は楽しいが、AIの知識を活かしてビジネスに結びつける働き方は魅力的だと感じる<br></br>
            安定と挑戦の両方を取りたい派<br></br>
          </p>
          <SwichButton route="Thought" color="outline-danger"></SwichButton>
        </div>
      </div>
      <div className="Area Works-area">
        <div className="Area-container">
          <h3>Works</h3>
          <p>
            大学院では論文を執筆する予定。<br></br>
            無事投稿できた際には掲載します
            <br></br><br></br>
            個人開発したプログラムはgithubに随時投稿しているが、<br></br>
            まだあまり大したものは作れていない、、<br></br>
            コンペやインターンで作成したデータ分析/AIモデルのスクリプトもいくつかgithubに掲載している
          </p>
          <SwichButton route="Works" color="outline-info"></SwichButton>
        </div>
      </div>
      <ContactArea />
    </div>
  );
};

export default Home;
