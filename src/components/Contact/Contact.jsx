import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Contact.css";

const Contact = ({ checked }) => {
  let className = "Contact-container";
  if (checked) {
    className = "none";
  }
  return (
    <div className={className}>
      <div className="contact-header">
        <h3>お問い合わせ</h3>
      </div>
      <p>いつでも気軽にご連絡ください（＾ ＾）</p>
      <div className="contact-body">
        <div className="contact">
          <p>お名前(必須)- Name</p>
          <TextField
            id="outlined-name"
            label="Name"
            variant="outlined"
            fullWidth
          ></TextField>
        </div>
        <div className="contact">
          <p>メールアドレス(必須)- Mail</p>
          <TextField
            id="outlined-mail"
            label="Mail"
            variant="outlined"
            fullWidth
          ></TextField>
        </div>
        <div className="contact">
          <p>題目 - Subject</p>
          <TextField
            id="outlined-subject"
            label="Subject"
            variant="outlined"
            fullWidth
          ></TextField>
        </div>
        <div className="contact">
          <p>メッセージ本文 - Message</p>
          <TextField
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
          <button type="button" className="btn btn-success btn-lg btn-block">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
