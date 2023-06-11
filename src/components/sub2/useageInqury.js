import { useEffect } from 'react';
import './useageinqury.css';
import "./Table.css"


function useageInqury({match}) {
    const idx = match.params.idx;
    console.log('idx :: ', idx)
    console.log('paymentHistory :: ', paymentHistory)
    console.log('useageHistory :: ', useageHistory)

 
	// 데이터를 호출해 오는 동안 대기할 수 있도록 async, await 사용
    useEffect(async() => {
        try{
        	// '/api/BoardContent' 라는 uri 로 DB를 불러온다.
            const res = await axios.get('/api/BoardContent', {
                params: {
                    'idx': idx,
                    'paymentHistory' : paymentHistory,
                    'useageHistory' : useageHistory
                }
            })
        } catch(e) {
            console.error(e.message)
        }
    },[])
 
    return(
        <div>
            <div class = "container">
            <h2>자전거 대여기록</h2>
            <div className="button_container">
            <div>
                <div>
                    <label for='idx'>일련번호</label>
                </div>
                <div>
                    <label for='paymentHistory'>결제기록</label>
                </div>
                <div>
                    <label for='useageHistory'>대여일</label>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default useageInqury;