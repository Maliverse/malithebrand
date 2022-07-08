import Swipe from "../../components/swipe/Swipe";
import './reviews.css';
const Reviews = () => {
    return ( <div className="reviews-container">
        
        <div className="review-title">
        <h1>Client Reviews</h1>
        </div>

        <div>
        <Swipe />
        </div>
      
    </div> );
}
 
export default Reviews;