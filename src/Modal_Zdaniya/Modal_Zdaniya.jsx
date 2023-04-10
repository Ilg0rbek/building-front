import "./Modal.css"
export const Modal_Zdaniya = ({ children, modal, setModal }) => {
  return (
    <div className="modal_overlay" style={{display: modal !== true? "none": "flex"}}>
      <div className="modal_zdaniya">
        {children}
      </div>
    </div>
  );
};
