import React, { useEffect, useState } from 'react';
import './Read.css';

const Read = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:3001/sub1Control/selectOneUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user: { sn: 1 } }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []); // Removed 'userData' from the dependency array


    const handleRead = (e) => {
        e.preventDefault();
        // TODO 읽기 처리 로직
    };

    return (
        <div className="read-page">
            <div className="read-content read-content-read">
                <div>
                    <h2>Read</h2>
                    <form className="wrapper-box" role="form">
                        {userData && (
                            <>
                                <div className="form-control form-control-read">ID: {userData.id}</div>
                                <div className="form-control form-control-read">Name: {userData.name}</div>
                                <div className="form-control form-control-read">Phone: {userData.phone}</div>
                                <div className="form-control form-control-read">E-mail: {userData.mail}</div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Read;
