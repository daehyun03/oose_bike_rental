import "./InquryPay.css"
//import {useParams} from "react-router-dom"

function InquryPay() {

    return(
        <div className="container">
            <h2>결제 내역 조회</h2> 
            <div className="contents"> 
                <div className="idx">일련번호
                    <div className="content_idx">######</div>
                </div>
                <div className="method">결재 방식
                    <div className="content_method">휴대폰 결제</div>
                </div>
                <div className="isEasy">간편결제 여부
                    <div className="content_isEasy">N</div>
                </div>
                <div className="extraPay">잔여 결제금
                    <div className="content_extraPay">0</div>
                </div>
            </div>
        </div>
        
        
    );
}

export default InquryPay;