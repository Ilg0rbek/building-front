import Edit from "../../assets/images/Edit_Kuk.svg"
import { Select } from "antd"
import { useRef } from "react"
import { NavLink } from "react-router-dom"
import Maymun from "../../assets/images/maymun.svg"
export const Nastroyka_cards = () => {
    const selectRef = useRef()
    const items = [
        {
            label: "USD",
            value: "variant"
        },
        {
            label: "Вариант 1",
            value: "Вариант_1"
        },
        {
            label: "Вариант 2",
            value: "Вариант_2"
        },
        {
            label: "Вариант 3",
            value: "Вариант_2"
        }
    ]
    const items_2 = [
        {
            label: "По умолчанию",
            value: "По_умолчанию"
        }
    ]
    const items_3 = [
        {
            label: "Русский",
            value: "rus"
        }
    ]
    const handleFocus =  (event) => {
        event.target.style.outline = "2px solid black"
    }
    return(
        <div className="nastroyka_cards">   
            <div className="nastroyka_card_1">
                <NavLink to={"/"}>Параметр</NavLink>
                <div className="nastroyka_cards_ul">
                    <p>Название компании:</p>
                    <p>XXX XXX</p>
                </div>
                <div className="nastroyka_cards_ul">
                    <p>Валюта по-умолчанию:</p>
                    <Select ref={selectRef} onFocus={handleFocus} style={{width: "60%"}} defaultValue={"variant"} options={items}></Select>
                </div>
                <div className="nastroyka_cards_ul">
                    <p>Режим:</p>
                    <Select className="nastroyka_select" defaultValue={"По_умолчанию"} style={{border: "1px solid transparent"}} ref={selectRef} onFocus={handleFocus} options={items_2}></Select>
                </div>
                <div className="nastroyka_cards_ul">
                    <p>Язык:</p>
                    <Select className="nastroyka_select" defaultValue={"rus"} style={{border: "1px solid transparent"}} ref={selectRef} onFocus={handleFocus} options={items_3}></Select>
                </div>
            </div>
            <div className="nastroyka_card_2">
                <div className="nastroyka_card_header">
                    <NavLink to={"/"}>Редактировать профиль:</NavLink>
                    <img src={Edit} alt="" />
                </div>
                <div className="nastroyka_card_2_child">
                    <img src={Maymun} alt="" />
                    <div className="nastroyka_card_2_child_text">
                        <p><strong>Noname</strong></p>
                        <small>ID: 28207</small>
                    </div>
                   
                </div>
                <div className="nastroyka_card_2_child_text_2">
                    <p><strong>+998 (90) XXX XX XX</strong></p>
                    <p><strong>achiles@gmail.com</strong></p>
                </div>
                <div className="nastroyka_card_2_child_text_3">
                <NavLink to={"/"}>Должность:</NavLink>
                <p><strong>XXX XXX</strong></p>
                </div>
                <div className="nastroyka_card_2_text_4">
                    <NavLink to={"/"}>О себе:</NavLink>
                    <p><strong>Toshkent shahrida yangi binolardagi kvartiralarga talab katta, siz bizning veb-saytimizda istalgan toifadagi.</strong></p>
                </div>
            </div>
        </div>
    )
}