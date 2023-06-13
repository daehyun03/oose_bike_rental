import "./InquryStaticsBike.css";

function InquryStaticsBike () {
    return(
        <div className="container">
            <h2>자전거 통계 조회</h2>
            <form className="contents"> 
                <div className="bicycle_num">자전거 일련번호
                    <div className="contents_num">#######</div>
                </div>
                <div className="bicycle_locate">자전거 위치
                    <div className="contents_locate">*******</div>
                </div>
                <div className="bicycle_date">대여 날짜
                    <div className="content_date">20231122</div>
                </div>
            </form>
        </div>
    );
}

export default InquryStaticsBike;