import "./InquryPay.css"
import { useEffect, useState } from "react"

const InquryPay = () => {
    const [payment, setPay] = useState({        
        idx: "",
        method: "",
        isEasyPayment: "",
        extraPayment: "",
    });

    useEffect(()=>{
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:8080/sub3Control/paymentInqury', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ idx : 1 }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                setPay(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []); 

    const handleRead = (e) => {
        e.preventDefault();
    };

    return(
        <div className="container">
            <h2>결제 내역 조회</h2> 

            {payment && (   
            <div className="contents"> 
                <div className="content_idx">일련번호: {payment.idx}</div>
                <div className="content_method">결제 방식: {payment.method}</div>
                <div className="content_isEasy">간편결제 여부: {payment.isEasyPayment}</div>
                <div className="content_extraPay">미납금: {payment.extraPayment}</div>
            </div> 
            )} 
        </div>      
    );
}
export default InquryPay;