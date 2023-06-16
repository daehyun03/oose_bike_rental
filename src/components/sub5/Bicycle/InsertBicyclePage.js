import React, { useState } from 'react';
import {Link, useNavigate  } from 'react-router-dom';
import '../Sub5.css';
import '../../../index.css';

function InsertBicyclePage(){
    const [id, setId] = useState('');
    const navigate = useNavigate();

    function onSubmit(id) { 

        const Bicycle = {
            Bicycle : ({
                id : id,
            })
        }
        let isUnique = false;
        
        console.log(Bicycle);
        if (id === '') {
            alert("ID 입력은 필수 입니다.");
        }
        else if (isNaN(id)) {
            alert("ID는 숫자를 입력해야 합니다.");
        }
        else {
            alert("정상적으로 입력을 받았습니다.");
            //중복 체크용
            fetch('http://127.0.0.1:3001/sub5Control/insertBicycle', {
                method: 'get'
            }).then(res => res.json()).then(data => {
                if(data && data.datas.length > 0)
                {
                    isUnique = !isUnique;
                }
            });
            //실제등록
            if(isUnique){
                fetch('http://localhost:3001/sub5Control/insertBicycle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Bicycle),
                }).then((res) => res.json()).then((data) => {
                    alert("" + data + "번 등록");
                }).catch((error) => {
                    console.error('오류 발생:', error);
                });
                navigate("/bicycle");
            }
        }
    }
    return(
        <div className = "container">
            <div className="header">
                <h2>자전거 등록</h2>
            </div>
            <div className="body">
                <form className = "Insert_box" role = "form">
                    <span className = "text">자전거 ID:</span>
                    <input type="text" placeholder="자전거 ID 입력" onChange={(e)=>setId(e.target.value)}/>
                </form>
                <button className="startBtn Btn" onClick={() => onSubmit(id)}>등록</button>
                <Link to="/bicycle">
                    <button className="backBtn Btn">뒤로</button>
                </Link>
                
            </div>
        </div>
    );
}

export default InsertBicyclePage;


    //alert("자전거 등록!")
    /*
        fetch('http://localhost:3001/sub5Control/insertBicycle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Bicycle),
    }).then((res) => {
        if (!res.ok) {
            throw new Error('요청에 실패했습니다.'); // 요청이 실패한 경우 예외를 던집니다.
        }
        return res.json(); // JSON 형태로 응답을 해석하여 반환합니다.
    })
    .then((data) => {
        console.log('응답 데이터:', data); // 응답 데이터를 활용하여 필요한 작업을 수행합니다.
        alert(`${data}번 등록되었습니다.`);
    })
    .catch((error) => {
        console.error('오류 발생:', error); // 요청 또는 응답 처리 과정에서 오류가 발생한 경우, 에러를 캐치하여 처리합니다.
    });

    */