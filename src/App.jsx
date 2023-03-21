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

function App() {
  return (
    <div className="App">
      <Post />
      <Attribution />
      <ModalDeleteButton />
      <ModalCancelButton />
      <ReplySubmitButton />
      <SendButton />
      <UpdateButton />
      <ReplyButton />
      <EditButton />
      <DeleteButton />
      <UpvoteButton />
      <DownvoteButton />
    </div>
  );
}

export default App;
