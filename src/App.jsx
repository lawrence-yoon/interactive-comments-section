import "./App.css";
import Attribution from "./components/features/Attribution";
import PostArea from "./components/features/PostArea";
import PostCompose from "./components/features/PostCompose";

import data from "../data.json";

function App() {
  console.log(data);
  return (
    <div className="App">
      <PostArea {...data} />
      <PostCompose {...data.currentUser} />
      <Attribution />
    </div>
  );
}

export default App;
