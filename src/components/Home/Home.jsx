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
      <div className="Area ">
        <div className="picture-container">
          <div className="picture picture1"></div>
          <div className="picture picture2"></div>
          <div className="picture picture3"></div>
        </div>

        <div className="Area-container">
          <h3 className="Area-title"> About Me</h3>

          <p>
            現在、都内の大学に通う大学院一年生です。<br></br>
            海が好きで現在の大学に入りました。<br></br>
            データサイエンティスト・AIエンジニアを目指して、<br></br>日々勉強しています。
          </p>
          <SwichButton route="About" color="outline-success"></SwichButton>
        </div>
      </div>
      <div className=" Thought-area">
        <div className="Area-container">
          <h3>Thought</h3>
          <p>
            趣味程度でSignateやKaggleでのCompetitionに参加しています<br></br>
            将来的には、機械学習モデルを組み込んだアプリを作成したいです。<br></br>
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
      <ContactArea />
    </div>
  );
};

export default Home;
