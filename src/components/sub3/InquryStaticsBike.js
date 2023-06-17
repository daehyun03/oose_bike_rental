import "./InquryStaticsBike.css";
import { useEffect, useState } from "react"

    const InquryStaticsBike = () => {
        const [stast, setStast] = useState({bike: ""});
    
        useEffect(() => {
            const fetchUser = async () => {
                try {
                    const response = await fetch('http://localhost:8080/sub3Control/statistics', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ idx: 1 }),
                    });
    
                    if (!response.ok) {
                        throw new Error('Failed to fetch user data');
                    }
    
                    const data = await response.json();
                    setStast(data);
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
            <h2>자전거 통계 조회</h2>
            <form className="contents">
                {stast && (
                    <div className="bicycle_id">자전거 통계 내용{stast.bike}</div>
                )} 
            </form>
        </div>
    );
}
export default InquryStaticsBike;

