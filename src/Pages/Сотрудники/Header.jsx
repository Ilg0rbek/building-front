import Message from "../../assets/images/message.svg"
import Maymun from "../../assets/images/maymun.svg"
import { SearchOutlined } from "@ant-design/icons"
export const Header = () => {
    return(
        <header className="sotrudnik_header">
            <nav className="sotrudnik_nav">
               <form>
                <SearchOutlined style={{color:"#AFAFAF"}} className="search_icon"/>
                <input placeholder="Search" autoFocus type="text" />
               </form>
                <div className="sotrudnik_child_2">
                <img src={Message} alt="" />
                <img src={Maymun} alt="" />
                </div>
            </nav>
        </header>
    )
}