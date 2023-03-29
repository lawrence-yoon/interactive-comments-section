import "./module.css";
import { ModalCancelButton, ModalDeleteButton } from "../../ui/Button";

function Modal({ handleCloseModal, handleDeleteButton }) {
  return (
    <div className="modal-background" onClick={handleCloseModal}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* {children} */}
        <h3>Delete comment</h3>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="modal-button-container">
          <ModalCancelButton handleClick={handleCloseModal} />
          <ModalDeleteButton handleClick={handleDeleteButton} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
