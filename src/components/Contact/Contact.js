import React, { useState } from "react";

import classes from "./Contact.module.css";
import * as API from "../../api/api";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const sendMail = (event) => {
    event.preventDefault();
    API.contactOwner({
      name: name,
      email: email,
      subject: subject,
      content: content,
    })
      .then((resp) => {})
      .catch((error) => {});
    clearFields();
  };

  const clearFields = () => {
    setEmail("");
    setName("");
    setSubject("");
    setContent("");
  };

  const nameChangedHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangedHandler = (event) => {
    setEmail(event.target.value);
  };

  const subjectChangedHandler = (event) => {
    setSubject(event.target.value);
  };

  const contentChangedHandler = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className={classes.Contact}>
      <form className="wrapper" onSubmit={sendMail}>
        <div className="formGroup">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={nameChangedHandler}
            placeholder="Your Name"
          />
        </div>
        <div className="formGroup">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={emailChangedHandler}
            placeholder="example@mail.com"
          />
        </div>
        <div className="formGroup">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={subjectChangedHandler}
            placeholder="What do you want to talk about?"
          />
        </div>
        <div className="formGroup">
          <label>Message</label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={contentChangedHandler}
          ></textarea>
        </div>
        <button className="btn">Send</button>
      </form>
    </div>
  );
}
