import "./Sklad.css"
import { Container_Fluid } from "../../Container_Fluid"
import { Sklad_Header } from "./SkladHeader"
import { Sklad_Cards } from "./Sklad_cards"

export const Sklad = () => {
    return(
        <div className="sklad">
            <Container_Fluid>
            <Sklad_Header/>
            <Sklad_Cards/>
            </Container_Fluid>
        </div>
    )
}