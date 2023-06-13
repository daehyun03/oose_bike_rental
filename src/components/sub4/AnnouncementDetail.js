import {useLocation} from "react-router-dom";
import "./AnnouncementDetail.css"

export default function () {
    const location = useLocation()
    return(
        <div className="container">
            <h2>{location.state.title}</h2>
            <div className="content">
                {location.state.contents}
            </div>
        </div>
    )
}