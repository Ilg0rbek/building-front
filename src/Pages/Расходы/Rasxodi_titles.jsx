import { padding } from "@mui/system"
import { useState } from "react"
import Kalendar from "../../assets/images/Kalendar..svg"
import { Modal } from "../../Modal"
export const Rasxodi_titles = () => {
    const [modal, setModal] = useState(!true)
    return(
        <>
        
        <div className="rasxodi_titles">
            <div className="rasxodi_text">
            <h3>
            Расходы
            </h3>
            <img src={Kalendar} alt="" />
            <p><strong>02.02.2023</strong></p>
            </div>
            <div>
                <button className="filter">Фильтр</button>
                <button onClick={() => setModal(!modal)} className="dovadit">Добавить +</button>
            </div>
        </div>
        <Modal title={"Rashodi"} modal={modal} setModal={setModal}>
            <form style={{textAlign: "start"}}>
            <input type="text" placeholder="Kim tomonidan" />
            <input type="text" placeholder="Summa:" />
            <p style={{paddingTop: "1rem"}}><strong>Data:</strong></p>
            <p style={{background: "#ECECEC", width: "40%", borderRadius: "6px", padding: "0.3rem"}}><strong style={{borderRight: "1px solid black", paddingRight: "8px"}}>20</strong><strong style={{padding: "0px 8px", borderRight: "1px solid black"}}>08</strong><strong style={{padding: "0px 8px"}}>2000</strong></p> 
            </form>
        </Modal>
        </>
    )
}