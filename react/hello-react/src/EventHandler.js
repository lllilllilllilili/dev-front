import React, { useState } from "react";

export const EventHandler = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;
  const onChange = (event) => {
    const nextForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert("username : " + username + " message : " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChange}
        placeholder="유저명"
      />
      <input
        type="text"
        name="message"
        placeholder="입력"
        value={message}
        onChange={onChange}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
