import { useNavigate } from "react-router-dom";
import useSwiggyRestaurants from "../custom hooks/useSwiggyRestaurants";
import RestaurantCard from "./ResturantCard";

const RestaurantHome = () => {
  const { restaurants, err, loader } = useSwiggyRestaurants();
  const navigate = useNavigate();

  if (loader) return <div>Loading...</div>;
  if (err) return <div>Unable to detch data From API</div>;
  return (
    <div className="flex flex-wrap m-4">
      {restaurants?.map((restaurant) => {
        return (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            area={restaurant.info.areaName}
            imgId={restaurant.info.cloudinaryImageId}
            rating={restaurant.info.avgRating}
            cusines={restaurant.info.cuisines}
            avgCost={restaurant.info.costForTwo}
            onClick={() => {
              navigate(`${restaurant.info.id}`);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantHome;
