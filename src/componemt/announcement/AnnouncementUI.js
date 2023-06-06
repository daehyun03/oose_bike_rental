import Table from "./Table"
import "./AnnouncementUI.css"
import Paging from "./Paging";

export default function Announcement() {
    const dummy = [
        {No: 1, Title: "공지사항1", content: "1234"},
        {No: 2, Title: "공지사항2", content: "1234"},
        {No: 3, Title: "공지사항3", content: "1234"},
        {No: 4, Title: "공지사항4", content: "1234"}
    ]

    return(
        <div className="announce_container">
            <Table data={dummy}></Table>
            <div className="button_container">
                <button className="write_button">글쓰기</button>
            </div>
        </div>
    )
}