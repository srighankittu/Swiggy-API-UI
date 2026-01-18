import { useEffect } from "react";
import { SWIGGY_API } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { fetchStart, fetchSuccess, fetchError } from "../store/restaurantSlice";

const useSwiggyRestaurants = () => {
  const dispatch = useDispatch();

  const fetchSwiggyData = async () => {
    try {
      dispatch(fetchStart());
      const response = await fetch(SWIGGY_API);
      const data = await response.json();
      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(restaurants);
      // Dispatching an action
      dispatch(fetchSuccess(restaurants));
    } catch (err) {
      dispatch(fetchError(err));
    }
  };
  useEffect(() => {
    fetchSwiggyData();
  }, []);
};

export default useSwiggyRestaurants;
