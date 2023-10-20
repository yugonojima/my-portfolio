import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Contact.css";
import {useState} from 'react';
import emailjs from '@emailjs/browser'

const Contact = ({ checked }) => {
  let className = "Contact-container";
  if (checked) {
    className = "none";
  }
  
  const [to_name, setTo_Name] = useState("");
  const [from_email, setfrom_email] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
 
  const reset_State = () => {
    setTo_Name("")
    setfrom_email("")
    setSubject("")
    setMessage("")
  }

  const submitInfo = () => {
    if (to_name.length === 0 || from_email.length === 0) {
     alert("未入力の項目があります")
    } else{
      console.log(to_name + from_email + subject + message)
 
      const emailContent = {
        to_name: to_name,
        from_email: from_email,
        subject: subject,
        message: message
      }
 
      emailjs.send('service_h5jpz6k', 'template_fl7q5u7', emailContent, 'sK-UwXT0vrTM-P-21')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
       alert("送信します")
       reset_State()
    }
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
            value={to_name}
            onChange={(event) => {setTo_Name(event.target.value)}}
          ></TextField>
        </div>
        <div className="contact">
          <p>メールアドレス(必須)- Mail</p>
          <TextField
            id="outlined-mail"
            label="Mail"
            variant="outlined"
            fullWidth
            value={from_email}
            onChange={(event) => {setfrom_email(event.target.value)}}
          ></TextField>
        </div>
        <div className="contact">
          <p>題目 - Subject</p>
          <TextField
            id="outlined-subject"
            label="Subject"
            variant="outlined"
            fullWidth
            value={subject}
            onChange={(event) => {setSubject(event.target.value)}}
          ></TextField>
        </div>
        <div className="contact">
          <p>メッセージ本文 - Message</p>
          <TextField
            id="outlined-multiline-message"
            label="Message"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            value={message}
            onChange={(event) => {setMessage(event.target.value)}}
          ></TextField>
        </div>
      </div>
      <div className="contact-footer">
        <p>
         
        </p>
        <div className="contact-btn">
          <button type="button" className="btn btn-success btn-lg btn-block" onClick={submitInfo}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
