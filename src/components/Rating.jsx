import { useContext } from "react";
import "./Rating.css";
import { RateContext } from "../App.jsx";
const Rating = () => {
  const {setIsClicked,rate, setRate} = useContext(RateContext)  
  function handleBtnClick(){
    setIsClicked(true)
  }
  return (
    <div className="container">
      <div className="img">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <div className="text">
        <h1>How did we do?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
          excepturi commodi officia voluptas adipisci placeat quod omnis
          deserunt harum quis?
        </p>
      </div>
      <div className="stars">
        <span
          onClick={(e) => {
            setRate(e.target.innerHTML);
          }} className={rate == 1 ? "active" : ""}
        >
          1
        </span>
        <span           onClick={(e) => {
            setRate(e.target.innerHTML);
          }} className={rate == 2 ? "active" : ""}>2</span>
        <span           onClick={(e) => {
            setRate(e.target.innerHTML);
          }} className={rate == 3 ? "active" : ""}>3</span>
        <span           onClick={(e) => {
            setRate(e.target.innerHTML);
          }} className={rate == 4 ? "active" : ""}>4</span>
        <span           onClick={(e) => {
            setRate(e.target.innerHTML);
          }} className={rate == 5 ? "active" : ""}>5</span>
      </div>
      <div className="btn">
        <button onClick={handleBtnClick}>submit</button>
      </div>
    </div>
  );
};

export default Rating;
