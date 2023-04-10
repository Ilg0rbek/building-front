import { NavLink } from "react-router-dom"
import { Charts_Thue } from "./Charts_Thue"
import { Chart_one } from "./Chart_one"

export const Statistika_cards = () => {
    return(
        <div className="statistika_cards">
            <div className="statistika_card_1">
                <select>
                    <option value="default">Этот месяц</option>
                </select>
                <div className="statistika_cards_1_charts">
                    <Chart_one/>
                    <Charts_Thue/>
                    <div className="statistika_cards_1_text">
                    <div className="statistika_cards_1_texts">
                        <div>
                        <p><strong>Успешных</strong></p>
                        <h5>104</h5>
                        </div>
                        <div>
                        <p><strong>He успешных</strong></p>
                        <h5>36</h5>
                        </div>
                        <div>
                        <p><strong>Всего</strong></p>
                        <h5>140</h5>
                    
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="sklad_card_2">
            <div className="sklad_card_2_text">
                <NavLink to={"/Прошлый_месяц"}>Прошлый месяц</NavLink>
                <div>
                    <p><strong>Успешных</strong></p>
                    <h5>92</h5>
                </div>
                <div>
                    <p><strong>Не успешных</strong></p>
                    <h5>44</h5>
                </div>
                <div>
                    <p><strong>Всего</strong></p>
                    <h5>136</h5>
                </div>
            </div>
            </div>
        </div>
    )
}