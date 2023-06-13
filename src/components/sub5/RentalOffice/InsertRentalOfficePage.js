import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import '../test.css';
import '../Sub5.css';
function InsertRentalOfficePage(){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [manager, setManager] = useState('');

    const handleRegister = (e) => {
        console.log(id);
        const rentalOffice = {
            rentalOffice : ({
                id : id,
                name : name,
                manager : manager,
            })
        }

        fetch('http://localhost:3001/insertRentalOffice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rentalOffice),
        });
    };


    return(
        <div className = "container">            
            <div className="header">
                <h2>대여소 등록</h2>
            </div>
            <form className="body">
                <div className = "Insert_box" role="form" onSubmit={handleRegister} >
                    <span>대여소 ID : </span>
                    <input type="text" placeholder="대여소 ID 입력" onChange={(e) => setId(e.target.value)} required />
                </div>
                <div className = "Insert_box">
                    <span>대여소 이름 : </span>
                    <input type="text" placeholder="대여소 이름 입력" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className = "Insert_box">
                    <span>관리자 ID : </span>
                    <input type="text" placeholder="관리자 ID 입력" onChange={(e) => setManager(e.target.value)} required />
                </div>
                <button className="startBtn Btn">등록</button>
                <Link to="/rentalOffice">
                    <button className="backBtn Btn">뒤로</button>
                </Link>
                
            </form>
        </div>
    );
}

export default InsertRentalOfficePage;