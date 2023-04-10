import { NavLink } from "react-router-dom"

export const Glavni = () => {
    return(
        <>
        <div className="modal_zdaniya_header">
            {/* <div className="hidden_background"> */}
            <span className="hidden_span">
                <input type="file"  />
            </span>
            {/* </div> */}
             <ul className="modal_ul">
                <li> <p><strong>Название:</strong></p></li>
                <li><p><strong>Адрес:</strong></p></li>
                <li><p><strong>Количество этажей:</strong></p></li>
            </ul>
           
            </div>
         <div className="modal_inputs">
         <div className="modal_inputs_header">
            <div className="modal_inputs_header_text">
            <p className="child_1"><strong>Подробнее</strong></p>                    
             <div className="modal_inputs_align">
                 <p><strong>B</strong></p>
                 <p><strong>I</strong></p>
                 <p><strong>U</strong></p>
                 <p><strong>$</strong></p>
             </div>
             
            </div>
            <textarea name="" id="" cols="30" rows="4"></textarea>
         </div>

     </div>
        <div className="modal_zdaniya_glavni_buttons">
            <NavLink to={"informatsiya"}>
            <button>Dalshe</button>
            </NavLink>
        </div>
     </>
    )
}