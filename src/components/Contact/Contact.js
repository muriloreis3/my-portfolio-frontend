import React, { useState } from "react";
import { useForm } from "react-hook-form";

import classes from "./Contact.module.css";
import * as API from "../../api/api";

export default function Contact(props) {
  const { register, handleSubmit, errors } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const sendMail = () => {
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
      <form className="wrapper" onSubmit={handleSubmit(sendMail)}>
        <div className="formGroup">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={nameChangedHandler}
            placeholder="Your Name"
            ref={register({ required: true })}
            className={errors.name && "inputError"}
          />
          {errors.name && <span className="error">This field is required</span>}
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
            ref={register({ required: true })}
            className={errors.email && "inputError"}
          />
          {errors.email && <span className="error">This field is required</span>}
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
            ref={register({ required: true })}
            className={errors.subject && "inputError"}
          />
          {errors.subject && <span className="error">This field is required</span>}
        </div>
        <div className="formGroup">
          <label>Message</label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={contentChangedHandler}
            ref={register({ required: true })}
            className={errors.content && "inputError"}
          ></textarea>
          {errors.content && <span className="error">This field is required</span>}
        </div>
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
}
