import "./rentalsBike.css"


export default function () {
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