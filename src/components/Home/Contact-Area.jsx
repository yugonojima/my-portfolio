import React from "react";
import "./Contact-Area.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import SwichButton from "../Button";
const ContactArea = () => {
  return (
    <>
      <div className="Area Contact-area">
        <div className="Area-container">
          <h3>Contact</h3>
          <p>
            コンタクトフォームがあるのでそちらからお問い合わせください。
            <br></br>
            TwitterやInstagramのDMからも返信できます。
          </p>
          <SwichButton route="Contact" color="outline-secondary"></SwichButton>
          <div className="icon-container">
            <TwitterIcon style={{ fontSize: 50 }}></TwitterIcon>
            <InstagramIcon style={{ fontSize: 50 }}></InstagramIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
