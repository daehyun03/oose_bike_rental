import Table from "./Table"
import "./AnnouncementUI.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Announcement() {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {fetch('http://127.0.0.1:3001/sub4Control/announceInqury', {
        method: 'get'
    }).then(res => res.json()).then(data => {
        setDatas(data.datas)
        setLoading(false)
    })}, [])

    return(<div>
            {loading ? <div>로딩중</div> : (<div className="container">
            <h2>공지사항</h2>
            <Table data={datas}></Table>
            <div className="button_container">
                <Link to="add"><button className="write_button">글쓰기</button></Link>
            </div>
        </div>)}
    </div>
        
    )
}