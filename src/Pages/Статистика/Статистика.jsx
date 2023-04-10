import "./Statistika.css"
import { Container_Fluid } from "../../Container_Fluid"
import { Header } from "../Сотрудники/Header"
import { Statistika_title } from "./Statistika_title"
import { Statistika_cards } from "./Statistika_cards"
import { Statistika_charts } from "./Statistika_charts"

export const Статистика = () => {
    return(
        <div className="статистика">
            <Container_Fluid>
                <Header/>
                <Statistika_title/>
                <Statistika_cards/>
                <Statistika_charts/>               
            </Container_Fluid>
        </div>
    )
}