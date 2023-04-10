import "./Klient.css"
import { Container_Fluid } from "../../Container_Fluid"
import { Asosiy_Header } from "../Главная/Asosiy_Header"
import { Klient_Data } from "./Klient_Data"

export const Klient = () => {
    return(
        <div className="klient">
            <Container_Fluid>
            <Asosiy_Header/>
            <Klient_Data/>
            </Container_Fluid>
        </div>
    )
}