import { useContext, useState } from "react"
import { Route, Routes } from "react-router"
import { Context } from "../../Context/Context"
import { Etaji, Glavni, Modal_Zdaniya, Informatsiya } from "../../Modal_Zdaniya"

export const Zdaniya_Titles = () => {
    const {modal, setModal} = useContext(Context)    
    return(
        <div className="zdaniya_titles">
            <h3><strong>Здания</strong></h3>
            <button className="dovadit" onClick={() => setModal(!modal)}>Добавить +</button>
            <Modal_Zdaniya modal={modal} setModal={setModal}>
            <Routes>
                <Route index element={<Glavni/>}/>
                <Route path="/informatsiya" element={<Informatsiya/>}/>
                <Route path="/etaji" element={<Etaji/>}/>
            </Routes>
            </Modal_Zdaniya>
        </div>
    )
}