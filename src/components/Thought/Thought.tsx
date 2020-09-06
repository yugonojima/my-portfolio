import React from "react";
import ContactArea from "../Home/Contact-Area";
import './Thought.css'

const Thought = () => {
  return (
    <>
      <div className="About-top">
        <div className="About-top-container">
          <h3>Thought</h3>
          <p>my ideas of building websites</p>
        </div>
      </div>
      <div className="About-body">
        <div className="Thought-container1">
          <div className="About-body-title">
            <p>design</p>
            <h4>Simple&Modern</h4>
          </div>
          <div className="About-body-text">
            <p>シンプルでモダンなデザインが好きです。</p>
            <p>
              デザイナー志望ではありませんが、最低限、目的やテーマに沿ってデザイン・レイアウトしていけるように努力しています。
            </p>
          </div>
          <div className="About-body-title">
            <p>studying</p>
            <h4>Future</h4>
          </div>
          <div className="About-body-text">
            <p>
              まずは、前線で働けるようなフロントエンドエンジニアになれることを目指します。
            </p>
            <p>
              そして、いつかフルスタックエンジニアとして働けることを夢見ています。
            </p>
          </div>
          <div className="About-body-title">
            <p>mobile friendly</p>
            <h4>Responsive</h4>
          </div>
          <div className="About-body-text">
            <p>
              スマホが当たり前の時代ですので、<br></br>
              もちろんレスポンシブで開発します。
            </p>
            <p>スマホでも見やすいようにデザインします。</p>
          </div>
          <div className="About-body-title">
            <p>enjoy life</p>
            <h4>Travel</h4>
          </div>
          <div className="About-body-text">
            <p>
              まだあまり外の景色をみたことがないので、いろんな国や街に行ってみたいです。
            </p>
            <p>旅行に一緒に行ってくれる方募集してます！</p>
          </div>
        </div>
      </div>
      <ContactArea></ContactArea>
    </>
  );
};

export default Thought;
