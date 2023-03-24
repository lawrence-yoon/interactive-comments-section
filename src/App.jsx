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
  //link this comment counter to when you are creating a new entry with setAppData
  const [commentCounter, setCommentCounter] = useState(6);
  const { comments, currentUser } = appData;

  // function AppDataSetter() {
  //   () => setAppData({ ...prev });
  // }
  // function editVote(id){
  //   const voteData = {
  //     "id": id,
  //     "value": 1
  //   }
  //   setAppData({...appData, })
  // }

  function voteClick(id) {
    console.log("clicked vote button for id: " + id);
  }
  console.log(commentCounter);

  return (
    <div className="App">
      <PostArea>
        {comments &&
          comments.map((comment) => (
            <Post
              key={comment.id}
              handleReplyClick={() => console.log("handlereplyclick clicked")}
              handleOpenModal={() => setIsModalOpen(true)}
              handleUpvoteClick={voteClick}
              handleDownvoteClick={voteClick}
              commentData={comment}
              currentUser={currentUser}
            />
          ))}
        <PostCompose
          appData={appData}
          setAppData={setAppData}
          commentCounter={commentCounter}
          setCommentCounter={setCommentCounter}
        />
      </PostArea>
      <Attribution />
      {isModalOpen && <Modal handleCloseModal={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
