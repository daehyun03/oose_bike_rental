import Table from "./../sub4/Table"
import "./useageInqury.css"


export default function UseageInqury() {
    const dummy = [
        {No: 1, Title: "대여1"},
        {No: 2, Title: "대여2"},
        {No: 3, Title: "대여3"},
        {No: 4, Title: "대여4"}
    ]

    return(
        <div className="container">
            <h2>이용 내역 조회</h2>
            <Table data={dummy}></Table>
            <div className="button_container">
            </div>
        </div>
    )
}