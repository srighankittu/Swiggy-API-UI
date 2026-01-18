import { SWIGGY_IMG } from "../utils/Constants";
import Rating from "./Rating";
import RatingAdv from "./RatingAdv";

const RestaurantCard = ({
  name,
  area,
  imgId,
  rating,
  cusines,
  avgCost,
  onClick,
  indicators = [],
}) => {
  return (
    <div
      className="border border-solid border-s-stone-600 m-3"
      onClick={onClick}
    >
      <div className="m-4">
        {indicators.map((indicator) => {
          return (
            <span key={indicator.id} className={indicator.className}>
              {indicator.icon} + {indicator.label}
            </span>
          );
        })}
        <img src={SWIGGY_IMG + imgId} />
      </div>
      <div>
        <Rating rating={rating} />
        <RatingAdv rating={rating} />
      </div>
      <div>Cost For Two: {avgCost}</div>
      <div>{name}</div>
      <div>{area}</div>
      <div>
        {cusines.map((cusine) => {
          return cusine + " ";
        })}
      </div>
    </div>
  );
};
export default RestaurantCard;
