import { useState } from "react";
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  function deleteMethod() {
    setModalOpen(true)
  }

  function addMethod() {}

  function closeModel() {
    setModalOpen(false)
  }

  return (
    <div className="first-card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn btn--alt" onClick={addMethod}>
          Add
        </button>
        <button className="btn" onClick={() => deleteMethod()}>
          Delete
        </button>
        { isModalOpen && <Modal onConfirm={closeModel} onCancel={closeModel}  /> }
        { isModalOpen && <Backdrop onCancel={closeModel} /> }
      </div>
    </div>
  );
}

export default Todo;
