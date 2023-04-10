import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Modal } from "../../Modal"
import "./Sotrudnik.css"
export const Sotrudnik_Titles = () => {
    const [block, setBlock] = useState(!true)
    const [modal, setModal] = useState(!true)
    const handleUp = () => {
        setBlock(false)
    }
    useEffect(() => {
        if(block === true){
            window.addEventListener("mouseup", handleUp)
        }else{
            window.removeEventListener("mouseup", handleUp)
        }
    }, [block])
    return(
        <>
        <div className="sotrudnik_titles">
            <h3>Сотрудники</h3>
            <div className="sotrudnik_btns">
                <button>Фильтр</button>
                <button onClick={() => setBlock(!block)}>Role </button>
                <button onClick={() => setModal(!modal)}>Добавить сотрудника +</button>
            </div>
        </div>
        <Modal modal={modal} setModal={setModal} title="Добавить сотрудника:">
        <form>
            <input type="text" placeholder="Imya" />
            <input type="text" placeholder="Familiya" />
            <input type="text"  placeholder="Otchestvo" />
            <button type="submit">Dalshe</button>
        </form>
        </Modal>
        <div style={{display: block !== true? "none": "flex"}} className="sotrudniki_bar">
            <div className="sutrudniki_bar_uchburchak"></div>
            <ul className="sutrudniki_bar_cards">
                <li><NavLink to={"/Prodajnik"}>Prodajnik</NavLink></li>
                <li><NavLink to={"/Skladchik"}>Skladchik</NavLink></li>
                <li><NavLink to={"/Menedjer"}>Menedjer</NavLink></li>
            </ul>
        </div>
        </>
        
    )
}