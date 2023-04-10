import { Container_Fluid } from "../../Container_Fluid"
import { Asosiy_Header } from "../Главная/Asosiy_Header"
import "./Zdaniya.css"
import { Zdaniya_Cards } from "./Zdaniya_Cards"
import { Zdaniya_Titles } from "./Zdaniya_Header"
export const Здания = () => {
    return(
        <div className="zdaniya">
            <Container_Fluid>
            <Asosiy_Header/>
            <Zdaniya_Titles/>
            <Zdaniya_Cards/>
            </Container_Fluid>
        </div>
    )
}