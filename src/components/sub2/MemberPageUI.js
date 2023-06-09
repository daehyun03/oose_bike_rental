import "./MemberPageUI.css"
import { Link } from "react-router-dom";

function MemberPageUI () {
    return(
        <div className="container">
            <h2>회원 페이지</h2>
            <div className="button_container">
                <Link to="/useageInqury"><button className="inqury_button">이용 내역 조회</button></Link>
            </div>
        </div>
    );
}

export default MemberPageUI;