import React from "react";
import ContactArea from "../Home/Contact-Area";
import "./Thought.css";

const Thought = ({ checked }) => {
  let className = "";
  if (checked) {
    className = "none";
  }
  return (
    <div className={className}>
      <div className="About-top">
        <div className="About-top-container">
          <h3>Thought</h3>
          <p>my ideas of building websites</p>
        </div>
      </div>
      <div className="Thought-body">
        <div className="Thought-container1">
          <div className="Thought-body-title">
            <p>Simple&Modern</p>
            <h4>Design</h4>
          </div>
          <div className="Thought-body-text">
            <p>シンプルでモダンなデザインが好き</p>
            <p>
              デザイナー志望ではないが、UI/UXは大切にしたい
            </p>
          </div>
          <div className="Thought-body-title">
            <p>Who I want to be</p>
            <h4>Future</h4>
          </div>
          <div className="Thought-body-text">
            <p>
              アプリ開発とAIに確固たる知識と経験を有し、頼られる存在となる
            </p>
            <p>
              ハッカソンやkaggleで実績を残す
            </p>
          </div>
          <div className="Thought-body-title">
            <p>self analysis</p>
            <h4>Personality</h4>
          </div>
          <div className="Thought-body-text">
            <p>
              初挑戦が好き<br></br>
              プログラミングは知らないことだらけなとこも楽しい<br></br><br></br>
              プライベートでも行ったことがある場所への旅行を嫌う
            </p><br></br>
            <p>金銭的な苦労も様々経験したため、安定志向な一面も持ち合わせる</p>
          </div>
          <div className="Thought-body-title">
            <p>enjoy life</p>
            <h4>Travel</h4>
          </div>
          <div className="Thought-body-text">
            <p>
              東北地方、中国地方、九州地方は訪れていない県が多い<br></br>
              海外旅行はグアムとタイのみ<br></br><br></br>
              海外旅行を熱望しているが、金銭的、時間的余裕が生まれないことが悩み
            </p>
          </div>
        </div>
      </div>
      <ContactArea></ContactArea>
    </div>
  );
};

export default Thought;
