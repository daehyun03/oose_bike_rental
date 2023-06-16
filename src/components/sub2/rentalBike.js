import "./RentalsBike.css"


export default function () {
    
    const [data, setData] = useState([])
    useEffect(()=>{
        useageInq();
    }, [] )
    const useageInq = async () => {
        const response = await axios.get("http://127.0.0.1:3001/sub2Control/rentalBike")
        setData(response.data)
    }
    return(
        <div className="container">

            <div className="header">
            <h2>자전거 대여</h2>
            </div>
            <form action="search" method="get" class="search-form">
	        <input type="text" class="search-bar" name="query" placeholder="자전거 ID를 입력하세요." />
	        <input type="submit" class="search-button" value="Search" />
            
            <button type="button" className="btn btn-success">
                  대여
            </button>
            </form>
        </div>
    );
}