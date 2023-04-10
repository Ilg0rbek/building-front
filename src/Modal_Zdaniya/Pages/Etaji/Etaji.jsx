import "./Etaji.css"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { NavLink } from "react-router-dom"
import { Context } from "../../../Context/Context"

export const Etaji = () => {
    const {modal, setModal}  = useContext(Context)
    const navigator = useNavigate()
    const handleKey = (event) => {
        console.log(event.keyCode)
        if(event.keyCode === 27){
            navigator(-1)
        }
    }
    useEffect(() => {
        window.addEventListener("keyup", handleKey)
        return () => {
            window.removeEventListener("keyup", handleKey)
        }
    },[])
    const handleClick = (event) => {
        switch(event.target.id){
            case "nazad":{
                navigator(-1)
            }break;
            case "dalshe":{
                setModal(!modal)
                navigator("/здания")
            }
        }
    }
    return(
        <div className="etaji">
            <h4><strong> Etaji</strong></h4>
            <ul className="etaji_cards">
                <li>
                    <p><strong>1-etaj</strong></p>
                    <p><strong>3-kvartir</strong></p>
                    <p><strong>106m2</strong></p>
                    <input type="checkbox" checked />
                </li>
                <li>
                    <p><strong>1-etaj</strong></p>
                    <p><strong>3-kvartir</strong></p>
                    <p><strong>106m2</strong></p>
                    <input type="checkbox" checked />
                </li>
                <li>
                    <p><strong>1-etaj</strong></p>
                    <p><strong>3-kvartir</strong></p>
                    <p><strong>106m2</strong></p>
                    <input type="checkbox" checked />
                </li>
                <li>
                    <p><strong>1-etaj</strong></p>
                    <p><strong>3-kvartir</strong></p>
                    <p><strong>106m2</strong></p>
                    <input type="checkbox" checked />
                </li>
                <li>
                    <p><strong>1-etaj</strong></p>
                    <p><strong>3-kvartir</strong></p>
                    <p><strong>106m2</strong></p>
                    <input type="checkbox" checked />
                </li>
                <li>
                    <p><strong>1-etaj</strong></p>
                    <p><strong>3-kvartir</strong></p>
                    <p><strong>106m2</strong></p>
                    <input type="checkbox" checked />
                </li>
            </ul>
            <div className="zadaniya_modals_informatsiya_buttons" style={{paddingTop: "1rem"}}>
                <button onClick={handleClick} id="nazad">Nazad</button>
                <button onClick={handleClick} id="dalshe" className="gotov">Gotovo</button>
            </div>
        </div>
    )
}