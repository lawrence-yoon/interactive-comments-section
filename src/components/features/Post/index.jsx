import "./module.css";
import {
  ReplyButton,
  EditButton,
  DeleteButton,
  UpvoteButton,
  DownvoteButton,
} from "/src/components/ui/Button";

export default function Post({
  currentUser,
  commentData,
  replyIndex,
  handleOpenModal,
}) {
  const { id, content, createdAt, score, user, replies, replyingTo } =
    commentData;
  const { username, image } = user;

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
          <p className="content">
            {replyingTo && <span>@{replyingTo} </span>}
            {/* <span className="reply-username">isReply?@poster </span> */}
            {content}
          </p>
        </div>
        <div className="buttons-container">
          {currentUser.username === username ? (
            <>
              <DeleteButton handleClick={handleOpenModal} />
              <EditButton />
            </>
          ) : (
            <ReplyButton />
          )}
        </div>
        <div className="vote-container">
          <UpvoteButton />
          <div className="score-container">
            <p>{score}</p>
          </div>
          <DownvoteButton />
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
            handleOpenModal={handleOpenModal}
            commentData={reply}
            currentUser={currentUser}
            replyIndex={index}
          />
        ))}
    </div>
  );
}
