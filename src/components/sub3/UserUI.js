import "./UserUI.css"
import { Link } from "react-router-dom";


function UserUI () {
    return(
        <div className="container">
            <h2>회원 마이페이지</h2>
            <div className="button_container">
                <Link to="/read"><button className="inqury_button">회원 정보 조회</button></Link>
                <Link to="/inquryPay"><button className="inqury_button">결제 내역 조회</button></Link>
            </div>
        </div>
    );
}
export default UserUI;