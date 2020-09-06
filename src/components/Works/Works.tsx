import React from "react";
import ContactArea from "../Home/Contact-Area";
import "./Works.css";
import DogIcon from "../../images/dog.png";
import './Works.css'

const Works = () => {
  return (
    <>
      <div className="About-top">
        <div className="About-top-container">
          <h3>Works</h3>
          <p>sorry , I haven't made website and services... </p>
        </div>
      </div>
      <div className="About-body">
        <div className="About-container1">
          <div className="Works-body-title">
            <h4>Works</h4>
          </div>
          <img src={DogIcon} alt="Dog appreciate image"></img>
          <div className="Works-body-text">
            <p>
              ごめんなさい！まだインターンにも１度も行ったこともないので、これといった作品がありません...
            </p>
            <p>
              githubにこれまで勉強してきたことを随時更新していきますので、
              <br></br>
              一応githubのアカウントを載せておきます。→
              <a href="https://github.com/yugonojima" target="_blank">
                {" "}
                Yugo Github Acount
              </a>
            </p>
          </div>
        </div>
        <ContactArea></ContactArea>
      </div>
    </>
  );
};

export default Works;
