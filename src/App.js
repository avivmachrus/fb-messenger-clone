import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessages = (event) => {
    // all sendMessage logic goes here
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>hello world</h1>

      <form>
        {/* input field */}
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        {/* button */}
        <button type="submit" onClick={sendMessages}>
          Send Message
        </button>
      </form>

      {/* message themselves */}
      {messages.map((message) => {
        return <p>{message}</p>;
      })}
    </div>
  );
}

export default App;
