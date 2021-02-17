import React from "react";
import Modal from "react-modal";
function History(props) {
  let open = props.modal;
  const close = () => {
    open = false;
    alert(open);
  };
  return (
    <div>
      <Modal
        isOpen={open}
        height="500px"
        width="200px"
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

export default History;
