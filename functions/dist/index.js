"use strict";

var functions = require("firebase-functions");
var nodemailer = require("nodemailer");
var gmailEmail = functions.config().gmail.email;
var gmailPassword = functions.config().gmail.password;
var adminEmail = functions.config().admin.email;

// 送信に使用するメールサーバーの設定
var mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// 管理者用のメールテンプレート
var adminContents = function adminContents(data) {
  return "\u4EE5\u4E0B\u5185\u5BB9\u3067\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u3088\u308A\u304A\u554F\u3044\u5408\u308F\u305B\u3092\u53D7\u3051\u307E\u3057\u305F\u3002\n\u304A\u540D\u524D\uFF1A\n" + data.name + "\n\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\uFF1A\n" + data.email + "\n\u5185\u5BB9\uFF1A\n" + data.content + "\n";
};

exports.sendMail = functions.https.onCall(function (data, context) {
  // メール設定
  var adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "ホームページお問い合わせ",
    text: adminContents(data)
  };

  // 管理者へのメール送信
  mailTransport.sendMail(adminMail, function (err, info) {
    if (err) {
      return console.error("send failed. " + err);
    }
    return console.log("send success.");
  });
});
