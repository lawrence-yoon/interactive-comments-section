import "./App.css";
import Attribution from "./components/features/Attribution";
import PostArea from "./components/features/PostArea";
import PostCompose from "./components/features/PostCompose";
import Post from "./components/features/Post";
import Modal from "./components/features/Modal";

import { useState } from "react";
import data from "../data.json";

function App() {
  const [appData, setAppData] = useState(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState(0);
  //link this comment counter to when you are creating a new entry with setAppData
  const [commentCounter, setCommentCounter] = useState(6);
  const { comments, currentUser } = appData;

  // function voteClick(id) {
  //   console.log("clicked vote button for id: " + id);
  // }

  function updateContentWithId(commentId, newContent) {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          content: newContent,
        };
      } else if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map((reply) => {
            if (reply.id === commentId) {
              return {
                ...reply,
                content: newContent,
              };
            } else {
              return reply;
            }
          }),
        };
      } else {
        return comment;
      }
    });
    const updatedAppData = {
      currentUser: currentUser,
      comments: updatedComments,
    };
    setAppData(updatedAppData);
  }

  function deleteCommentById(commentId) {
    const revisedComments = comments.reduce((acc, elem) => {
      if (elem.id !== commentId) {
        if (elem.replies) {
          const revElem = {
            ...elem,
            replies: elem.replies.reduce((acc2, elem2) => {
              if (elem2.id !== commentId) {
                acc2.push(elem2);
              }
              return acc2;
            }, []),
          };
          acc.push(revElem);
        } else {
          acc.push(elem);
          console.log("ran concat for first if");
        }
      }
      return acc;
    }, []);
    setAppData({ currentUser: currentUser, comments: revisedComments });
  }

  function modalReset() {
    setModalId(null);
    setIsModalOpen(false);
  }

  function modalOpen(id) {
    setIsModalOpen(true);
    setModalId(id);
    console.log(id);
  }

  function handleDelete() {
    deleteCommentById(modalId);
    setIsModalOpen(false);
  }

  function submitComment(text) {
    setAppData({
      comments: [
        ...comments,
        {
          id: commentCounter,
          content: text,
          createdAt: "just now",
          score: 0,
          user: currentUser,
          replies: [],
        },
      ],
      currentUser: currentUser,
    });
    setCommentCounter((prev) => prev + 1);
  }

  function submitReplyComment(commentId, commentData, text) {
    const revisedComments = comments.reduce((acc, elem) => {
      if (elem.id === commentId) {
        const revisedElem = {
          ...elem,
          replies: [
            ...elem.replies,
            {
              id: commentCounter,
              content: text,
              createdAt: "just now",
              score: 0,
              user: currentUser,
              replyingTo: commentData.user.username,
            },
          ],
        };
        acc.push(revisedElem);
      } else {
        acc.push(elem);
      }
      return acc;
    }, []);
    setAppData({ currentUser: currentUser, comments: revisedComments });
    setCommentCounter((prev) => prev + 1);
  }

  function upvoteScoreWithId(commentId) {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          score: comment.score + 1,
        };
      } else if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map((reply) => {
            if (reply.id === commentId) {
              return {
                ...reply,
                score: reply.score + 1,
              };
            } else {
              return reply;
            }
          }),
        };
      } else {
        return comment;
      }
    });
    const updatedAppData = {
      currentUser: currentUser,
      comments: updatedComments,
    };
    setAppData(updatedAppData);
  }

  function downvoteScoreWithId(commentId) {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          score: comment.score - 1,
        };
      } else if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map((reply) => {
            if (reply.id === commentId) {
              return {
                ...reply,
                score: reply.score - 1,
              };
            } else {
              return reply;
            }
          }),
        };
      } else {
        return comment;
      }
    });
    const updatedAppData = {
      currentUser: currentUser,
      comments: updatedComments,
    };
    setAppData(updatedAppData);
  }

  function upvoteScoreWithId2(commentId) {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          score: comment.score + 2,
        };
      } else if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map((reply) => {
            if (reply.id === commentId) {
              return {
                ...reply,
                score: reply.score + 2,
              };
            } else {
              return reply;
            }
          }),
        };
      } else {
        return comment;
      }
    });
    const updatedAppData = {
      currentUser: currentUser,
      comments: updatedComments,
    };
    setAppData(updatedAppData);
  }

  function downvoteScoreWithId2(commentId) {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          score: comment.score - 2,
        };
      } else if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map((reply) => {
            if (reply.id === commentId) {
              return {
                ...reply,
                score: reply.score - 2,
              };
            } else {
              return reply;
            }
          }),
        };
      } else {
        return comment;
      }
    });
    const updatedAppData = {
      currentUser: currentUser,
      comments: updatedComments,
    };
    setAppData(updatedAppData);
  }

  return (
    <div className="App">
      <PostArea>
        {comments &&
          comments.map((comment) => (
            <Post
              key={comment.id}
              handleReplyClick={() => console.log("handlereplyclick clicked")}
              handleOpenModal={modalOpen}
              handleUpvoteClick={upvoteScoreWithId}
              handleDownvoteClick={downvoteScoreWithId}
              handleUpvoteClick2={upvoteScoreWithId2}
              handleDownvoteClick2={downvoteScoreWithId2}
              handleUpdateButton={updateContentWithId}
              handleSubmitButton={submitReplyComment}
              commentData={comment}
              currentUser={currentUser}
            />
          ))}
        <PostCompose
          currentUser={currentUser}
          handleSubmitButton={submitComment}
        />
      </PostArea>
      <Attribution />
      {isModalOpen && (
        <Modal
          handleCloseModal={modalReset}
          handleDeleteButton={handleDelete}
        />
      )}
    </div>
  );
}

export default App;
