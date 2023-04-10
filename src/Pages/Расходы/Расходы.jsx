import "./Rasxodi.css"
import { Container_Fluid } from "../../Container_Fluid"
import { Asosiy_Header } from "../Главная/Asosiy_Header"
import { Header } from "../Сотрудники/Header"
import { Rasxodi_titles } from "./Rasxodi_titles"
import { Rasxodi_cards } from "./Rasxodi_cards"

export const Расходы = () => {
    return(
        <div className="rasxodi">
            <Container_Fluid>
                <Header/>
                <Rasxodi_titles/>
                <Rasxodi_cards/>
            </Container_Fluid>
        </div>
    )
}