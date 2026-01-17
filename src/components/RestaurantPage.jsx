import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_API } from "../utils/Constants";

const RestaurantPage = () => {
  const { restaurantId } = useParams();

  // const fetchRestaurantData = async () => {
  //   const response = await fetch(`${SWIGGY_RESTAURANT_API}${restaurantId}`, {
  //     headers: {
  //       "User-Agent": "Mozilla/5.0",
  //       Accept: "application/json",
  //       Referer: "https://www.swiggy.com/",
  //     },
  //   });
  //   const data = await response.text();
  //   console.log(JSON.parse(data));
  // };
  // useEffect(() => {
  //   fetchRestaurantData();
  // }, []);
  return <div>{restaurantId}</div>;
};

export default RestaurantPage;
