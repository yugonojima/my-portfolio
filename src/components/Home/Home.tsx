import React from "react";
import "./Home.css";
import SwichButton from "../Button";

const Home = () => {
  return (
    <>
      <div id="top" className="top">
        <p>野島 佑悟</p>
      </div>
      <div className="Area ">
        <div className="Area-container">
          <h3 className="Area-title"> About Me</h3>

          <p>
            現在、都内の大学に通う大学3年生です。<br></br>
            海が好きで今の大学に入りました。<br></br>
            フロントエンドエンジニアを目指して、日々勉強しています。
          </p>
          <SwichButton route="About" color="outline-success"></SwichButton>
        </div>
      </div>
      <div className="Area Thought-area">
        <div className="Area-container">
          <h3>Thought</h3>
          <p>
            ごちゃごちゃしてない、シンプルなデザインが好きです。<br></br>
            ユーザーが不快感を感じない、UI/UXを構築していきたいです。<br></br>
            もちろんレスポンシブで制作します。
          </p>
          <SwichButton route="Thought" color="outline-danger"></SwichButton>
        </div>
      </div>
      <div className="Area Works-area">
        <div className="Area-container">
          <h3>Works</h3>
          <p>
            まだ初学者なので、これといった作品はありませんが、今後作成した作品は
            <br></br>
            随時、githubに掲載していきたいと思います。
          </p>
          <SwichButton route="Works" color="outline-info"></SwichButton>
        </div>
      </div>
      <div className="Area Contact-area">
        <div className="Area-container">
          <h3>Contact</h3>
          <p>
            コンタクトフォームがあるのでそちらからお問い合わせください。
            <br></br>
            TwitterやInstagramのDMからも返信できます。
          </p>
          <SwichButton route="Contact" color="outline-secondary"></SwichButton>
        </div>
      </div>
    </>
  );
};

export default Home;
