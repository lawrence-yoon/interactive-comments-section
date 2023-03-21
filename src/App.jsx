import { useState } from "react";
import "./App.css";
import Attribution from "./components/features/Attribution";
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
  const [appData, setAppData] = useState(data);
  console.log(appData);
  return (
    <div className="App">
      <Post {...appData} />
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
