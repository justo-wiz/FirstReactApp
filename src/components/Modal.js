function Modal(props) {
  function canceHandler() {
    props.onCancel();
  }
  function confirmHander() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you Sure?</p>
      <button className="btn btn--alt" onClick={canceHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHander}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
