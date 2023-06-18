import "./InquryPay.css"
import { useEffect, useState } from "react"

const InquryPay = () => {
    const [history, setHistory] = useState({
        idx: "",
        paymentHistory: "",
        usageHistroy: ""
    });

    useEffect(() => {fetch('http://localhost:3001/sub3Control/paymentInqury', {
                        method: 'get',
                    })
                    .then(res => res.json()).then(data => {
                        setHistory(data.history)
                    })}, []); 
  

    return(
        <div className="container">
            <h2>결제 내역 조회</h2> 
            <div className="contents"> 
                <div className="content_idx">결제 내역 {history.paymentHistory}</div>
            </div> 
        </div>      
    );
}
export default InquryPay;
