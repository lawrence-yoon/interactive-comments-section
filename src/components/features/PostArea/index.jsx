import Post from "../Post";

function PostArea({ currentUser, comments }) {
  return (
    <div>
      {comments &&
        comments.map((comment) => (
          <Post commentData={comment} currentUser={currentUser} />
        ))}
    </div>
  );
}

export default PostArea;
