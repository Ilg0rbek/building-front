import Image_1 from "../../assets/images/Asosiy_card_1.svg"
import Image_2 from "../../assets/images/Asosiy_page_2.svg"
import  Image_4 from "../../assets/images/Asosiy_page_3svg.svg"
import Image_3 from "../../assets/images/Asosiy_page_333svg.svg"
import Image_5 from "../../assets/images/Asosiy_page_statistika.svg"
import Image_6 from "../../assets/images/Asosiy_page_users.svg"
export const Asosiy_Card = () => {
    return(
        <div className="asosiy_cards">
            <div className="asosiy_card">
                <img src={Image_1} alt="" />
                <div className="asosiy_card_text">
                    <p><strong> Yejed   nevniyerashodi:</strong></p>
                    <h2>1234</h2>
                </div>
            </div>
            <div className="asosiy_card">
                <img src={Image_2} alt="" />
                <div className="asosiy_card_text">
                    <p><strong> Yejed   nevniyerashodi:</strong></p>
                    <h2>1234</h2>
                </div>
            </div>
            <div className="asosiy_card">
                <img src={Image_3} alt="" />
                <div className="asosiy_card_text">
                    <p><strong> Yejed   nevniyerashodi:</strong></p>
                    <h2>1234</h2>
                </div>
            </div>
            <div className="asosiy_card">
                <img src={Image_4} alt="" />
                <div className="asosiy_card_text">
                    <p><strong> Zarplata</strong></p>
                    <h2>1234</h2>
                </div>
            </div>
            <div className="asosiy_card">
                <img src={Image_5} alt="" />
                <div className="asosiy_card_text">
                    <p><strong> Statistica zarplati:</strong></p>
                    <h2>1234</h2>
                </div>
            </div>
            <div className="asosiy_card">
                <img src={Image_6} alt="" />
                <div className="asosiy_card_text">
                    <p><strong>Kolichestvo sotrudnikov</strong></p>
                    <h2>1234</h2>
                </div>
            </div>
        </div>
    )
}