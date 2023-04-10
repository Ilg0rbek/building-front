import "./Home.css"
import { RoutesX } from "../../RoutesX/RoutesX"
import { Sidebar } from "../Sidebar"

export const Home = () => {
    return(
        <div className="home_private">
            <Sidebar/>
            <RoutesX/>
        </div>
    )
}