import "./module.css";
import { SendButton } from "/src/components/ui/Button";

function PostCompose({ image, username }) {
  return (
    <div className="compose-container">
      <div className="compose-post">
        <img src={image.png} alt="picture" />
        <textarea name="" id="" placeholder="Add a comment..."></textarea>
        <SendButton />
      </div>
    </div>
  );
}

export default PostCompose;
