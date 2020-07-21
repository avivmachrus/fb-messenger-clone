import React from "react";

const Message = ({ username, text }) => {
  return (
    <div>
      <h2>
        {username}: {text}
      </h2>
    </div>
  );
};

export default Message;
