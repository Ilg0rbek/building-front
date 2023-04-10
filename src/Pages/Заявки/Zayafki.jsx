import "./Zayafki.css"
import { Container_Fluid } from "../../Container_Fluid"
import { Header } from "../Сотрудники/Header"
import { Zayafki_Titles } from "./Zayafki_Titles"
import { Zayafki_cards } from "./Zayafki_cards"

export const Zayafki = () => {
    return(
        <div className="zayafki">
            <Container_Fluid>
                <Header/>
                <Zayafki_Titles/>
                <Zayafki_cards/>
            </Container_Fluid>
        </div>
    )
}