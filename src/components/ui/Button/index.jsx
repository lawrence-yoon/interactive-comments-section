import "./module.css";
import { ReactComponent as DeleteIcon } from "/public/icon-delete.svg";
import { ReactComponent as EditIcon } from "/public/icon-edit.svg";
import { ReactComponent as MinusIcon } from "/public/icon-minus.svg";
import { ReactComponent as PlusIcon } from "/public/icon-plus.svg";
import { ReactComponent as ReplyIcon } from "/public/icon-reply.svg";

export default function Button() {
  return <button>Button</button>;
}

export function ModalDeleteButton({ handleClick }) {
  return (
    <button className="btn-style-1 modal-delete" onClick={handleClick}>
      YES, DELETE
    </button>
  );
}

export function ModalCancelButton({ handleClick }) {
  return (
    <button className="btn-style-1 modal-cancel" onClick={handleClick}>
      NO, CANCEL
    </button>
  );
}

export function ReplySubmitButton({ handleClick }) {
  return (
    <button className="btn-style-1 reply-alt" onClick={handleClick}>
      REPLY
    </button>
  );
}
export function SendButton({ handleClick }) {
  return (
    <button className="btn-style-1 send" onClick={handleClick}>
      SEND
    </button>
  );
}

export function UpdateButton({ handleClick }) {
  return (
    <button className="btn-style-1 update" onClick={handleClick}>
      UPDATE
    </button>
  );
}

export function ReplyButton({ handleClick }) {
  return (
    <button className="btn-style-2 reply" onClick={handleClick}>
      <ReplyIcon /> <span>Reply</span>
    </button>
  );
}

export function EditButton({ handleClick }) {
  return (
    <button className="btn-style-2 edit" onClick={handleClick}>
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

export function UpvoteButton({ id, handleClick }) {
  return (
    <button className="vote upvote" onClick={() => handleClick(id)}>
      <PlusIcon />
    </button>
  );
}

export function DownvoteButton({ id, handleClick }) {
  return (
    <button className="vote downvote" onClick={() => handleClick(id)}>
      <MinusIcon />
    </button>
  );
}
