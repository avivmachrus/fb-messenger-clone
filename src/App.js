import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Message from "./components/Message/Message";

import firebase from "firebase";
import db from "./firebase";

import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

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
      <h1>Hello Newbee</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          {/* input field */}
          <InputLabel>Enter a Message...</InputLabel>
          <Input value={input} onChange={inputOnChange} />

          {/* button */}
          <Button
            variant="contained"
            disabled={!input}
            type="submit"
            color="primary"
            onClick={sendMessages}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      <FlipMove>
        {/* message themselves */}
        {messages.map(({ id, message }) => {
          return <Message key={id} username={username} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
