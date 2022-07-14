import Swipe from "../../components/swipe/Swipe";

import './reviews.css';
const Reviews = () => {
    return ( <div className="reviews-container" id="Reviews">
        
        <div className="review-title">
        <h1>Hear from <br /> trusted voices</h1>
        </div>

        <div>
        <Swipe />

        </div>
      
    </div> );
}
 
export default Reviews;