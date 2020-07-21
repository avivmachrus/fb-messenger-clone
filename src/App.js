import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Message from "./components/Message/Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "John", text: "Hello there" },
    { username: "Doe", text: "Hi Guys" },
  ]);
  const [username, setUsername] = useState("");

  const sendMessages = (event) => {
    // all sendMessage logic goes here
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  const inputOnChange = (event) => setInput(event.target.value);

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

      {/* message themselves */}
      {messages.map((message) => {
        return <Message username={username} message={message} />;
      })}
    </div>
  );
}

export default App;
