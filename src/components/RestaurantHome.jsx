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

  // DONE WITH MAJOR REACT STUFF

  // let, var, const, arrays,objects, string(some string operations) map, filter, reduce,

  // basic cats
  // custom hook,
  // higher order function
  // refux store
  // cart using context --> total item cost
  // store/ slice --> restaurant data
  // importance of store
  // working o store
  // Redux/rtk-toolkit, Zuestand--> (Veery amazing)

  // Machine coding questions(logic building) : Frontend
  // Design patterns,  coding patterns, Which is better?

  // DSA a lot of theory questions on OOPS(master), solid --> Backend
  // List of questions (easy - medium - hard)
  // 20-25 __> Masters of React(10-1days)
  // I will solve initially // HW you have solve the same quesion again without seeing my code.
  // 6th day, medium/hard (zepto(3 pagres , finished payload, including validations), file explorer, tic-tac-toe)
  // inlclude questions asked in my interviews
  // easy --> 2 ques per day
  // Medium and hard -> 2 questions per day

  return (
    <div>
      {restaurants?.map((restaurant) => {
        return <div>{restaurant.info.name}</div>;
      })}
    </div>
  );
};

export default RestaurantHome;
