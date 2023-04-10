import "./Modal.css"
export const Modal = ({modal, setModal, title, children}) => {
    return(
        <div className="modal_overlay" style={{display: modal !== true? "none": "flex"}}>
            <div className="modals">
                <div className="modal_header">
                    <div className="modal_header_elements">
                        <button onClick={() => setModal(!modal)}>&times;</button>
                        <p>{title}</p>
                    </div>
                </div>
                <div className="modal_body">
                    {children}
                </div>
            </div>
        </div>
    )
}