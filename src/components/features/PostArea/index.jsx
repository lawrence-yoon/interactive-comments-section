import "./module.css";
import Post from "../Post";

function PostArea({ currentUser, comments }) {
  const replyLevel = 0;
  return (
    <div className="post-area-container">
      {comments &&
        comments.map((comment) => (
          <Post
            commentData={comment}
            currentUser={currentUser}
            replyLevel={replyLevel}
          />
        ))}
    </div>
  );
}

export default PostArea;
