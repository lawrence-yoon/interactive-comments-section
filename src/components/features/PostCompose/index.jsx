import "./module.css";
import { useState } from "react";
import { SendButton } from "/src/components/ui/Button";
import TextArea from "../../ui/TextArea";

function PostCompose({
  appData,
  setAppData,
  commentCounter,
  setCommentCounter,
}) {
  const initialTextState = { content: "" };
  const [text, setText] = useState(initialTextState);

  const { currentUser, comments } = appData;
  function handleTextChange(e) {
    setText((prevText) => ({
      ...prevText,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmitPost() {
    setAppData({
      comments: [
        ...comments,
        {
          id: commentCounter,
          content: text.content,
          createdAt: "just now",
          score: 0,
          user: currentUser,
          replies: [],
        },
      ],
      currentUser: currentUser,
    });
    console.log(appData);
    setCommentCounter((prev) => prev + 1);
    setText(initialTextState);
  }

  return (
    <div className="compose-container">
      <div className="compose-post">
        <img src={currentUser.image.png} alt="picture" />
        <TextArea handleTextChange={handleTextChange} text={text.content} />
        {/* ternary to render send button or update button for different active states */}
        <SendButton messageId={commentCounter} handleClick={handleSubmitPost} />
      </div>
    </div>
  );
}

export default PostCompose;
