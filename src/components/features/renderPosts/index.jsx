import "./module.css";

function renderPosts({ Component, appData, handleOpenModal }) {
  const { comments, currentUser } = appData;
  const replyLevel = 0;
  return (
    <div className="post-area-container">
      {comments &&
        comments.map((comment) => (
          <Component
            handleOpenModal={handleOpenModal}
            commentData={comment}
            currentUser={currentUser}
            replyLevel={replyLevel}
          />
        ))}
    </div>
  );
}

export default renderPosts;
