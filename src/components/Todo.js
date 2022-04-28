import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  function deleteHandler() {
    setmodalIsOpen(true);
  }
  function closeModalHandller() {
    setmodalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>A Span</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandller} onConfirm={closeModalHandller} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandller} />}
    </div>
  );
}
export default Todo;
