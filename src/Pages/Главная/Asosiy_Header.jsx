import Message from "../../assets/images/message.svg"
import Maymun from "../../assets/images/maymun.svg"
import { Modal_User } from "../../Private/Modal_user"
import { useEffect, useState } from "react"
export const Asosiy_Header = () => {
    const [modal, setModal] = useState(!true)
    useEffect(() => {
        if(modal === true){
            window.addEventListener("mouseup", () => {
                setModal(false)
            })
        }else{
            window.removeEventListener("mouseup", () => {})
        }
    },[modal])
    return(
        <header className="asosiy_header">
            <nav className="asosiy_page_nav">
                <img src={Message} alt="" />
                <img onClick={() => setModal(!modal)} src={Maymun} alt="" />
            </nav>
            <Modal_User modal={modal} setModal={setModal}/>
            
        </header>
    )
}