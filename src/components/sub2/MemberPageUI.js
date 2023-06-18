import "./RentalBikeUI.css"
import {Link} from "react-router-dom";


function RentalBikeUI() {
    return (
        <div className="container">
            <h2>,멤버 페이지</h2>
           <div className="button_container">
            <Link to="/UseageInqury"><button className="rental_button">멤버 페이지</button></Link>
           </div>
        </div>
    );
}


export default RentalBikeUI;