import "./AdminUI.css"
import {Link} from "react-router-dom";


function AdminUI() {
    return (
        <div className="container">
            <h2>관리자 마이페이지</h2>
           <div className="button_container">
            <Link to="/InquryStatics"><button className="inqury_button">자전거 통계 조회</button></Link>
           </div>
        </div>
    );
}

export default AdminUI;