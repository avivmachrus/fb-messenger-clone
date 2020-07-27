import React, { useState, useEffect } from "react";
import { IconButton, FormControl, Input, Snackbar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./App.css";
import Message from "./components/Message/Message";

import firebase from "firebase";
import db from "./firebase";

import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "left",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const sendMessages = (event) => {
    // all sendMessage logic goes here
    event.preventDefault();
    // setMessages([...messages, { username: username, text: input }]);

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  const inputOnChange = (event) => setInput(event.target.value);

  useEffect(() => {
    if (username) {
      setState({ ...state, open: true });
    }
  }, [username]);

  // grab data from firebase
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name.."));
  }, []);

  return (
    <div className="App">
      <img
        className="app_imgLogo"
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="fb-messenger-logo"
      />
      <h1>Hello World !!</h1>
      <h2>
        Welcome <span className="username_color">{username}</span>
      </h2>

      <form className="app_form">
        <FormControl className="app_formControl">
          {/* input field */}

          <Input
            className="app_input"
            placeholder="Enter a message..."
            value={input}
            onChange={inputOnChange}
          />

          {/* button */}
          <IconButton
            className="app_iconButton"
            variant="contained"
            disabled={!input}
            type="submit"
            color="primary"
            onClick={sendMessages}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {/* message themselves */}
        {messages.map(({ id, message }) => {
          return <Message key={id} username={username} message={message} />;
        })}
      </FlipMove>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={`Have a nice day ${username}`}
        key={vertical + horizontal}
      />
    </div>
  );
}

export default App;
