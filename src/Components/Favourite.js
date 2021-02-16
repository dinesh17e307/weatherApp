import React from "react";
import Modal from "react-modal";
function Favourite(props) {
  return (
    <div>
      <Modal
        isOpen={props.modal}
        style={{
          overlay: {
            backgroundColor: "lightgoldenrodyellow",
          },
          content: {
            color: "orange",
          },
        }}
      >
        {
          <ul>
            {props.val.map((e) => {
              return <li>{e}</li>;
            })}
          </ul>
        }
        <button onClick={() => props.tog()}>close </button>
      </Modal>
    </div>
  );
}

export default Favourite;
