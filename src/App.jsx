import { useState } from "react";
import "./App.css";
import Attribution from "./components/features/Attribution";
import PostArea from "./components/features/PostArea";
import Post from "./components/features/Post";
import {
  ModalDeleteButton,
  ModalCancelButton,
  ReplySubmitButton,
  SendButton,
  UpdateButton,
  ReplyButton,
  EditButton,
  DeleteButton,
  UpvoteButton,
  DownvoteButton,
} from "./components/ui/Button";

import data from "../data.json";

function App() {
  console.log(data);
  return (
    <div className="App">
      {/* <Post {...appData} /> */}
      <PostArea {...data} />
      <Attribution />
      {/* <ModalDeleteButton />
      <ModalCancelButton />
      <ReplySubmitButton />
      <SendButton />
      <UpdateButton />
      <ReplyButton />
      <EditButton />
      <DeleteButton />
      <UpvoteButton />
      <DownvoteButton /> */}
    </div>
  );
}

export default App;
