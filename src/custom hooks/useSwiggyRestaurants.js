import { useEffect } from "react";
import { SWIGGY_API } from "../utils/Constants";
import { useState } from "react";

const useSwiggyRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loader, setLoader] = useState(false);
  const [err, setError] = useState(null);
  const fetchSwiggyData = async () => {
    try {
      setLoader(true);
      const response = await fetch(SWIGGY_API);
      const data = await response.json();
      const allRestaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(allRestaurants);
      setRestaurants(allRestaurants);
    } catch (err) {
      setError(err);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    fetchSwiggyData();
  }, []);

  return {
    restaurants,
    err,
    loader,
    setRestaurants,
  };
};

export default useSwiggyRestaurants;
