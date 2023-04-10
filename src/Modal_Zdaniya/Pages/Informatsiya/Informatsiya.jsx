import { useEffect } from "react"
import { useNavigate } from "react-router"
import { NavLink } from "react-router-dom"
import Uy from "../../../assets/images/Uy.svg"
export const Informatsiya = () => {
    const navigator = useNavigate()
    const handleNavigator = (event) => {
        if(event.keyCode === 27 ){
            navigator(-1)
        }
    }
    useEffect(() => {
        window.addEventListener("keyup", handleNavigator)
        return () => {
            window.removeEventListener("keyup", handleNavigator)
        }
    }, [])
    const handleClick = (event) => {
        switch(event.target.id){
            case "nazad":{
                navigator(-1)
            }break;
            case "dalshe":{
                // navigator("/здания/etaji")
            }
        }
    }
    return(
        <div className="modal_zdaniya_informatsiya">
            <h4><strong> Informaciya etajey</strong></h4>
            <ul className="modal_zdaniya_informatsiya_cards">
                <li>
                    <img src={Uy} alt="" />
                    <div className="modal_zdaniya_informatsiya_cards_text">
                        <p><strong>1-Etaj</strong></p>
                        <p><strong>3-Dom</strong></p>
                        <p><strong>56km2</strong></p>
                    </div>
                </li>
                <li>
                    <img src={Uy} alt="" />
                    <div className="modal_zdaniya_informatsiya_cards_text">
                        <p><strong>1-Etaj</strong></p>
                        <p><strong>3-Dom</strong></p>
                        <p><strong>56km2</strong></p>
                    </div>
                </li>
                <li>
                    <img src={Uy} alt="" />
                    <div className="modal_zdaniya_informatsiya_cards_text">
                        <p><strong>1-Etaj</strong></p>
                        <p><strong>3-Dom</strong></p>
                        <p><strong>56km2</strong></p>
                    </div>
                </li>
                <li>
                    <img src={Uy} alt="" />
                    <div className="modal_zdaniya_informatsiya_cards_text">
                        <p><strong>1-Etaj</strong></p>
                        <p><strong>3-Dom</strong></p>
                        <p><strong>56km2</strong></p>
                    </div>
                </li>
                <li>
                    <div>
                            <input type="file" />
                    </div>
                    <h4>Dobavit kvartiru</h4>
                    
                </li>
            </ul>
            <div className="zadaniya_modals_informatsiya_buttons">
                <button onClick={handleClick} id="nazad">Nazad</button>
                <NavLink to={"/здания/etaji"} className="etaji_a">
                <button onClick={handleClick} id="dalshe">Dalshe</button>
                </NavLink>
            </div>
        </div>
    )
    }