import { PhoneOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Create_Image from "../../assets/images/Create-image.svg"
export const Klient_Data = () => {
  return (
    <div className="klient_cards">
      <h3>Профиль ID 28207</h3>
      <div className="klient_card">
        <div className="klient_card_align">
          <div className="klient_card_1">
            <p>
              <NavLink to={"/leo"} className="klient_card_a">
                Информация системы
              </NavLink>
            </p>
            <p className="klient_card_p"><strong>+998 (90) XXX XX XX</strong></p>
            <p className="klient_card_p"><strong> achiles@gmail.com</strong></p>
            <p className="klient_card_p"><strong> XXX</strong></p>
          </div>
          <div className="klient_card_2">
            <p>
              <NavLink to={"/leo"} className="klient_card_a">
                Регистрация и вход
              </NavLink>
            </p>
            <ul className="klient_card_2_ul">
              <li>
                <p>Дата регистр.</p>
                <p>
                  <strong>02.02.2023</strong>
                </p>
              </li>
              <li>
                <p>Дата регистр.</p>
                <p>
                  <strong>02.02.2023</strong>
                </p>
              </li>
              <li>
                <p>Дата регистр.</p>
                <p>
                  <strong>02.02.2023</strong>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="klient_dara_child_2">
        <ul className="klient_card_child_2">
            <li>
              <NavLink to={"/nas"}>Персональная информация</NavLink>
            </li>
            <li>
              <p>Фамилия</p>
              <p><strong>Sins</strong></p>
            </li>
            <li>
              <p>Фамилия</p>
              <p><strong>Sins</strong></p>
            </li>
            <li>
              <p>Фамилия</p>
              <p><strong>Sins</strong></p>
            </li>
            <li>
              <p>Фамилия</p>
              <p><strong>Sins</strong></p>
            </li>
            <li>
              <p>Фамилия</p>
              <p><strong>Sins</strong></p>
            </li>
            <li>
              <p>Фамилия</p>
              <p><strong>Sins</strong></p>
            </li>
            
        </ul>
        <ul className="klient_card_2_child_2_ul">
          <li >
              <NavLink to={"/mesta"}>Место прописки</NavLink>
          </li>
          <li>
            <p>Индекс</p>
            <p><strong>1198</strong></p>
          </li>
          <li>
            <p>Индекс</p>
            <p><strong>1198</strong></p>
          </li>
          <li>
            <p>Индекс</p>
            <p><strong>1198</strong></p>
          </li>
          <li>
            <p>Индекс</p>
            <p><strong>1198</strong></p>
          </li>
          <li>
            <p>Индекс</p>
            <p><strong>1198</strong></p>
          </li>
        </ul>
        </div>
        
      </div>
      <div className="klient_passport">
        <div className="klient_passport_title">
          <NavLink to={"/"}>Паспорт</NavLink>
          <div className="create-image_align">
          <div className="klient_passport_image">
              <img src={Create_Image} alt="" />
          </div>
          <div className="klient_passport_image">
              <img src={Create_Image} alt="" />
          </div>
          <div className="klient_passport_image">
              <img src={Create_Image} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
