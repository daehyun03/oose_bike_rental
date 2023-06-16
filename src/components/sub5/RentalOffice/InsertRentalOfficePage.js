import React, {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';

import '../Sub5.css';
import '../../../index.css';

function InsertRentalOfficePage(){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [manager, setManager] = useState('');

    const navigate = useNavigate();

    function onSubmit(id, name, manager) {
        const rentalOffice = {
            rentalOffice : ({
                id : id,
                name : name,
                manager : manager,
            })
        }
    
        let isUnique = false;
    
        if (id === '') {
            alert("ID 입력은 필수 입니다.");
        }
        else if ((isNaN(id)) || (isNaN(manager))) {
            alert("ID는 숫자를 입력해야 합니다.");
        }
        else {
            alert("정상적으로 입력을 받았습니다.");
            //중복 체크용
            fetch('http://127.0.0.1:3001/sub5Control/insertRentalOffice', {
                method: 'get'
            }).then(res => res.json()).then(data => {
                if(data && data.datas.length > 0)
                {
                    isUnique = !isUnique;
                }
            });
            //실제등록
            if(isUnique){
                fetch('http://localhost:3001/sub5Control/insertRentalOffice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rentalOffice),
                }).then((res) => res.json()).then((data) => {
                    alert("" + data + "번 등록");
                }).catch((error) => {
                    console.error('오류 발생:', error);
                });
                navigate("/rentalOffice");
            }
        }
    }

    return(
        <div className = "container">            
            <div className="header">
                <h2>대여소 등록</h2>
            </div>
            <form className="body">
                <div className = "Insert_box" role="form" >
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
                <button className="startBtn Btn" onClick={()=>onSubmit(id,name,manager)}>등록</button>
                <Link to="/rentalOffice">
                    <button className="backBtn Btn">뒤로</button>
                </Link>
                
            </form>
        </div>
    );
}

export default InsertRentalOfficePage;