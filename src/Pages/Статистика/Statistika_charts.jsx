import { NavLink, Route, Routes } from "react-router-dom"
import { Asosiy_Chart } from "../Главная/Asosiy_Charts"
import { Prodata_Charts } from "../Главная/Prodaja_Charts"
import { Zarplata_Charts } from "../Главная/Zarplata_Charts"

export const Statistika_charts =  ( ) => {
    return(
        <div className="statistika_charts_foot">
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
    )
}