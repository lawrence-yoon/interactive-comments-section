import "./module.css";
import { useState } from "react";
import { SendButton, ReplySubmitButton } from "/src/components/ui/Button";
import TextArea from "../../ui/TextArea";

function PostCompose({ currentUser, handleSubmitButton, isReplyActive }) {
  const initialTextState = "";
  const [text, setText] = useState(initialTextState);

  function handleSubmit() {
    handleSubmitButton(text);
    setText(initialTextState);
  }

  function handleReply() {
    console.log("reply clicked");
  }

  return (
    <div className="compose-container">
      <div className={isReplyActive ? "reply-post" : "compose-post"}>
        <img src={currentUser.image.png} alt="picture" />
        <TextArea
          handleTextChange={(e) => setText(e.target.value)}
          text={text}
        />
        {/* ternary to render send button or update button for different active states */}
        {isReplyActive ? (
          <ReplySubmitButton handleClick={handleReply} />
        ) : (
          <SendButton handleClick={handleSubmit} />
        )}
      </div>
    </div>
  );
}

export default PostCompose;
