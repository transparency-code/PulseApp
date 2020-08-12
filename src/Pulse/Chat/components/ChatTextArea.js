import React from "react";

export default function ChatTextArea() {
  return (
    <form>
      <div className="form-group">
        <textarea
          className="form-control"
          id="chatTextArea"
          rows="3"
        ></textarea>
      </div>
    </form>
  );
}
