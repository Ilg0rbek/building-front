import "./Asosiy.css"
import { Container_Fluid } from "../../Container_Fluid"
import { Asosiy_Header } from "./Asosiy_Header"
import { NavLink, Route, Routes } from "react-router-dom"
import { Zarplata_Charts } from "./Zarplata_Charts"
import { Prodata_Charts } from "./Prodaja_Charts"
import {Asosiy_Chart} from "./Asosiy_Charts"
import {Asosiy_Card} from "./Asosiy_Cards"
export const Asosiy = () => {
    return(
        <div className="asosiy">
            <Container_Fluid>
                <Asosiy_Header/>
                <Asosiy_Card/>
                <div className="statistika_charts_foot" style={{width: "75%", marginLeft: "2rem"}}>
            <div className="statistika_charts_foot_header">
                <NavLink className={(params) => params.isActive? "active_foot": false } to={"Rashodi_foot"}>Rashodi</NavLink>
                <NavLink className={(params) => params.isActive? "active_foot": false } to={"Prodaja_foot"}>Prodaja</NavLink>
                <NavLink className={(params) => params.isActive? "active_foot": false } to={"Zarplata"}>Zarplata</NavLink>
            </div>
            <Routes>
                <Route index element={<Asosiy_Chart/>}/>
                <Route  path="/Rashodi_foot" element={<Asosiy_Chart/>}/>
                <Route path="/Prodaja_foot" element={<Prodata_Charts/>}/>
                <Route path="/Zarplata" element={<Zarplata_Charts/>}/>
            </Routes>
        </div>
            </Container_Fluid>
        </div>
    )
}