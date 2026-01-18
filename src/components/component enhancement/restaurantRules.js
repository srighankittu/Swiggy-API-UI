export const restaurantRules = [
  // delivery time less than 30
  {
    id: "quick-delivery",
    condition: (res) => res.info.sla.deliveryTime <= 30,
    indicator: {
      icon: "🚝",
      label: "Quick Delivery!",
      className: "",
    },
  },
  {
    id: "rating",
    condition: (res) => res.info.avgRating > 4.0,
    indicator: {
      icon: "🌟",
      label: "Rating",
      className: "",
    },
  },
  {
    id: "google-rating",
    condition: (res) => res.info.externalRatings.aggregatedRating.rating > 3.0,
    indicator: {
      icon: "👓",
      label: "Highly rated on google!",
      className: "",
    },
  },
];
