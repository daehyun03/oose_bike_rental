import "./rentalBikeUI.css"
import {Link} from "react-router-dom";


function RentalBikeUI() {
    return (
        <div className="container">
            <h2>자전거 대여 페이지</h2>
           <div className="button_container">
            <Link to="/rentalBike"><button className="rental_button">자전거 대여</button></Link>
           </div>
        </div>
    );
}

export default RentalBikeUI;