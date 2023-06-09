import "./rentalBikeUI.css"
import {Link} from "react-router-dom";


function rentalBikeUI() {
    return (
        <div className="container">
            <div className="header"></div>
            <h2>자전거 대여 페이지</h2>
           <div className="button_container">
            input type="text" placeholder="관리자 ID 입력"
            <Link to="/rentalBike"><button className="read_button">자전거 대여</button></Link>
           </div>
        </div>
    );
}

export default rentalBikeUI;