import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useAuth } from "../../hooks/useAuth";
import styles from "../../styles/chat.module.css";

const socket = io("http://localhost:3001");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
    const receiveMessage = (message) => {
      setMessages([...messages, message ]);
    };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      from: user.email,
      body: message,
      id: user._id,
    };
    setMessages([...messages, newMessage]);
    setMessage("");
    socket.emit("message", newMessage);
  };

  console.log(messages);

  return (
    <div className={styles.chat}>
      <div className={styles.container}>
        <div className={styles["header-chat"]}>
          <i className="fa-solid fa-chevron-left"></i>
          {/* <img
            src="https://media.discordapp.net/attachments/1041940073597374495/1049472480919699506/1869354.png"
            alt="profile"
          /> */}
          <p>Chat</p>
        </div>
        <ul className={styles["content-chat"]}>
          {messages.map((message, index) =>
            message.from === user.email ? (
              <li key={user._id} className={styles["chat-i"]}>
                {/* Aqui ponen el nombre del que envia */}
                <p className={styles["chat-name"]}>{message.from}</p>
                <p>{message.body}</p>
              </li>
            ) : (
              <li key={user._id} className={styles["chat-from"]}>
                {/* Aqui ponen el nombre del que recibe */}
                <p className={styles["chat-name"]}>{message.from}</p>
                <p>{message.body} </p>
              </li>
            )
          )}
        </ul>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <p>📨</p>
            <input
              name="message"
              type="text"
              placeholder="Write your message..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              autoFocus
            />
          </div>
        </form>
      </div>

      {/* <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-10"
        style={{ margin: "0 auto" }}
      >
        <input
          name="message"
          type="text"
          placeholder="Write your message..."
          onChange={(e) => setMessage(e.target.value)}
          className="border-2 border-zinc-500 p-2 w-full text-black"
          value={message}
          autoFocus
        />

        <ul className="h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`my-2 p-2 table text-sm text-white rounded-md ${
                message.body === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
              }`}
            >
              <b className="text-white"></b>:{message.body}
            </li>
          ))}
        </ul>
      </form> */}
    </div>
  );
}

export default Chat;
