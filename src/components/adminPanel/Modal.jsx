const Modal = ({ text, setModalOpen, removeItem }) => {
  return (
    <div className="modal-parent">
      <div className="modal">
        <h5>{text}</h5>
        <div className="modal-buttons">
          <button className="button rounded bg-danger" onClick={removeItem}>
            Ջնջել
          </button>
          <button
            className="button rounded cancel-button"
            onClick={() => setModalOpen((prev) => !prev)}
          >
            Ոչ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
