import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Contact.css";

const firebase = require("firebase");
require("firebase/functions");

const Contact = ({ checked }) => {
  let className = "Contact-container";
  if (checked) {
    className = "none";
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.name = e.target.name.value;
    data.email = e.target.email.value;
    data.content = e.target.content.value;
    let sendMail = firebase.functions().httpsCallable("sendMail");
    sendMail(data);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.content.value = "";
    e.target.value = "";
  };
  return (
    <div className={className}>
      <form onSubmit={onSubmit}>
        <div className="contact-header">
          <h3>お問い合わせ</h3>
        </div>
        <p>いつでも気軽にご連絡ください（＾ ＾）</p>
        <div className="contact-body">
          <div className="contact">
            <p>お名前(必須)- Name</p>
            <TextField
              type="text"
              name="name"
              id="outlined-name"
              label="Name"
              variant="outlined"
              fullWidth
            ></TextField>
          </div>
          <div className="contact">
            <p>メールアドレス(必須)- Mail</p>
            <TextField
              name="email"
              type="mail"
              id="outlined-mail"
              label="Mail"
              variant="outlined"
              fullWidth
            ></TextField>
          </div>
          {/* <div className="contact">
            <p>題目 - Subject</p>
            <TextField
              id="outlined-subject"
              label="Subject"
              variant="outlined"
              fullWidth
            ></TextField>
          </div> */}
          <div className="contact">
            <p>メッセージ本文 - Message</p>
            <TextField
              name="content"
              id="outlined-multiline-message"
              label="Message"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
            ></TextField>
          </div>
        </div>
        <div className="contact-footer">
          <p>
            ※このページは見た目だけ作っただけなので、ボタンを押しても送信されません。
          </p>
          <div className="contact-btn">
            <button type="submit" className="btn btn-success btn-lg btn-block">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
