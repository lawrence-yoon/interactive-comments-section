import "./module.css";
import {
  ReplyButton,
  EditButton,
  DeleteButton,
  UpvoteButton,
  DownvoteButton,
} from "../../ui/Button";

export default function Post({ currentUser, comments }) {
  const example = comments[1];
  const { id, content, createdAt, score, user, replies } = example;
  const { username, image } = user;

  return (
    <div className="card-container">
      <div className="id-container">
        <img src={image.png} alt="" />
        <p className="username">{username}</p>
        {currentUser.username === username && <span>you</span>}
        <p className="timestamp">{createdAt}</p>
      </div>
      <div className="content-container">
        <p className="content">
          <span className="reply-username">isReply?@poster </span>
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
  );
}
