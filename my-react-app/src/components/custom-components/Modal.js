function Modal(props) {
    function confirmModel() {
        props.onConfirm()
    }

  function closeModel() {
    props.onCancel()
  }
  return (
    <div className="modal">
      <h4>Are you sure want to delete</h4>
      <button className="btn" onClick={confirmModel}>Yes</button>
      <button className="btn btn--alt" onClick={closeModel}>No</button>
    </div>
  );
}

export default Modal;
