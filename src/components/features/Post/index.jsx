import "./module.css";
import { useState } from "react";
import {
  ReplyButton,
  EditButton,
  DeleteButton,
  UpvoteButton,
  DownvoteButton,
  UpdateButton,
} from "/src/components/ui/Button";
import TextArea from "../../ui/TextArea";
export default function Post({
  currentUser,
  commentData,
  replyIndex,
  handleOpenModal,
  handleReplyClick,
  handleUpvoteClick,
  handleDownvoteClick,
  handleUpdateButton,
}) {
  const { id, content, createdAt, score, user, replies, replyingTo } =
    commentData;
  const { username, image } = user;
  const [isEditActive, setIsEditActive] = useState(false);

  const [text, setText] = useState({});
  function handleTextChange(e) {
    setText((prevText) => ({
      ...prevText,
      [e.target.name]: e.target.value,
    }));
  }

  function handleUpdate() {
    // handleUpdateButton();
    console.log("handleupdatebutton clicked.");
    setIsEditActive(false);
  }

  function handleEdit() {
    setText(content);
    console.log(content);
    console.log(text);
    setIsEditActive(true);
  }

  return (
    <div
      className={
        (replyingTo && "reply-container") +
        (replyIndex === 0 ? " reply-first-item" : "")
      }
    >
      <div className="card-container">
        <div className="id-container">
          <img src={image.png} alt="" />
          <p className="username">{username}</p>
          {currentUser.username === username && <span>you</span>}
          <p className="timestamp">{createdAt}</p>
        </div>
        <div className="content-container">
          {isEditActive ? (
            <>
              <TextArea handleTextChange={handleTextChange} text={text} />
              <UpdateButton handleClick={handleUpdate} />
            </>
          ) : (
            <p className="content">
              {replyingTo && <span>@{replyingTo} </span>}
              {/* <span className="reply-username">isReply?@poster </span> */}
              {content}
            </p>
          )}
        </div>
        <div className="buttons-container">
          {currentUser.username === username ? (
            <>
              <DeleteButton handleClick={handleOpenModal} />
              <EditButton handleClick={handleEdit} />
            </>
          ) : (
            <ReplyButton handleClick={handleReplyClick} />
          )}
        </div>
        <div className="vote-container">
          <UpvoteButton id={id} handleClick={handleUpvoteClick} />
          <div className="score-container">
            <p>{score}</p>
          </div>
          <DownvoteButton id={id} handleClick={handleDownvoteClick} />
        </div>
      </div>
      {/* need to make new element, effectively a new reply textarea for 
      making a response. it will be a postcompose sized similar to 
      postarea size. make it conditional rendering, toggled on 
      when a certain boolean state is true, like when the reply button is 
      pressed.*/}
      {replies &&
        replies.map((reply, index) => (
          <Post
            key={reply.id}
            handleOpenModal={handleOpenModal}
            handleReplyClick={handleReplyClick}
            handleUpvoteClick={handleUpvoteClick}
            handleDownvoteClick={handleDownvoteClick}
            handleUpdateButton={handleUpdateButton}
            commentData={reply}
            currentUser={currentUser}
            replyIndex={index}
          />
        ))}
    </div>
  );
}
