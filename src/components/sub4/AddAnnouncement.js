import "./AddAnnouncement.css"
import {Link} from "react-router-dom";
import {useState} from "react";

export default function AddAnnouncement() {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState()
    function titleChange(e) {
        setTitle(e.target.value)
    }
    function contentsChange(e) {
        setContents(e.target.value)
    }
    return(
        <div className="container">
            <h2>공지사항 등록</h2>
            <div className="announce_input_container">
                <textarea className="title_input" placeholder="제목을 입력해주세요" onChange={(e) =>titleChange(e)}>

                </textarea>
                <br />
                <textarea className="content_input" placeholder="내용을 입력해주세요" onChange={(e) => contentsChange(e)}>

                </textarea>
            </div>
            <div className="button_container" onClick={() => onsubmit(title,contents)}>
                <Link to="/announcement"><button className="add_button">등록</button></Link>
            </div>
        </div>
    )
}

function onsubmit(title, contents) {
    const body = {title: title, contents: contents}
    fetch('http://127.0.0.1:3001/sub4Control/addAnnounce',{
        headers: {
            "content-type": "application/json",
        },
        method: 'post',
        body: JSON.stringify(body)
    })
    alert("공지사항 등록!")
}