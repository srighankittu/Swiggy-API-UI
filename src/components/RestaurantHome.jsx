import React, { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/Constants";

const RestaurantHome = () => {
  //fetch, just fetch API data and log it,

  const [restaurants, setRestaurants] = useState();
  async function fetchSwiggyData() {
    const response = await fetch(SWIGGY_API);
    const data = await response.json();
    const allRestaurants =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(allRestaurants);
    // [{}, {}]
    console.log(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  return (
    <div>
      {restaurants.map((restaurant) => {
        return <div>{restaurant.info.name}</div>;
      })}
    </div>
  );
};

export default RestaurantHome;
