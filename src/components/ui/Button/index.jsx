import "./module.css";
import { ReactComponent as DeleteIcon } from "/public/icon-delete.svg";
import { ReactComponent as EditIcon } from "/public/icon-edit.svg";
import { ReactComponent as MinusIcon } from "/public/icon-minus.svg";
import { ReactComponent as PlusIcon } from "/public/icon-plus.svg";
import { ReactComponent as ReplyIcon } from "/public/icon-reply.svg";

export default function Button() {
  return <button>Button</button>;
}

export function ModalDeleteButton({ props }) {
  return (
    <button
      className="btn-style-1 modal-delete"
      onClick={() => {
        console.log("delete button pressed");
      }}
    >
      YES, DELETE
    </button>
  );
}

export function ModalCancelButton({ props }) {
  return (
    <button
      className="btn-style-1 modal-cancel"
      onClick={() => {
        console.log("cancel button pressed");
      }}
    >
      NO, CANCEL
    </button>
  );
}

export function ReplySubmitButton({ props }) {
  return (
    <button
      className="btn-style-1 reply-alt"
      onClick={() => {
        console.log("reply button pressed");
      }}
    >
      REPLY
    </button>
  );
}
export function SendButton({ props }) {
  return (
    <button
      className="btn-style-1 send"
      onClick={() => {
        console.log("send button pressed");
      }}
    >
      SEND
    </button>
  );
}

export function UpdateButton({ props }) {
  return (
    <button
      className="btn-style-1 update"
      onClick={() => {
        console.log("update button pressed");
      }}
    >
      UPDATE
    </button>
  );
}

export function ReplyButton({ props }) {
  return (
    <button
      className="btn-style-2 reply"
      onClick={() => {
        console.log("reply button pressed");
      }}
    >
      <ReplyIcon /> <span>Reply</span>
    </button>
  );
}

export function EditButton({ props }) {
  return (
    <button
      className="btn-style-2 edit"
      onClick={() => {
        console.log("edit button pressed");
      }}
    >
      <EditIcon /> <span>Edit</span>
    </button>
  );
}

export function DeleteButton({ handleClick }) {
  return (
    <button className="btn-style-2 delete" onClick={handleClick}>
      <DeleteIcon /> <span>Delete</span>
    </button>
  );
}

export function UpvoteButton({ props }) {
  return (
    <button
      className="vote upvote"
      onClick={() => {
        console.log("upvote button pressed");
      }}
    >
      <PlusIcon />
    </button>
  );
}

export function DownvoteButton({ props }) {
  return (
    <button
      className="vote downvote"
      onClick={() => {
        console.log("downvote button pressed");
      }}
    >
      <MinusIcon />
    </button>
  );
}
