import React from "react";
import ContactArea from "../Home/Contact-Area";
import "./Works.css";
import shopReviewScreenShot from "../../images/shopReviewScreenShot.png";

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
          <img src={shopReviewScreenShot} alt="Dog appreciate "></img>
          <div className="Works-body-text">
            <a href="https://github.com/yugonojima/shop-review-mobile-app">
              <p>食べログアプリ</p>
            </a>

            <p>
              簡単な食べログのようなスマホアプリをReact NativeとType
              Scriptで作成しました
            </p>
            <p>
              githubにこれまで勉強してきたことを随時更新していきますので、
              <br></br>
              githubのアカウントを載せておきます。→
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
