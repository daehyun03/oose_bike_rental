import "./InquryPay.css"
import {useParams} from "react-router-dom"

export default function () {
    const payment = useParams();
    return(
        <div className="container">
            <h2>결제 내역 조회{payment.no}</h2>
            <div className="contents"> 
                결제 내역 내용
            </div>
        </div>
    );
}