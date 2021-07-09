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
      [event.name]: event.value,
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
        id="user"
        value={username}
        onChange={() => {
          console.log("here");
          if (username.length > 15) alert("글자 길이를 줄여주세요.");
          else onChange(document.getElementById("user"));
        }}
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
