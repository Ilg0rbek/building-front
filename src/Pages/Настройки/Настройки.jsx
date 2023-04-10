import "./Nastroyka.css"
import { Container_Fluid } from "../../Container_Fluid"
import { Header } from "../Сотрудники/Header"
import { Nastroyka_cards } from "./Nastroyka_cards"

export const Настройки = () => {
    return(
        <div className="nastroyka">
            <Container_Fluid>
                <Header/>
                <h2><strong>Настройки</strong></h2>
                <Nastroyka_cards/>
            </Container_Fluid>
        </div>
    )
}