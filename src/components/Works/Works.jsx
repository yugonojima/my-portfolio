import React from "react";
import ContactArea from "../Home/Contact-Area";
import "./Works.css";
import shopReviewScreenShot from "../../images/shopReviewScreenShot.png";
import cell1 from "../../images/cell1.jpeg";
import cell2 from "../../images/cell2.jpeg";
import cellcount1 from "../../images/cellcount1.jpeg";
import cellcount2 from "../../images/cellcount2.jpeg";
import nlp100 from "../../images/nlp100.jpg";
import mitsubishi from "../../images/signate_Mitsubishi.png"


const Works = ({ checked }) => {
  let className = "";
  if (checked) {
    className = "none";
  }
  return (
    <div className={className}>
      <div className="About-top">
        <div className="About-top-container">
          <h3>Works</h3>
          <p>sorry , I haven't made website and services... </p>
        </div>
      </div>
      <div className="Works-body">
        <div className="About-container1">
          <div className="Works-body-title">
            <h4>Works</h4>
          </div>
          <div className="works-title">
            <h5>{'<アプリケーション>'}</h5>
          </div>
          
          <div className="Works-body-container">
            <img src={shopReviewScreenShot} alt="Dog appreciate "></img>
            <a href="https://github.com/yugonojima/shop-review-mobile-app">
              <p className="works-p">食べログアプリ</p>
            </a>
            <p>
              簡単な食べログのようなスマホアプリをReact NativeとType
              Scriptで作成した
            </p>
          </div>

          <div className="Works-body-container">
            <div class="p1 box">
              <div><img src={cell1} alt="cell" className="cell-image"></img><img src={cellcount1} alt="cellcount" className="cell-image"></img></div>
              <div><img src={cell2} alt="cell" className="cell-image"></img><img src={cellcount2} alt="cellcount" className="cell-image"></img></div>
            </div>
            <a href="https://github.com/yugonojima/MobileCellCountApp" >
             <p className="works-p">細菌数自動測定アプリ</p>
            </a>
            <p>
            所属する研究室では、細菌細胞数の測定を顕微鏡観察にて行っていたが、<br></br>
            数取器による手動の測定は大幅に時間を要しかつ誤差も発生する。<br></br>
            そこで細胞数計測を自動化することで、実験サイクルの効率化を図りたいと考え作成した<br></br><br></br>
            開発言語 - Swift , Python <br></br>
            物体検出モデル - YoloV5を量子化したTensorflow Liteモデル<br></br>
            学習データ - 独自に作成したアノテーション画像
            </p>
          </div>

          <div className="works-title">
            <h5>{'<機械学習>'}</h5>
          </div>

          <div className="works-body-container">
          <img src={nlp100} alt="nlp100" className="nlp-image"></img>
          <a href="https://nlp100.github.io/ja/" >
             <p className="works-p">言語処理100本ノック</p>
          </a>
          <p>言語処理モデルの前処理からモデル作成までを一貫して学べる問題集<br></br>
          本問題集の全章にチャレンジし、第十章(モデル作成)にチャレンジした際のスクリプトをgithubにて掲載した
          </p>
          <p>Model - <a  href="https://github.com/yugonojima/NLP100Exercise-Chapter10">seq2seq</a> (encoder:LSTM, decoder:LSTM with attention_mechanism)</p>
          <p>Model - <a  href="https://github.com/yugonojima/NLP100Exercise-Chapter10-BART">BART</a> (Hugging faceより学習済みモデル<a href="https://huggingface.co/ken11/mbart-ja-en">ken11/mbart-ja-en</a>をfine-tuning)</p>
          </div>
         
          <div className="works-body-container">
          <img src={mitsubishi} alt="sigante" className="mitsubishi-image"></img>
          <a href="https://nlp100.github.io/ja/" >
             <p className="works-p">MUFG Data Science Champion Ship 2023</p>
          </a>
          <p>SiganteのCompetition<br></br>
          タスク内容 - クレジットカードの顧客登録情報や決済手段・利用場所といった<br></br>定量及び定性データを元に分析モデルを構築して、カード不正利用を二値分類
          </p>
          <p>Model - <a  href="https://github.com/yugonojima/NLP100Exercise-Chapter10">Stacking</a> ( layer_1: XGBoost, RandomForest, NN, KNeighbors, logistic_Regression, RGF<br></br>
          layer_2: XGBoost,RandomForest, NN<br></br>
          layer_3: logistic_Regression , XGBoost)
          </p>
          <p>最終評価 - 0.6290615 (F1Score) 銅メダル</p>
          </div>

          <div className="works-title">
          <p>
              githubにこれまで勉強してきたことを随時更新していきます
              <br></br>
              githubのアカウント→
              <a
                href="https://github.com/yugonojima"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Yugo Github Acount
              </a>
            </p>
          </div>
        </div>
      </div>
      <ContactArea></ContactArea>
    </div>
  );
};

export default Works;
