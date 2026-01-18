import { restaurantRules } from "./restaurantRules";

const restaurantEnhancementIndicator = (Child) => {
  return function EnhancedRes(props) {
    // const rules = restaurantRules;
    const { restaurant } = props;

    //Confused {imper}

    // [{}, {}] ==> [{}]
    const indicators = restaurantRules
      .filter((rule) => rule.condition(restaurant))
      .map((rule) => rule.indicator);

    // [{{
    //   id: "rating",
    //   condition: (res) => res.info.avgRating > 4.0,
    //   indicator: {
    //     icon: "🌟",
    //     label: "Rating",
    //     className: "",
    //   },
    // },}]

    //

    // [ {
    //     icon: "🌟",
    //     label: "Rating",
    //     className: "",
    //   }]

    return <Child {...props} indicators={indicators} />;
  };
};

export default restaurantEnhancementIndicator;
