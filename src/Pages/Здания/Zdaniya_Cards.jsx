import { useState } from "react"
import Zdaniya from "../../assets/images/Zdaniya_img.svg"
export const Zdaniya_Cards = () => {
    return(
        <div className="zdaniya_card">
           <div className="zdaniya_card_child">
            <img src={Zdaniya} alt="" />
           </div>
           <ul className="zdaniya_card_child_2">
                <li>
                    <p><strong>Название: Elite Stroy Building</strong></p>
                    <p><strong>проданный: 12</strong></p>
                </li>
                <li>
                    <p><strong>Kolichestvo kvartir: 1234</strong></p>
                    <p><strong>Остальные: 82</strong></p>
                </li>
                <li><p><strong>Адрес: Tashkent, Chilonzor</strong></p></li>
           </ul>
        </div>
    )
}