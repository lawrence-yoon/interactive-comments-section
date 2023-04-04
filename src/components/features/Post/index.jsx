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
import PostCompose from "../PostCompose";

export default function Post({
  currentUser,
  commentData,
  replyIndex,
  handleOpenModal,
  handleReplyClick,
  handleUpvoteClick,
  handleDownvoteClick,
  handleUpvoteClick2,
  handleDownvoteClick2,
  handleUpdateButton,
  handleSubmitButton,
  rootId,
}) {
  const { id, content, createdAt, score, user, replies, replyingTo } =
    commentData;
  const { username, image } = user;
  const [isEditActive, setIsEditActive] = useState(false);
  const [isReplyActive, setIsReplyActive] = useState(false);

  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);

  const [text, setText] = useState("");

  function handleUpdate() {
    console.log("handleupdatebutton clicked.");
    console.log("text from post: " + text);
    handleUpdateButton(id, text);

    console.log("commentData: " + JSON.stringify(commentData));
    setIsEditActive(false);
  }

  function handleEdit() {
    console.log("handleeditclicked");
    setText(content);
    setIsEditActive(true);
  }

  function handleReply() {
    handleReplyClick();
    setIsReplyActive(true);
  }

  function handleSubmit(passText) {
    handleSubmitButton(rootId ? rootId : id, commentData, passText);
    setIsReplyActive(false);
  }

  function handleUpvote() {
    if (!isUpvoted && !isDownvoted) {
      handleUpvoteClick(id);
      setIsUpvoted(true);
    } else if (!isUpvoted && isDownvoted) {
      handleUpvoteClick2(id);
      setIsUpvoted(true);
      setIsDownvoted(false);
    } else if (isUpvoted && !isDownvoted) {
      handleDownvoteClick(id);
      setIsUpvoted(false);
    }
  }
  function handleDownvote() {
    if (!isDownvoted && !isUpvoted) {
      handleDownvoteClick(id);
      setIsDownvoted(true);
    } else if (!isDownvoted && isUpvoted) {
      handleDownvoteClick2(id);
      setIsUpvoted(false);
      setIsDownvoted(true);
    } else if (isDownvoted && !isUpvoted) {
      handleUpvoteClick(id);
      setIsDownvoted(false);
    }
  }

  return (
    <>
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
              <div className="edit-container">
                <TextArea
                  handleTextChange={(e) => setText(e.target.value)}
                  text={text}
                />
                <UpdateButton handleClick={handleUpdate} />
              </div>
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
                <DeleteButton handleClick={() => handleOpenModal(id)} />
                <EditButton handleClick={handleEdit} />
              </>
            ) : (
              <ReplyButton handleClick={handleReply} />
            )}
          </div>
          <div className="vote-container">
            <UpvoteButton isUpvoted={isUpvoted} handleClick={handleUpvote} />
            <div className="score-container">
              <p className={(isUpvoted || isDownvoted) && "score-modified"}>
                {score}
              </p>
            </div>
            <DownvoteButton
              isDownvoted={isDownvoted}
              handleClick={handleDownvote}
            />
          </div>
        </div>
        {isReplyActive && (
          <PostCompose
            currentUser={currentUser}
            handleSubmitButton={handleSubmit}
            isReplyActive={isReplyActive}
          />
        )}

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
              handleUpvoteClick2={handleUpvoteClick2}
              handleDownvoteClick2={handleDownvoteClick2}
              handleUpdateButton={handleUpdateButton}
              handleSubmitButton={handleSubmitButton}
              commentData={reply}
              currentUser={currentUser}
              replyIndex={index}
              rootId={id}
            />
          ))}
      </div>
    </>
  );
}
