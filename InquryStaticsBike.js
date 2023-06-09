import "./InquryStaticsBike.css"
import {useParams} from "react-router-dom"

export default function () {
    const statics = useParams();
    return(
        <div className="container">
            <h2>자전거 통계 조회{statics.no}</h2>
            <form className="contents"> 
                <div className="bicycle_num">자전거 일련번호</div>
                <div className="bicycle_locate">위치</div>
                <div className="bicycle_date">대여 날짜</div>
            </form>
        </div>
    );
}