import "./App.css";
import Attribution from "./components/features/Attribution";
import renderPosts from "./components/features/renderPosts";
import PostCompose from "./components/features/PostCompose";
import Post from "./components/features/Post";
import Modal from "./components/features/Modal";

import { useState } from "react";
import data from "../data.json";

function App() {
  const RenderedPosts = (Post) => renderPosts(Post);
  const [appData, setAppData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(appData);
  return (
    <div className="App">
      <RenderedPosts
        Component={Post}
        appData={appData}
        handleOpenModal={() => setIsModalOpen(true)}
      />
      <PostCompose {...appData.currentUser} />
      <Attribution />
      {isModalOpen && <Modal handleCloseModal={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
