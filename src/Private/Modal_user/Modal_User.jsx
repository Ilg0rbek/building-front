import "./Modal_user.css"
import Maymun from "../../assets/images/maymun.svg"
import Edit_Image from "../../assets/images/Edit_profile.svg"
export const Modal_User = ({modal, setModal}) => {
    return(
        <div className="modal_user" style={{display: modal !== false? "flex": "none"}}>
            <div className="modal_align">
            <div className="modal_user_uchburchak"></div>
            <div className="modal_user_text">
                <div className="modal_user_header">
                    <p><strong>Профиль</strong></p>
                    <img src={Edit_Image} alt="" />
                </div>
                <div className="modal_user_card_text">
                    <div className="modal_user_image">
                    <img src={Maymun} alt="" />
                    </div>
                    <div className="modal_user_image_text">
                    <p>Noname</p>
                    <small>ID: 28207</small>
                    </div>
                </div>
                <div className="modal_user_footer">
                    <p>+998 (90) XXX XX XX</p>
                </div>
            </div>
            </div>
        </div>
    )
}