import Message from "../../assets/images/message.svg"
import Maymun from "../../assets/images/maymun.svg"
import { SearchOutlined } from "@ant-design/icons"
import { useState } from "react"
import { Modal } from "../../Modal"
export const Sklad_Header = () => {
    const [modal, setModal] = useState(!true)
    return(
        <>
        <div className="sklad_header">
            <h2>Склад</h2>
            <div className="sklad_header_image">
                <img src={Message} alt="" />
                <img src={Maymun} alt="" />
            </div>
        </div>
        <div className="sklad_form_parent">
        <form className="sklad_form">
            <SearchOutlined id="sklad_form_icon"/>
            <input autoFocus placeholder="Search" type="text" />
        </form>
        <Modal modal={modal} setModal={setModal} title="Добавить +">
        <form>
            <input type="text" placeholder="Tovar:" />
            <input type="text" placeholder="Kolichestvo:" />
            <textarea placeholder="Dlya chego:" cols="30" rows="4"></textarea>
            <button type="submit">Gotovo</button>
        </form>
        </Modal>
        <button onClick={() => setModal(!modal) }>Добавить +</button>
        </div>
        </>
    )
}