import "./App.css";
import Attribution from "./components/features/Attribution";
import PostArea from "./components/features/PostArea";
import PostCompose from "./components/features/PostCompose";
import Modal from "./components/features/Modal";

import { useState } from "react";
import data from "../data.json";

function App() {
  const [appData, setAppData] = useState(data);
  console.log(appData);
  return (
    <div className="App">
      <PostArea {...appData} />
      <PostCompose {...appData.currentUser} />
      <Attribution />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
