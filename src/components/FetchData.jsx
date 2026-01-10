import React from "react";
import { useEffect } from "react";
const FetchData = () => {
  async function fetchSwiggyData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3597818&lng=78.5189049&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchSwiggyData();
  }, []);
  return <div> consoled the data </div>;
};

export default FetchData;
