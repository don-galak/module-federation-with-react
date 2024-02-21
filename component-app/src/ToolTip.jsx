import React from "lib-app/react";
import "./tool-tip.css";

export default ({ message, content }) => (
  <div className="tool-tip" data-content={message}>
    {content}
  </div>
);
