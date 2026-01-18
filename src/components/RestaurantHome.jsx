import { useSelector } from "react-redux";
import RestaurantCard from "./ResturantCard";
import restaurantEnhancementIndicator from "./component enhancement/restaurantEnhancementIndicator";

const RestaurantHome = () => {
  // const navigate = useNavigate();
  const { list, error, loading } = useSelector((state) => state.restaurant);
  console.log(list);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Data fetch Error</div>;

  // HOC init
  const EnhancedResCard = restaurantEnhancementIndicator(RestaurantCard);

  return (
    <div className="flex flex-wrap m-4">
      {list?.map((restaurant) => {
        return (
          <EnhancedResCard
            key={restaurant.info.id}
            restaurant={restaurant}
            name={restaurant.info.name}
            area={restaurant.info.areaName}
            imgId={restaurant.info.cloudinaryImageId}
            rating={restaurant.info.avgRating}
            cusines={restaurant.info.cuisines}
            avgCost={restaurant.info.costForTwo}
          />
        );
      })}
    </div>
  );
};

export default RestaurantHome;
