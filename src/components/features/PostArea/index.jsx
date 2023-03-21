/*import React from "react";

function Comment({ author, text, children }) {
  return (
    <div>
      <p>
        <strong>{author}</strong>: {text}
      </p>
      {children && children.map((child) => <Comment {...child} key={child.id} />)}
    </div>
  );
}

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  );
}

export default function App() {
  const comments = [
    {
      id: 1,
      author: "Alice",
      text: "This is a comment",
      children: [
        {
          id: 2,
          author: "Bob",
          text: "This is a reply",
          children: [
            {
              id: 3,
              author: "Charlie",
              text: "This is a nested reply",
            },
          ],
        },
      ],
    },
  ];

  return <CommentList comments={comments} />;
}
 */
