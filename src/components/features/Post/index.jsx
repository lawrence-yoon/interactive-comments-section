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
  replyLevel,
  replyIndex,
}) {
  const { id, content, createdAt, score, user, replies } = commentData;
  const { username, image } = user;

  return (
    <div
      className={
        (replyLevel > 0 && "reply-container") +
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
            {replyLevel > 0 && <span>@{user.username} </span>}
            {/* <span className="reply-username">isReply?@poster </span> */}
            {content}
          </p>
        </div>
        <div className="buttons-container">
          {currentUser.username === username ? (
            <>
              <DeleteButton />
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
      {replies &&
        replies.map((reply, index) => (
          <Post
            commentData={reply}
            currentUser={currentUser}
            replyLevel={replyLevel + 1}
            replyIndex={index}
          />
        ))}
    </div>
  );
}
