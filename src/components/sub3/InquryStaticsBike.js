import "./InquryStaticsBike.css";
import { useEffect, useState } from "react"

    const InquryStaticsBike = () => {
        const [stastic, setStastic] = useState({
            id:"",
            newUserStast: "",
            bikeStast: "",
            rentalOffStast: ""
        });
    
        useEffect(() => {fetch('http://localhost:3001/sub3Control/statistics', {
                        method: 'get',
                    })
                    .then(res => res.json()).then(data => {
                        setStastic(data.stastic)
                    })}, []); 
  
    return(
        <div className="container">
            <h2>자전거 통계 조회</h2>
            <form className="contents">
                <div className="bicycle_id">자전거 통계 내용 <br/> {stastic.bikeStast}</div>
            </form>
        </div>
    );
}
export default InquryStaticsBike;

